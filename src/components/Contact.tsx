import { motion } from 'framer-motion'

export default function Contact() {
  return (
    <section id="contact" className="py-20 md:py-28 bg-white" aria-labelledby="contact-title">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
        >
          <h2 id="contact-title" className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Nous <span className="text-primary">contacter</span>
          </h2>
          <p className="text-gray-600 text-lg mb-12 max-w-xl mx-auto">
            Une question, une envie de rejoindre l'aventure ? N'hésitez pas à nous écrire ou à nous suivre sur Facebook !
          </p>
        </motion.div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <motion.a
            href="mailto:animpa35@gmail.com"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            whileHover={{ scale: 1.05, y: -4 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-4 bg-white rounded-2xl shadow-lg ring-1 ring-gray-100 p-6 sm:p-8 hover:shadow-2xl hover:ring-primary/20 transition-all duration-300 w-full sm:w-auto"
          >
            <div className="w-14 h-14 bg-orange-50 rounded-xl flex items-center justify-center shrink-0">
              <svg className="w-7 h-7 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
              </svg>
            </div>
            <div className="text-left">
              <div className="text-sm text-gray-500 font-medium">Email</div>
              <div className="font-heading font-bold text-gray-900">animpa35@gmail.com</div>
            </div>
          </motion.a>

          <motion.a
            href="https://www.facebook.com/p/ANIM-PA-35-100069875984629/"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            whileHover={{ scale: 1.05, y: -4 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-4 bg-white rounded-2xl shadow-lg ring-1 ring-gray-100 p-6 sm:p-8 hover:shadow-2xl hover:ring-blue-200 transition-all duration-300 w-full sm:w-auto"
          >
            <div className="w-14 h-14 bg-blue-50 rounded-xl flex items-center justify-center shrink-0">
              <svg className="w-7 h-7 text-blue-600" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
            </div>
            <div className="text-left">
              <div className="text-sm text-gray-500 font-medium">Facebook</div>
              <div className="font-heading font-bold text-gray-900">ANIM PA 35</div>
            </div>
          </motion.a>
        </div>
      </div>
    </section>
  )
}
