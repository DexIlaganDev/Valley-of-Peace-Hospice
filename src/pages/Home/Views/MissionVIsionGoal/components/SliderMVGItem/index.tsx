import React from 'react'

import './slidermvgitem.styles.scss'
import { MVGSlideItem } from '@/data/slides'

type Props = {
    item : MVGSlideItem
}

const SliderMVGItem = ({item}: Props) => {
    
    return (
        <div className="headings slidermvgheadings">
            <h2>{item.caption}</h2>
            <h3>{item.title}</h3>
            
        </div>
    )
}

export default SliderMVGItem