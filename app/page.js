import Nav from '@/components/Nav'
import Hero from '@/components/Hero'
import HeroBottomBanner from '@/components/HeroBottomBanner'
import Mission from '@/components/Mission'
import ServiceCards from '@/components/ServiceCards'
import Tricare from '@/components/Tricare'
import Banner from '@/components/Banner'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Nav />
      <Hero />
      <HeroBottomBanner />
      <Mission />
      <ServiceCards />
      <Tricare />
      <Banner />
      <Footer />
    </>
  )
}
