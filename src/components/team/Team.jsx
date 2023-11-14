import React from "react"
import TeamCard from "./TeamCard"
import "./team.css"
import Awrapper from "../about/Awrapper"
import "../about/about.css"
import { useLocation } from "react-router-dom"

const Team = () => {
  const location = useLocation()

  return (
    <>
      <section className='back-team'>
        <div className="something">
          <h2>Home / {location.pathname.split("/")[1]}</h2>
          <h1>Team</h1>
        </div>
      </section>

      <div className='margin'></div>
      <section className='team padding'>
        <div className='container grid'>
          <TeamCard />
        </div>
      </section>
      <Awrapper />
    </>
  )
}

export default Team
