import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'

interface PostMedia {
  type: 'image' | 'video'
  url: string
}

interface Post {
  content: string
  date: string
  media: PostMedia[]
}

const INITIAL_COUNT = 4

export default function Actualites() {
  const [posts, setPosts] = useState<Post[]>([])
  const [loading, setLoading] = useState(true)
  const [showAll, setShowAll] = useState(false)

  useEffect(() => {
    fetch('/posts.json')
      .then((res) => res.json())
      .then((data: Post[]) => {
        const sorted = data.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
        setPosts(sorted)
        setLoading(false)
      })
      .catch(() => setLoading(false))
  }, [])

  const visiblePosts = showAll ? posts : posts.slice(0, INITIAL_COUNT)
  const imgs = (p: Post) => p.media?.filter((m) => m.type === 'image') || []
  const vids = (p: Post) => p.media?.filter((m) => m.type === 'video') || []

  return (
    <section id="actualites" className="py-20 md:py-28 bg-gray-light" aria-labelledby="actualites-title">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 id="actualites-title" className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Nos <span className="text-primary">Actualités</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Retrouvez ici les dernières nouvelles d'Anim'PA 35. Événements, rencontres, bals… restez informés !
          </p>
        </motion.div>

        {loading && (
          <div className="space-y-6">
            {[0, 1, 2].map((i) => (
              <div key={i} className="bg-white rounded-2xl shadow-md ring-1 ring-gray-100 p-6 sm:p-8 animate-pulse">
                <div className="h-4 bg-gray-200 rounded w-3/4 mb-4" />
                <div className="h-4 bg-gray-200 rounded w-full mb-2" />
                <div className="h-4 bg-gray-200 rounded w-5/6" />
              </div>
            ))}
          </div>
        )}

        {!loading && posts.length === 0 && (
          <div className="bg-white rounded-2xl shadow-md ring-1 ring-gray-100 p-12 text-center">
            <p className="text-gray-400 text-lg">Aucune actualité pour le moment.</p>
          </div>
        )}

        {!loading && posts.length > 0 && (
          <>
            <div className="space-y-6">
              <AnimatePresence mode="popLayout">
                {visiblePosts.map((post, index) => {
                  const postImgs = imgs(post)
                  const postVids = vids(post)
                  return (
                    <motion.article
                      key={post.date + index}
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.4, delay: index < INITIAL_COUNT ? index * 0.1 : 0 }}
                      className="bg-white rounded-2xl shadow-md hover:shadow-xl ring-1 ring-gray-100 transition-shadow duration-300 overflow-hidden"
                    >
                      <div className="p-6 sm:p-8">
                        <p className="text-gray-700 leading-relaxed whitespace-pre-line">
                          {post.content}
                        </p>

                        {postImgs.length === 1 && (
                          <div className="mt-5 -mx-6 sm:-mx-8">
                            <img src={postImgs[0].url} alt="" className="w-full object-cover max-h-[28rem]" loading="lazy" />
                          </div>
                        )}

                        {postImgs.length > 1 && (
                          <div className="mt-5 -mx-6 sm:-mx-8 grid gap-0.5 grid-cols-2">
                            {postImgs.slice(0, 4).map((img, i) => (
                              <div key={i} className={`relative overflow-hidden ${postImgs.length === 3 && i === 0 ? 'row-span-2' : ''}`}>
                                <img
                                  src={img.url}
                                  alt=""
                                  className={`w-full object-cover ${postImgs.length === 3 && i === 0 ? 'h-full min-h-56' : 'h-56'}`}
                                  loading="lazy"
                                />
                                {i === 3 && postImgs.length > 4 && (
                                  <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                                    <span className="text-white font-heading font-bold text-2xl">+{postImgs.length - 4}</span>
                                  </div>
                                )}
                              </div>
                            ))}
                          </div>
                        )}

                        {postVids.length > 0 && (
                          <div className="mt-5 -mx-6 sm:-mx-8">
                            <video src={postVids[0].url} controls preload="metadata" className="w-full max-h-[28rem]">
                              Votre navigateur ne supporte pas la lecture de vidéos.
                            </video>
                          </div>
                        )}

                        <div className="mt-4 pt-4 border-t border-gray-50">
                          <time dateTime={post.date} className="text-sm text-gray-400">
                            {formatDate(post.date)}
                          </time>
                        </div>
                      </div>
                    </motion.article>
                  )
                })}
              </AnimatePresence>
            </div>

            {posts.length > INITIAL_COUNT && (
              <div className="text-center mt-8">
                <button
                  onClick={() => setShowAll(!showAll)}
                  className="inline-flex items-center gap-2 text-primary hover:text-primary-dark font-heading font-semibold transition-colors duration-300 group"
                >
                  {showAll ? (
                    <>
                      Voir moins
                      <svg className="w-4 h-4 group-hover:-translate-y-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
                      </svg>
                    </>
                  ) : (
                    <>
                      Voir plus d'actualités ({posts.length - INITIAL_COUNT} restantes)
                      <svg className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                      </svg>
                    </>
                  )}
                </button>
              </div>
            )}
          </>
        )}
      </div>
    </section>
  )
}

function formatDate(dateStr: string): string {
  return new Date(dateStr + 'T00:00:00').toLocaleDateString('fr-FR', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })
}
