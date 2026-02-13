import Header from './components/Header'
import Hero from './components/Hero'
import Actualites from './components/Actualites'
import Missions from './components/Missions'
import QuiSommesNous from './components/QuiSommesNous'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Actualites />
        <Missions />
        <QuiSommesNous />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default App
