import React from 'react'

import Slider from "react-slick";
// ** Custom Components
// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { slidesHero } from '@/data/slides-hero';


const SliderHero = () => {

    var settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay : true,
        autoplaySpeed : 3000,
        fade : true,
        adaptiveHeight: true,
        dots : false,
        arrows : false,
    };

    return (

        <Slider {...settings}>
            {
                slidesHero.map( (item,index) => 
                    <img key={index} src={item.src} alt={item.alt} />
                )
            }
        </Slider>


            
            

    )
}

export default SliderHero