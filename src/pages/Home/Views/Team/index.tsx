import Heading from '@/components/Heading'
import { SectionWrapper } from '@/hoc'
import React from 'react'

import './team.styles.scss'

type Props = {}

const Team = (props: Props) => {
    return (
        <div id="team" className="container">
            <hgroup className='content'>
                <Heading>Our Team Members</Heading>
                <h6></h6>
            </hgroup>
            <div className="grid">

            

                <div>
                    <div>
                        <ul className='content'>
                            <li>Medical Director/Physician</li>
                            <li>Registered Nurses</li>
                            <li>Licensed Vocational Nurses</li>
                            <li>Medical Social Workers</li>
                            <li>Bereavement Counselors</li>
                            <li>Chaplains</li>
                            <li>Hospice Aides</li>
                            <li>Trained Volunteers</li>
                            <li>Physical and Speech Therapists</li>
                        </ul>
                    </div>

                </div>
                <div>
                    <article>
                        We do not consider ourselves as just a provider of service, but as a provider of outcomes and results be it physical, emotional, and spiritual, while still maintaining professional boundaries.<br /><br />
                        In a sense, the services we provide strenghten the relationships between our patients and those who love them dearly. 
                        <br /><br />This goes as well with our own relationships with those whom we are caring for at Valley of Peace Hospice, as all we do here, we dedicate to you.
                    </article>
                </div>

            </div>
        </div>
    )
}

export default SectionWrapper (Team, {alt: true})