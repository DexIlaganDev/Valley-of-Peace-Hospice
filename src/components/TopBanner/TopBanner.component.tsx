import React from 'react'

import { BiSolidPhoneCall } from 'react-icons/bi';
import { MdEmail } from 'react-icons/md';
import TopBannerIconText from './TopBannerIconText';


type Props = {
  toggleModal : () => void
}

const TopBanner = ({toggleModal} : Props) => {
  return (
    <div className='topBanner'>
        <div className="container topBanner__container">

          <div className='logo-wrap'>
            <img src="/images/logo2.png" alt="" />
            <hgroup>
              <h5><strong>Valley of Peace </strong></h5>
              <h6>Hospice, Inc.</h6>
            </hgroup>
          </div>

          <div className="navlinks">
            <ul>
              <li><a href="#focus">Our Focus</a></li>
              <li><a href="#faq">FAQ</a></li>
              <li><a href="#team">Our Team</a></li>
            </ul>
            <button className='cta-button' onClick={toggleModal}>Send us a message</button>
          </div>


        </div>
    </div>
    
  )
}

export default TopBanner

const styles = {
  fs : {
    fontSize : '12px'
  }
}