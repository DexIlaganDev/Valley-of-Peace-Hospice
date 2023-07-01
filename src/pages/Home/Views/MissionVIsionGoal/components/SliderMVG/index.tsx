import React from 'react'

import Slider from "react-slick";
// ** Custom Components
import SliderMVGItem from '../SliderMVGItem';

// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { slides } from '@/data/slides';


const SliderMVG = () => {

    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay : true,
        autoplaySpeed : 3000,
        fade : true
    };

    return (

        <Slider {...settings}>
            {
                slides.map( (item,index) => 
                <div key={index}>
                    <SliderMVGItem item={item}/>
                </div>)
            }
        </Slider>


            
            

    )
}

export default SliderMVG