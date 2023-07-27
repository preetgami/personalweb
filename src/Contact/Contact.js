import React from 'react'
import "./Contact.css"
function Contact() {
  return (
      <div className='contact-main'>
        <h1>Contact me!</h1>
        <h2>HMU </h2>
          <p>Feel free to get in touch! 
            <br/>
          <br />
        <a href="mailto: preetgami20@gmail.com" target="_blank" className='link-email'>
          Email: preetgami20@gmail.com

        </a>
            <br/>
        <br />
        <br />

        <div className='icons-media' target="_blank"> 
          <a href="https://github.com/preetgami">
            <img src={require("./git.png")}></img>

          </a>
          <a href="mailto: pgami@gamil.com" target="_blank">
            <img src={require("./gmail.png")}></img>

          </a>
          <a href="https://www.linkedin.com/in/preet-gami-21aa77247/" target="_blank">
            <img src={require("./linkedi.png")}></img>
          </a>



          </div>
           
            </p></div>

  )
}

export default Contact