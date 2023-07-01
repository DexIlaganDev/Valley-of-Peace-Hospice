import React from 'react'

import { SectionWrapper } from '@/hoc'
import Heading from '@/components/Heading'
import SubHeading from '@/components/SubHeading'
import Card from '@/components/Card'

import './faq.styles.scss'

// DATA
import { FAQ as faqdata } from '@/data/faq'


const FAQ = () => {

    const [open, setOpen] = React.useState<boolean>(false)

    return (
        <div id="faq" className="container">

            <hgroup className='content'>
                <Heading variant='sub'>Frequently Asked Questions</Heading>
                <SubHeading></SubHeading>
             </hgroup>

            <Card>
                {
                    faqdata.map( (item, index) => 
                    <details key={index}>
                        <summary><h3>{item.q}</h3></summary>
                        <div dangerouslySetInnerHTML={{ __html: item.a }}>{}</div>
                    </details>)
                }
            </Card>
        </div>
    )
}

export default SectionWrapper ( FAQ , {alt : false})