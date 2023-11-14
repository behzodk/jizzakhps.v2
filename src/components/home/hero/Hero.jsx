import React from "react"
import Heading from "../../common/heading/Heading"
import "./Hero.css"

const Hero = () => {
  return (
    <>
      <section className='hero'>
        <div className='container'>
          <div className='row'>
            <div className="colorr">
              <Heading subtitle='WELCOME TO Jizzakh Presidential School' title='Provides the future of Uzbekistan' />
              <p>Well-maintained institution with modern infrastructure and facilities that provide a conducive environment for learning.</p>
            <div className='button'>
              <button className='primary-btn'>
                About Us <i className='fa fa-long-arrow-alt-right'></i>
              </button>
              <button>
                Out team <i className='fa fa-long-arrow-alt-right'></i>
              </button>
            </div>
            </div>
          </div>
        </div>
      </section>
      <div className='margin'></div>
    </>
  )
}

export default Hero
