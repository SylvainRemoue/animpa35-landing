const navLinks = [
  { label: 'Actualités', href: '#actualites' },
  { label: 'Missions', href: '#missions' },
  { label: 'Qui sommes-nous', href: '#qui-sommes-nous' },
  { label: 'Contact', href: '#contact' },
]

export default function Footer() {
  return (
    <footer className="bg-dark text-white" role="contentinfo">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          {/* Logo & name */}
          <div>
            <a href="#" aria-label="Anim'PA 35 — Retour à l'accueil">
              <img
                src="/logo-animpa35.png"
                alt="Anim'PA 35"
                className="h-12 w-auto brightness-0 invert"
              />
            </a>
            <p className="text-white/50 text-sm mt-2">
              Association des Animateurs en gérontologie
              <br />d'Ille-et-Vilaine
            </p>
          </div>

          {/* Quick links */}
          <nav aria-label="Liens rapides du pied de page">
            <h3 className="font-heading font-bold text-sm uppercase tracking-wider text-white/70 mb-4">
              Liens rapides
            </h3>
            <ul className="space-y-2" role="list">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-white/60 hover:text-primary transition-colors duration-300 text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contact */}
          <div>
            <h3 className="font-heading font-bold text-sm uppercase tracking-wider text-white/70 mb-4">
              Contact
            </h3>
            <div className="space-y-3">
              <a
                href="mailto:animpa35@gmail.com"
                className="flex items-center gap-2 text-white/60 hover:text-primary transition-colors duration-300 text-sm"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                </svg>
                animpa35@gmail.com
              </a>
              <a
                href="https://www.facebook.com/p/ANIM-PA-35-100069875984629/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-white/60 hover:text-primary transition-colors duration-300 text-sm"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
                Facebook
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 mt-10 pt-6 text-center">
          <p className="text-white/40 text-sm">
            &copy; 2025 Anim'PA 35 — Association loi 1901
          </p>
        </div>
      </div>
    </footer>
  )
}
