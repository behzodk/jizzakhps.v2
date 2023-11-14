import React from "react"
import "./about.css"
import AboutCard from "./AboutCard"
import { useLocation } from "react-router-dom"

const About = () => {
  const location = useLocation()
  return (
    <>
      <section className='back_about'>
        <div className="something">
          <h2>Home / {location.pathname.split("/")[1]}</h2>
          <h1>About Us</h1>
        </div>
      </section>
      <div className='margin'></div>
      <AboutCard/>
    </>
  )
}

export default About
