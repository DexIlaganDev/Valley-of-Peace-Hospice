import React from 'react'

import './hero.styles.scss'
import Heading from '@/components/Heading'
import SubHeading from '@/components/SubHeading'
import SliderHero from './components/SliderHero'

const Hero = () => {
    return (
        <section className='hero-section top'>
            <div className='container'>
                <div className="grid hero-layout">

                    <hgroup>
                        <Heading>For you to blossom <br className='md-br' />
                            in comfort and dignity <br className='md-br' />
                            is the grand purpose of our duty...
                            </Heading>
                        <SubHeading>
                            
                        </SubHeading>
                    </hgroup>

                    <div className='heart-grid'>
                        <div>
                            <SliderHero />
                        </div>
                    </div>

                </div>
            </div>
        </section>
        
    )
}

export default Hero