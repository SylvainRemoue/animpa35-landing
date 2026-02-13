import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import AnimatedCounter from './AnimatedCounter'

const statuts = [
  {
    title: 'Article 1',
    content: "Il est fondé entre les adhérents aux présents statuts, une association régie par la loi du 1er juillet 1901 et décret du 16 août 1901, ayant pour titre : Anim'PA 35",
  },
  {
    title: 'Article 2',
    content: "Cette association a pour buts :\n— Valoriser la vie sociale et le métier d'animateur dans les lieux d'accompagnement de personnes âgées,\n— Fédérer les structures d'accueil du secteur gérontologique d'Ille-et-Vilaine.",
  },
  {
    title: 'Article 3',
    content: "Le siège social est fixé à : Maison de Associations, 6, cours des Alliés, 35043 Rennes. Il pourra être transféré par simple décision de Conseil d'administration, la ratification par l'Assemblée Générale sera nécessaire.\nL'adresse postale est fixée à : Anim'PA 35, c/o Centre Régional de Gériatrie, 100, avenue André Bonnin, 35135 Chantepie",
  },
  {
    title: 'Article 4',
    content: "L'association se compose :\n— de membres actifs : les animateurs travaillant près des personnes âgées.\n— de membres associés : salariés, bénévoles, familles, directeurs. Ces membres seront conviés à l'assemblée générale et aux temps forts de l'association.\n— de membres bienfaiteurs.\nSont membres de l'association, les personnes qui se sont acquittées annuellement d'une somme fixée par l'assemblée générale.",
  },
  {
    title: 'Article 5',
    content: "La qualité de membre se perd par : la démission, le décès, la radiation prononcée par le Conseil d'Administration après dialogue avec l'intéressé, soit pour non-paiement volontaire, soit pour motif grave.",
  },
  {
    title: 'Article 6',
    content: "Les ressources de l'association comprennent : le montant des cotisations, les subventions de l'état, des départements et des communes ou de tout autre organisme, les recettes des différentes manifestations organisées par l'association et toutes autres recettes non interdites par la loi.",
  },
  {
    title: 'Article 7',
    content: "L'association est administrée par un conseil d'administration composé de membres actifs dont le nombre n'est pas limité, élus pour 12 mois par l'assemblée générale. Les membres sont rééligibles. Le conseil d'administration choisit parmi ses membres : une présidence collégiale de 3 membres, deux secrétaires, un trésorier.\nLa présidence collégiale réunit et préside le conseil d'administration, représente l'association en justice et dans tous les actes de la vie civile. Les secrétaires sont chargés de la correspondance statutaire. Le trésorier tient les comptes de l'association.\nEn cas de vacance de poste, le conseil d'administration pourvoit provisoirement au remplacement de ses membres, il est procédé à leur remplacement définitif par la prochaine assemblée générale.",
  },
  {
    title: 'Article 8',
    content: "Le conseil d'administration se réunit au moins une fois tous les 3 mois, sur convocation du président ou sur la demande du quart de ses membres. Les décisions sont prises à la majorité des voix, tout membre du conseil qui, sans excuse, n'aura pas assisté à 3 réunions consécutives, pourra être considéré comme démissionnaire.",
  },
  {
    title: 'Article 9',
    content: "L'assemblée générale ordinaire comprend tous les membres de l'association. Elle se tient une fois par an. Quinze jours avant la date indiquée, les membres de l'association sont convoqués par les soins de la présidence collégiale. L'ordre du jour est indiqué sur les convocations. La présidence collégiale préside l'assemblée et expose la situation morale de l'association, rend compte de sa gestion, soumet le bilan moral et le bilan financier à l'approbation de l'association. Il sera procédé, après épuisement de l'ordre du jour, au remplacement des membres du conseil sortant.",
  },
  {
    title: 'Article 10',
    content: "Si besoin est, ou sur demande de la moitié plus un de ses membres inscrits, la présidence collégiale peut provoquer une assemblée générale extraordinaire, suivant les formalités prévues par l'article 9.",
  },
  {
    title: 'Article 11',
    content: "Un règlement intérieur peut-être établi par le conseil d'administration. Ce règlement éventuel est destiné à fixer les divers points non prévus par les statuts, notamment qui ont trait à l'administration interne de l'association.",
  },
  {
    title: 'Article 12',
    content: "En cas de dissolution, l'assemblée générale extraordinaire désigne un ou plusieurs liquidateurs qui seront chargés de la liquidation des biens de l'association et dont elle détermine les pouvoirs.",
  },
]

export default function QuiSommesNous() {
  const [statutsOpen, setStatutsOpen] = useState(false)

  return (
    <section id="qui-sommes-nous" className="py-20 md:py-28 bg-gray-light" aria-labelledby="qui-sommes-nous-title">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 id="qui-sommes-nous-title" className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Qui <span className="text-primary">sommes-nous</span> ?
          </h2>
        </motion.div>

        {/* Animated counters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-3 gap-4 sm:gap-8 mb-16"
        >
          <AnimatedCounter end={60} suffix="+" label="Adhérents" />
          <AnimatedCounter end={4} label="Collectifs / an" />
          <AnimatedCounter end={2008} prefix="" label="Année de création" duration={2.5} />
        </motion.div>

        {/* Presentation text */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white rounded-2xl shadow-lg p-8 md:p-12 mb-12"
        >
          <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-5">
            <p>
              <strong className="text-gray-900">Anim'PA 35</strong> — Association des Animateurs en gérontologie d'Ille-et-Vilaine — est née en décembre 2008 de la volonté de professionnels passionnés de fédérer les animateurs travaillant auprès des personnes âgées dans le département.
            </p>
            <p>
              Notre association rassemble aujourd'hui une soixantaine d'adhérents : animateurs en EHPAD, en résidences autonomie, en accueils de jour et dans d'autres structures d'accompagnement du secteur gérontologique.
            </p>
            <p>
              Nos deux missions fondatrices restent au cœur de notre action :
            </p>
            <ul className="list-none space-y-2 pl-0">
              <li className="flex items-start gap-2">
                <span className="text-primary font-bold mt-1">—</span>
                <span>Valoriser la vie sociale et le métier d'animateur dans les lieux d'accompagnement de personnes âgées</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary font-bold mt-1">—</span>
                <span>Fédérer les structures d'accueil du secteur gérontologique d'Ille-et-Vilaine</span>
              </li>
            </ul>
            <p>
              À travers nos collectifs, nos bals inter-établissements et nos outils partagés, nous œuvrons chaque jour pour briser l'isolement professionnel, enrichir nos pratiques et offrir aux résidents des moments de vie sociale de qualité.
            </p>
            <p>
              L'association est administrée par un conseil d'administration composé d'une présidence collégiale de 3 membres, de deux secrétaires et d'un trésorier, tous bénévoles et animateurs de terrain.
            </p>
            <p className="text-sm text-gray-500">
              Siège social : Maison des Associations, 6 cours des Alliés, 35043 Rennes
            </p>
          </div>
        </motion.div>

        {/* Statuts accordion */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <button
            onClick={() => setStatutsOpen(!statutsOpen)}
            className="w-full bg-white rounded-2xl shadow-lg p-6 flex items-center justify-between hover:shadow-xl transition-shadow duration-300 group"
            aria-expanded={statutsOpen}
            aria-controls="statuts-content"
          >
            <span className="font-heading font-bold text-lg text-gray-900 group-hover:text-primary transition-colors">
              Consulter nos statuts
            </span>
            <motion.svg
              animate={{ rotate: statutsOpen ? 180 : 0 }}
              transition={{ duration: 0.3 }}
              className="w-6 h-6 text-gray-400 group-hover:text-primary transition-colors"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
              aria-hidden="true"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </motion.svg>
          </button>

          <AnimatePresence>
            {statutsOpen && (
              <motion.div
                id="statuts-content"
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.4, ease: 'easeInOut' }}
                className="overflow-hidden"
              >
                <div className="bg-white rounded-b-2xl shadow-lg p-8 md:p-12 -mt-4 pt-8 border-t border-gray-100">
                  <h3 className="font-heading text-2xl font-bold text-gray-900 mb-8 text-center">
                    Statuts de l'association Anim'PA 35
                  </h3>
                  <div className="space-y-6">
                    {statuts.map((article) => (
                      <div key={article.title}>
                        <h4 className="font-heading font-bold text-primary mb-2">
                          {article.title} :
                        </h4>
                        <p className="text-gray-700 leading-relaxed whitespace-pre-line">
                          {article.content}
                        </p>
                      </div>
                    ))}
                  </div>
                  <p className="mt-8 text-sm text-gray-500 text-center italic">
                    Fait à Rennes, le 1er décembre 2008.
                  </p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  )
}
