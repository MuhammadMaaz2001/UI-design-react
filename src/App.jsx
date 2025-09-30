import Hero from "./components/Hero"
import About from "./components/About"
import Services from "./components/Services"
import WhyChooseUs from "./components/WhyChooseUs"
import Industries from "./components/Industries"
import Technologies from "./components/Technologies"
import PortfolioSection from "./components/Portfolio"
import Products from "./components/Products"
import Testimonials from "./components/Testimonials"
import Awards from "./components/Awards"
import Contact from "./components/Contact"
import Footer from "./components/Footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <About />
      <Services />
      <PortfolioSection />
      <WhyChooseUs />
      <Testimonials />
      <Industries />
      <Technologies />
      <Products />
      <Awards />
      <Contact />
      <Footer />
    </main>
  )
}
