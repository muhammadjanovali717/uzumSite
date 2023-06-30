import React from 'react'
import "./Slider.css"
import { Swiper, SwiperSlide } from "swiper/react";
import Main from "../main/Main"
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";
import banner1 from '../../assets/olcha/slider.png'
import banner2 from '../../assets/olcha/slider2.png'
import banner3 from '../../assets/olcha/slider3.png'
import banner4 from '../../assets/olcha/slider4.png'
import banner5 from '../../assets/olcha/slider5.png'
import banner6 from '../../assets/olcha/slider6.png'
import Countdown from './counter';


function Slider() {
    return (
        <div className='container'>
            <div className="slider__container">
                <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                    <SwiperSlide><img src={banner1} alt="" /></SwiperSlide>
                    <SwiperSlide><img src={banner2} alt="" /></SwiperSlide>
                    <SwiperSlide><img src={banner3} alt="" /></SwiperSlide>
                    <SwiperSlide><img src={banner4} alt="" /></SwiperSlide>
                    <SwiperSlide><img src={banner5} alt="" /></SwiperSlide>
                    <SwiperSlide><img src={banner6} alt="" /></SwiperSlide>
                </Swiper>
            </div>
            <Countdown/>
            <Main/>
        </div>
    )
}

export default Slider