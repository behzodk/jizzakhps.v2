import React from "react"
import { Link } from "react-router-dom"

const Head = () => {
  return (
    <>
      <section className='head'>
        <div className='container flexSB'>
          <Link to='/' className='logo'>
            <img className='first' id="jpslogosvg"src="images/blog/white.svg" alt="" />
            <img className="second" id="jpslogosvg"src="images/blog/blue.svg" alt="" />
            <h1>Jizzakh</h1>
            <span>Presidential School</span>
          </Link>

          <div className='social'>
            <a href="https://www.facebook.com/jizzaxpm/" target="_blank" rel="noreferrer"><i className='fab fa-facebook-f icon'></i></a>
            <a href="https://instagram.com/jizzax_pm?utm_medium=copy_link" target="_blank" rel="noreferrer"><i className='fab fa-instagram icon'></i></a>
            <a href="https://t.me/JizzaxPrezidentMaktabi" target="_blank" rel="noreferrer"><i className='fa fa-paper-plane icon'></i></a>
            <a href="https://www.youtube.com/@jizzaxshahridagipm" target="_blank" rel="noreferrer"><i className='fab fa-youtube icon'></i></a>
          </div>
        </div>
      </section>
    </>
  )
}

export default Head
