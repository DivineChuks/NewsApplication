import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import React from 'react'
import Subscription from '@/components/Subscription'
import Hero from '@/components/Hero'
import Latest from '@/components/Latest'
import Recommended from '@/components/Recommended'

const Home = () => {
  return (
    <>
      <Hero />
      <Latest />
      <Recommended />
      <Subscription />
    </>
  )
}

export default Home