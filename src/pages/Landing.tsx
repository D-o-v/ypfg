import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'


const Landing = () => {
  return (
    <div className='landing-page'>
        <Header/>
        <div className="main h-[200vh] bg-blue-100"></div>
        <Footer/>
    </div>
  )
}

export default Landing