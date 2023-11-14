import React from "react"
// import CoursesCard from "./CoursesCard"
import OnlineCourses from "./OnlineCourses"
import { useLocation } from "react-router-dom"

const CourseHome = () => {
  const location = useLocation()
  return (
    <>
      <section className='back_course'>
        <div className="something">
          <h2>Home / {location.pathname.split("/")[1]}</h2>
          <h1>Explore Courses</h1>
        </div>
      </section>
      <div className='margin'></div>
      {/* <CoursesCard /> */}
      <OnlineCourses />
    </>
  )
}

export default CourseHome
