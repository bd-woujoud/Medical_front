import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { AuthContext } from '../Context/AuthContext'
import FAQ from './FAQ'
import QSN from './QSN'


function Footer() {
  return (
   <div>
      <div className='footer'>
        <div className="footer-info">
          <div className="footer-info-left">
            <div className="footer-info__name">
              <h4><u>Savoir Plus</u></h4>
            </div>
            <div className="footer-info__returns">
              <u><Link to="/QSN">QUI SOMME NOUS</Link> </u>
              <br />
              <br />
              <u><Link to="/FAQ">FAQ</Link> </u>
            </div>
          </div>
          <div className="footer-info-right">
            <div className="footer-info__number">
              <h4><u>Contact Us</u></h4>
            </div>
            <div className="footer-info__contact">
              <i className="fa fa-envelope-o"></i> : medical.info@gmail.com
              <br />
              <br />
              <i className="fa fa-phone"></i> : +216999999999999
            </div>
          </div>
        </div>
      </div>
    </div> 
    
   
  )
}

export default Footer