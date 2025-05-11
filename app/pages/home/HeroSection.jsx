import React from 'react'
import Image from 'next/image'
import heroImage from '../../assets/home/banner1.webp'

export default function HeroSection() {
  return (
    <div>
        <Image src={heroImage} alt='banner1-image' className='w-full h-[700px]' />
    </div>
  )
}
