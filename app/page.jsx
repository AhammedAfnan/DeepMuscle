import React from 'react'
import HeroSection from './HeroSection'
import CardSection from './CardSection'
import Newsletter from './NewsLetter'
import Footer from './components/Footer'
import Navbar2 from './components/Navbar2'

export default function page() {
  return (
    <>
    {/* <Navbar /> */}
    <Navbar2 />
    <HeroSection />
    <CardSection /> 
    <Newsletter />
    <Footer />
    </>
  )
}
