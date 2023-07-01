import React from 'react'

import { FaFax, FaMapMarkedAlt } from 'react-icons/fa';
import { BiSolidPhoneCall } from 'react-icons/bi';
import { MdEmail } from 'react-icons/md';

import './footer.styles.scss'


const Footer = () => {
    return (
        <footer className='footer'>
            <div className="container">
                <div className="flex">

                    <div className='grid-logo'>
                        <h3>
                            <img src='/images/logo-trans.png' alt='footer logo' />
                        </h3>
                    </div>


                    <div className='grid-contact-info'>
                        <h5>We provide support, education, and we'll answer all your important questions. 
                            <br />
                        We're just a phone call way:</h5>

                        <p>Our office hours are Mondays thru Fridays, <br />
                            9:00 AM - 5:00 PM
                            <br />
                            On-call nurses are available <br />
                            24/7, including weekends and holidays
                            <br /><br />
                        </p>

                        <div className='contact-info'>

                            <hgroup>
                                <h5><BiSolidPhoneCall /> &nbsp; Contact #</h5>
                                <p>(818) 528-5333</p>
                            </hgroup>

                            

                            <hgroup>
                                <h5><MdEmail /> &nbsp; Email</h5>
                                <p>valleyofpeacehealth@gmail.com</p>
                            </hgroup>

                            <hgroup>
                                <h5><FaFax /> &nbsp; Fax #</h5>
                                <p>(818) 528 6554</p>
                            </hgroup>

                            <hgroup>
                                <h5><FaMapMarkedAlt /> &nbsp; Address</h5>
                                <p>14640 Victory Blvd. Suite 202B Van Nuys, CA 91411</p>
                            </hgroup>
                        </div>
                        
                    </div>

                    <div className="grid-approval">
                        <h3>
                            <img src='/images/gold_seal.jfif' />
                        </h3>
                    </div>

                </div>
            </div>
            <div className='copyright'>Copyright 2023, All Rights reserved</div>
        </footer>
    )
}

export default Footer