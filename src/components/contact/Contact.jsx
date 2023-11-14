import React from "react"
import Back from "../common/back/Back"
import "./contact.css"

const Contact = () => {
  const map = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1729.9664812191804!2d67.82113674091256!3d40.136784067750014!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38b297dab5da3ebf%3A0x29751f78081f290a!2sJizzax%20shahridagi%20Prezident%20Maktabi!5e0!3m2!1sen!2s!4v1699881547183!5m2!1sen!2s" '
  return (
    <>
      <Back title='Contact us' />
      <section className='contacts padding'>
        <div className='container shadow flexSB'>
          <div className='left row'>
            <iframe title="map" src={map}></iframe>
          </div>
          <div className='right row'>
            <h1>Contact us</h1>
            <p>We're open for any suggestion or just to have a chat</p>

            <div className='items grid2'>
              <div className='box'>
                <h4>ADDRESS:</h4>
                <p>13, Istiklol, Sayiljoyi mahalla, Jizzakh</p>
              </div>
              <div className='box'>
                <h4>EMAIL:</h4>
                <p> contact@jizzakhps.uz</p>
              </div>
              <div className='box'>
                <h4>PHONE:</h4>
                <p> +998 72 221 59 19</p>
              </div>
            </div>

            <form action=''>
              <div className='flexSB'>
                <input type='text' placeholder='Name' />
                <input type='email' placeholder='Email' />
              </div>
              <input type='text' placeholder='Subject' />
              <textarea cols='30' rows='10'>
                Create a message here...
              </textarea>
              <button className='primary-btn'>SEND MESSAGE</button>
            </form>

            <h3>Follow us here</h3>
            <span>FACEBOOK TELEGRAM INSTAGRAM DRIBBBLE</span>
          </div>
        </div>
      </section>
    </>
  )
}

export default Contact
