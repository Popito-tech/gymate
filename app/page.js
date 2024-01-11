import Image from 'next/image'
import Navbar from './component/Navbar'
import Hero from './component/Hero'
import Featured from './component/Featured'
import About from './component/About'
import ChooseUs from './component/ChooseUs'
import Trainers from './component/Trainers'
import Testimonials from './component/Testimonials'
import Gallery from './component/Gallery'
import BmiCalc from './component/BmiCalc'
import Pricing from './component/Pricing'
import Blog from './component/Blog'
import CtaBanner from './component/CtaBanner'
import Footer from './component/Footer'

export default function Home() {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <About/>
      <Featured />
      <ChooseUs />
      <Trainers />
      <Testimonials />
      <Gallery />
      <BmiCalc />
      <Pricing />
      <Blog />
      <CtaBanner />
      <Footer />
    </div>
  )
}
