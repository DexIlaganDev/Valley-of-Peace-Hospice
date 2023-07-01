import React from 'react'

import SliderMVG from './components/SliderMVG'
import Heading from '@/components/Heading'
import SubHeading from '@/components/SubHeading'

import './mvg.styles.scss'

import { SectionWrapper } from '@/hoc'

const MissionVisionGoal = () => {
    return (
        <section id="focus" className="bottom mvg__wrapper">
            <div className='container'>
            <div className="grid mvg-grid">
                <div>
                    
                    <hgroup>
                        <Heading variant='sub'>Our Focus</Heading>
                        {/* <img src='/images/elements/divider-leaf.png' /> */}
                        <SubHeading></SubHeading>
                    </hgroup>
                    <article>
                        Valley of Peace Hospice takes pride with its staff's years of experience with providing health care to patients in the comforts of their homes, this, we are confident to perform our duties with the main purpose of letting our patients blossom with dignity, while they are being assured of their comfort throughout their life's journey

                        <br /><br />
                        We focus on dedicating our services to provide a spring of dignified care for both our patient and their family to blossom with compassion and peace in their hearts.  
                    </article>
                    
                    <div className='mvg-grid-photos'>
                        <img src="/images/grid/1.jpg" alt="" />
                        <img src="/images/grid/2.jpg" alt="" />
                        <img src="/images/grid/3.jpg" alt="" />
                    </div>

                </div>
            </div>
                
            </div>
        </section>
    )
}

export default SectionWrapper (MissionVisionGoal, {})