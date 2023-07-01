import React from 'react'

type Props = {
    icon : React.ReactElement
    text : React.ReactElement
}

const TopBannerIconText = ({icon,text}: Props) => {
    return (
        <div style={{display:'flex',gap:'.1rem',alignItems:'center'}}> 
            <div className='topBanner__icon'>
                {icon}
            </div>
            &nbsp; {text}
        </div>
        
    )
}

export default TopBannerIconText