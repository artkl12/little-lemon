import React from 'react'
import "./Footer.css"

function Footer() {
  return (
    <>
      <footer className='footer__container'>
        <div>
          <img src="Asset 9@4x.png" alt="logo" />
        </div>
        <div>
          <ul>
            <h6>Find us</h6>
            <div className='footer__soc'>
              <li><img src="facebook.svg" alt="facebook" style={{width:"1rem"}} /></li>
              <li><img src="twitter.svg" alt="twitter" style={{width:"1rem"}} /></li>
              <li><img src="instagram.svg" alt="instagram" style={{width:"1rem"}} /></li>
              <li><img src="youtube.svg" alt="youtube" style={{width:"1rem"}} /></li>
            </div>
          </ul>
        </div>
        <div>
          <ul>
            <h6>Opening hours</h6>
            <li>Mo. - Th., Su: 12:00 - 22:00</li>
            <li>Fr., Sa: 12:00 - 24:00</li>
          </ul>
        </div>
        <div>
          <ul>
            <h6>Contact us</h6>
            <li>Adress: 220 N Green St, Chicago, IL 60607</li>
            <li>Phone: (312) 555-5555</li>
            <li>Email: contact@ littlelemon.biz</li>
          </ul>
        </div>
      </footer>
    </>
  )
}

export default Footer