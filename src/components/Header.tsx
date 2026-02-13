import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const navLinks = [
  { label: 'Actualités', href: '#actualites' },
  { label: 'Nos Missions', href: '#missions' },
  { label: 'Qui sommes-nous', href: '#qui-sommes-nous' },
  { label: 'Contact', href: '#contact' },
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  const handleNavClick = () => {
    setMenuOpen(false)
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md shadow-lg'
          : 'bg-transparent'
      }`}
      role="banner"
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16 md:h-20" aria-label="Navigation principale">
        <a href="#" className="flex items-center z-10" aria-label="Anim'PA 35 — Retour à l'accueil">
          <img
            src="/logo-animpa35.png"
            alt="Anim'PA 35"
            className={`h-12 md:h-14 w-auto transition-all duration-300 ${scrolled ? '' : 'brightness-0 invert'}`}
          />
        </a>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-8" role="list">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className={`font-heading font-semibold text-sm tracking-wide transition-colors duration-300 hover:text-primary ${
                  scrolled ? 'text-gray-700' : 'text-white'
                }`}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Burger button */}
        <button
          className="md:hidden z-10 p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
          aria-expanded={menuOpen}
        >
          <div className="w-6 h-5 relative flex flex-col justify-between">
            <span className={`block h-0.5 w-6 rounded transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2 bg-gray-800' : scrolled ? 'bg-gray-800' : 'bg-white'}`} />
            <span className={`block h-0.5 w-6 rounded transition-all duration-300 ${menuOpen ? 'opacity-0' : scrolled ? 'bg-gray-800' : 'bg-white'}`} />
            <span className={`block h-0.5 w-6 rounded transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2 bg-gray-800' : scrolled ? 'bg-gray-800' : 'bg-white'}`} />
          </div>
        </button>

        {/* Mobile menu */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 bg-white z-0 flex items-center justify-center md:hidden"
            >
              <ul className="flex flex-col items-center gap-8" role="list">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      onClick={handleNavClick}
                      className="font-heading font-bold text-2xl text-gray-800 hover:text-primary transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  )
}
