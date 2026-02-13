import express from 'express'
import multer from 'multer'
import { readFileSync, writeFileSync, unlinkSync, existsSync } from 'fs'
import { join, dirname, extname } from 'path'
import { fileURLToPath } from 'url'
import { execSync } from 'child_process'

const __dirname = dirname(fileURLToPath(import.meta.url))
const ROOT = join(__dirname, '..')
const POSTS_FILE = join(ROOT, 'public', 'posts.json')
const IMAGES_DIR = join(ROOT, 'public', 'images')

const app = express()
app.use(express.json())

// Multer config — save uploads to public/images/
const storage = multer.diskStorage({
  destination: IMAGES_DIR,
  filename: (_req, file, cb) => {
    const unique = Date.now() + '-' + Math.round(Math.random() * 1e4)
    cb(null, unique + extname(file.originalname))
  },
})
const upload = multer({ storage, limits: { fileSize: 20 * 1024 * 1024 } })

// ---- Helpers ----

function readPosts() {
  if (!existsSync(POSTS_FILE)) return []
  return JSON.parse(readFileSync(POSTS_FILE, 'utf-8'))
}

function writePosts(posts) {
  writeFileSync(POSTS_FILE, JSON.stringify(posts, null, 2) + '\n', 'utf-8')
}

function gitPush(message) {
  try {
    execSync('git add -A', { cwd: ROOT, stdio: 'pipe' })
    execSync(`git commit -m "${message}"`, { cwd: ROOT, stdio: 'pipe' })
    execSync('git push', { cwd: ROOT, stdio: 'pipe' })
    return { ok: true }
  } catch (e) {
    return { ok: false, error: e.stderr?.toString() || e.message }
  }
}

// ---- API ----

// List posts
app.get('/api/posts', (_req, res) => {
  res.json(readPosts())
})

// Create post
app.post('/api/posts', upload.array('files', 10), (req, res) => {
  const posts = readPosts()
  const media = (req.files || []).map((f) => ({
    type: f.mimetype.startsWith('video/') ? 'video' : 'image',
    url: `/animpa35-landing/images/${f.filename}`,
  }))
  const post = {
    content: req.body.content || '',
    date: req.body.date || new Date().toISOString().slice(0, 10),
    media,
  }
  posts.unshift(post)
  writePosts(posts)
  const git = gitPush('Ajout actualité')
  res.json({ post, git })
})

// Update post
app.put('/api/posts/:index', upload.array('files', 10), (req, res) => {
  const posts = readPosts()
  const idx = parseInt(req.params.index)
  if (idx < 0 || idx >= posts.length) return res.status(404).json({ error: 'Post introuvable' })

  if (req.body.content !== undefined) posts[idx].content = req.body.content
  if (req.body.date !== undefined) posts[idx].date = req.body.date

  // Add new uploaded media
  const newMedia = (req.files || []).map((f) => ({
    type: f.mimetype.startsWith('video/') ? 'video' : 'image',
    url: `/animpa35-landing/images/${f.filename}`,
  }))
  if (newMedia.length > 0) {
    posts[idx].media = [...(posts[idx].media || []), ...newMedia]
  }

  // Remove media flagged for deletion
  if (req.body.removeMedia) {
    const toRemove = JSON.parse(req.body.removeMedia)
    for (const url of toRemove) {
      const filename = url.split('/').pop()
      const filepath = join(IMAGES_DIR, filename)
      if (existsSync(filepath)) unlinkSync(filepath)
    }
    posts[idx].media = (posts[idx].media || []).filter((m) => !toRemove.includes(m.url))
  }

  writePosts(posts)
  const git = gitPush('Modification actualité')
  res.json({ post: posts[idx], git })
})

// Delete post
app.delete('/api/posts/:index', (req, res) => {
  const posts = readPosts()
  const idx = parseInt(req.params.index)
  if (idx < 0 || idx >= posts.length) return res.status(404).json({ error: 'Post introuvable' })

  // Clean up media files
  for (const m of posts[idx].media || []) {
    const filename = m.url.split('/').pop()
    const filepath = join(IMAGES_DIR, filename)
    if (existsSync(filepath)) unlinkSync(filepath)
  }

  posts.splice(idx, 1)
  writePosts(posts)
  const git = gitPush('Suppression actualité')
  res.json({ ok: true, git })
})

// Serve admin UI
app.get('/', (_req, res) => {
  res.sendFile(join(__dirname, 'index.html'))
})

// Serve uploaded images for preview
app.use('/preview-images', express.static(IMAGES_DIR))

const PORT = 3333
app.listen(PORT, () => {
  console.log(`\n  Back-office Anim'PA 35`)
  console.log(`  → http://localhost:${PORT}\n`)
})
