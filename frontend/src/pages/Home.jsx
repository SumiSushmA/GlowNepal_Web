import React from 'react'
import Banner from '../components/Banner'
import Header from '../components/Header'
import ServicesMenu from '../components/ServicesMenu'
import TopStylists from '../components/TopStylists'

const Home = () => {
  return (
    <div>
      <Header />
      <ServicesMenu />
      <TopStylists />
      <Banner />
    </div>
  )
}

export default Home
