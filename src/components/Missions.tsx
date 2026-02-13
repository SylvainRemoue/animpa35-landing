import { motion } from 'framer-motion'

const missions = [
  {
    icon: (
      <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
      </svg>
    ),
    title: '4 Collectifs par an',
    description:
      'Des temps de rencontre et d\'échange entre animateurs du département. L\'occasion de partager nos pratiques, nos idées et de rompre l\'isolement professionnel.',
    color: 'primary',
  },
  {
    icon: (
      <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 9l10.5-3m0 6.553v3.75a2.25 2.25 0 01-1.632 2.163l-1.32.377a1.803 1.803 0 11-.99-3.467l2.31-.66a2.25 2.25 0 001.632-2.163zm0 0V2.25L9 5.25v10.303m0 0v3.75a2.25 2.25 0 01-1.632 2.163l-1.32.377a1.803 1.803 0 01-.99-3.467l2.31-.66A2.25 2.25 0 009 15.553z" />
      </svg>
    ),
    title: '2 Bals Inter-EHPAD',
    description:
      'Des moments festifs qui rassemblent résidents et professionnels de plusieurs établissements. La musique et la danse au service du lien social.',
    color: 'secondary',
  },
  {
    icon: (
      <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12.75V12A2.25 2.25 0 014.5 9.75h15A2.25 2.25 0 0121.75 12v.75m-8.69-6.44l-2.12-2.12a1.5 1.5 0 00-1.061-.44H4.5A2.25 2.25 0 002.25 6v12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9a2.25 2.25 0 00-2.25-2.25h-5.379a1.5 1.5 0 01-1.06-.44z" />
      </svg>
    ),
    title: 'Un Drive Partagé',
    description:
      'Nos adhérents bénéficient d\'un espace de ressources partagé : fiches d\'activités, outils, documents pratiques… Un avantage exclusif réservé aux membres !',
    color: 'accent-blue',
    badge: 'Réservé aux adhérents',
  },
]

const colorMap: Record<string, { bg: string; text: string; ring: string }> = {
  primary: { bg: 'bg-orange-50', text: 'text-primary', ring: 'ring-primary/20' },
  secondary: { bg: 'bg-green-50', text: 'text-secondary', ring: 'ring-secondary/20' },
  'accent-blue': { bg: 'bg-blue-50', text: 'text-accent-blue', ring: 'ring-accent-blue/20' },
}

export default function Missions() {
  return (
    <section id="missions" className="py-20 md:py-28 bg-white" aria-labelledby="missions-title">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 id="missions-title" className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Nos <span className="text-primary">Missions</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Trois piliers au cœur de notre action pour les animateurs en gérontologie.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {missions.map((mission, index) => {
            const colors = colorMap[mission.color]
            return (
              <motion.article
                key={mission.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                whileHover={{ y: -8 }}
                className="group relative bg-white rounded-2xl p-8 shadow-lg ring-1 ring-gray-100 hover:shadow-2xl hover:ring-2 transition-all duration-300"
                style={{ ['--tw-ring-color' as string]: undefined }}
              >
                <div className={`w-16 h-16 ${colors.bg} ${colors.text} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  {mission.icon}
                </div>
                <h3 className="font-heading text-xl font-bold text-gray-900 mb-3">
                  {mission.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {mission.description}
                </p>
                {mission.badge && (
                  <span className="inline-block mt-4 px-3 py-1 bg-amber-50 text-amber-700 text-xs font-semibold rounded-full ring-1 ring-amber-200">
                    {mission.badge}
                  </span>
                )}
              </motion.article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
