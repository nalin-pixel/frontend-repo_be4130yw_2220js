import Navbar from './components/Navbar'
import Hero from './components/Hero'
import FeatureGrid from './components/FeatureGrid'
import DemoPanel from './components/DemoPanel'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-[#0B1020] text-white selection:bg-indigo-300/30 selection:text-white">
      <Navbar />
      <main className="pt-20">
        <Hero />
        <FeatureGrid />
        <DemoPanel />
        <Footer />
      </main>
    </div>
  )
}

export default App
