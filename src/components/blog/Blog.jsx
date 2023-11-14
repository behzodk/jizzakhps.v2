import React from "react"
import BlogCard from "./BlogCard"
import "./blog.css"
import { useLocation } from "react-router-dom"

const Blog = () => {
  const location = useLocation()
  return (
    <>
      <section className='back_post'>
        <div className="something">
          <h2>Home / {location.pathname.split("/")[1]}</h2>
          <h1>Blog Posts</h1>
        </div>
      </section>
      <div className='margin'></div>

      <section className='blog padding'>
        <div className='container grid2'>
          <BlogCard />
        </div>
      </section>
    </>
  )
}

export default Blog
