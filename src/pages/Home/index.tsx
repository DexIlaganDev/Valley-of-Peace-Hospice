import React from 'react'

// ** Custom Components
import TopBanner from '@/components/TopBanner/TopBanner.component'
import Nav from '@/components/Nav/Nav.component'
import Hero from './Views/Hero'
import MissionVisionGoal from './Views/MissionVIsionGoal'
import FAQ from './Views/FAQ'
import Footer from '@/components/Footer'
import DialogContact from '@/components/DialogContact'

// ** Custom Hooks
import useOpenToggle from '@/hooks/useOpenToggle'
import Team from './Views/Team'

const HomePage = () => {

    const { toggle, toggleClick } = useOpenToggle()

    const toggleModal = () => {
        toggleClick()
    }

    return (
        <>
            <TopBanner toggleModal={toggleModal} />
            <Hero />
            <MissionVisionGoal />
            <FAQ />
            <Team />
            <Footer />
            <DialogContact toggle={toggle} toggleModal={toggleModal} />
        </> 
    )
}

export default HomePage