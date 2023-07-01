import React from 'react'
import './card.styles.scss'

type Props = React.PropsWithChildren & {}

const Card = ({children}: Props) => {
    return (
        <div className='card'>{children}</div>
    )
}

export default Card