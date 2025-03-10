import Team from '../components/Team';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Events from '../components/Events';
export function Homepage() {
    return (
        
        <div className="font-sans">
      <Navbar />
      <Hero />
      <About />
      <Events />
      <Team />
      <Footer />
    </div>
    )
}