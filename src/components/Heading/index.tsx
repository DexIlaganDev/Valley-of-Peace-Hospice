import React from 'react'

import './heading.styles.scss'

type Props = React.PropsWithChildren & {
    variant? : 'main' | 'sub'
}

const Heading = ({variant='main',children}: Props) => {
    return (
        <h2 className={`heading-${variant}`}>{children}</h2>
    )
}

export default Heading