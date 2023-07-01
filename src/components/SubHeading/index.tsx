import React from 'react'

import './subheading.styles.scss'

type Props = React.PropsWithChildren & {}

const SubHeading = ({children}: Props) => {
    return (
        <h3 className='subheading'>{children}</h3>
    )
}

export default SubHeading