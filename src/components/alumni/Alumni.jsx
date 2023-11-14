import React from "react"
import Testimonal from "../home/testimonal/Testimonal"
import { useLocation } from "react-router-dom"
// import "./contact.css"
import './Alumni.css'

const Alumni = () => {
  const location = useLocation()
   return (
    <>
      <section className='back_alumni'>
        <div className="something">
          <h2>Home / {location.pathname.split("/")[1]}</h2>
          <h1>Alumni</h1>
        </div>
      </section>
      <div className='margin'></div>

      <Testimonal/>
    </>
  )
}

export default Alumni
