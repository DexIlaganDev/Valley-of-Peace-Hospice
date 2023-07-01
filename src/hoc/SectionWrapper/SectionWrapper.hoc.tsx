import React from 'react'

import './sectionwrapper.styles.scss'

type Props = {
    alt? : boolean
}

const SectionWrapper = (Component : React.FC, { alt = false } : Props ) => function HOC() {

    return (
        <section className={`section-wrapper bg-${alt}`}>
            <Component />
        </section>
    )
}


export default SectionWrapper