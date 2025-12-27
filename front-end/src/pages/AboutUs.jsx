import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const AboutUs = () => {
  return (
    <>
      <Navbar />
      <section className='py-24 bg-[#11100e]'>
        <div className="container mx-auto text-center px-4">
          <div className='p-4'>
            <h2
              className='text-gray-300 text-3xl font-sans font-semibold p-2'
            >ABOUT US</h2>
            <p className='text-gray-500'>We are passionate about animals and aim to bring you fascinating facts and beautiful images.</p>
          </div>
        </div>
      </section>
      <Footer />
    </>
  )
}

export default AboutUs
