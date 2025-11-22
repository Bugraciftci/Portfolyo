import React from 'react'
import Hero from './Hero'
import './Home.css'

const Home = () => {
  return (
    <>
      <div className="home-header">
        <div className="container">
          <h1 className="home-title">
            Home<span className="title-dot">.</span>
          </h1>
        </div>
      </div>
      <Hero />
    </>
  )
}

export default Home

