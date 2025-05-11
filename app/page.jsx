import React from 'react'
import Navbar from './components/Navbar'
import HeroSection from './pages/home/HeroSection'
import CardSection from './pages/home/CardSection'

export default function page() {
  return (
    <>
    <Navbar />
    <HeroSection />
    <CardSection />
    </>
  )
}
