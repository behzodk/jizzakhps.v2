import React from "react"
import { blog } from "../../../dummydata"
import "./footer.css"

const Footer = () => {
  const d = new Date();
  const year = d.getFullYear()
  return (
    <>
      <section className='newletter'>
        <div className='container flexSB'>
          <div className='left row'>
            <h1>Newsletter - Stay tune and get the latest update</h1>
            <span>Far far away, behind the word mountains</span>
          </div>
          <div className='right row'>
            <input type='text' placeholder='Enter email address' />
            <i className='fa fa-paper-plane'></i>
          </div>
        </div>
      </section>
      <footer>
        <div className='container padding'>
          <div className='box logo'>
            <h1>Jizzakh PS</h1>
            <span>School of dreams of every student</span>
            <p>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>

            <a href="https://www.facebook.com/jizzaxpm" target="_blank" rel="noreferrer"><i className='fab fa-facebook-f icon'></i></a>
            <a href="https://www.instagram.com/jizzax_pm/" target="_blank" rel="noreferrer"><i className='fab fa-instagram icon'></i></a>
            <a href="https://t.me/JizzaxPrezidentMaktabi" target="_blank" rel="noreferrer"><i className='fa fa-paper-plane icon'></i></a>
          </div>
          <div className='box link'>
            <h3>Explore</h3>
            <ul>
              <li>About Us</li>
              <li>Services</li>
              <li>Courses</li>
              <li>Blog</li>
              <li>Contact us</li>
            </ul>
          </div>
          <div className='box link'>
            <h3>Quick Links</h3>
            <ul>
              <li>Contact Us</li>
              <li>Terms & Conditions</li>
              <li>Privacy</li>
              <li>Feedbacks</li>
            </ul>
          </div>
          <div className='box'>
            <h3>Recent Post</h3>
            {blog.slice(0, 3).map((val) => (
              <div className='items flexSB'>
                <div className='img'>
                  <img src={val.cover} alt='' />
                </div>
                <div className='text'>
                  <span>
                    <i className='fa fa-calendar-alt'></i>
                    <label htmlFor=''>{val.date}</label>
                  </span>
                  <span>
                    <i className='fa fa-user'></i>
                    <label htmlFor=''>{val.type}</label>
                  </span>
                  <h4>{val.title.slice(0, 40)}...</h4>
                </div>
              </div>
            ))}
          </div>
          <div className='box last'>
            <h3>Have a Questions?</h3>
            <ul>
              <li>
                <i className='fa fa-map'></i>
                13, Istiklol, Sayiljoyi mahalla, Jizzakh
              </li>
              <li>
                <i className='fa fa-phone-alt'></i>
                <a href="tel:+998 72 221 59 19">+998 72 221 59 19</a>
              </li>
              <li>
                <i className='fa fa-envelope'></i>
                <a className="email" href="mailto:contact@jizzakhps.uz">contact@jizzakhps.uz</a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
      <div className='legal'>
        <p>
          Copyright ©{year} All rights reserved
        </p>
      </div>
    </>
  )
}

export default Footer
