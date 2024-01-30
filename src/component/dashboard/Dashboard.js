import React from 'react'
import slide1 from "../../assets/images/1b_dekstop.webp"
import slide2 from "../../assets/images/Bigzilla (1).png"
import slide3 from "../../assets/images/Bigzilla (2).png"
import slide4 from "../../assets/images/Bigzilla.png"
import "./Dashboard.css";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import axios from 'axios';


const Dashboard = () => {
  const getdata = ()=>{
    alert("hello")
  }
  return (
    <div>
      <div className="container-fluid" style={{padding:"0"}}>
        <div className="cus-slidecontainer">
        <Swiper
          spaceBetween={30}
          effect={'fade'}
          pagination={{
            clickable: true,
            
          }}
          loop={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}  
          modules={[Autoplay, EffectFade, Navigation, Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            <img src={slide1} alt='slide1'/>
          </SwiperSlide>
          <SwiperSlide>
            <img src={slide2} alt='slide1'/>
          </SwiperSlide>
          <SwiperSlide>
            <img src={slide3} alt='slide1' />
          </SwiperSlide>
          <SwiperSlide>
            <img src={slide4} alt='slide1' />
          </SwiperSlide>
        </Swiper>
        </div>
      </div>
      <button onClick={getdata}>click me</button>
    </div>
  )
}

export default Dashboard
