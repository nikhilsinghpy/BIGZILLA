import React, { useEffect, useState } from 'react'
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
import img from "../../assets/images/Bigzilla.png";


const Dashboard = () => {
    const [Product,setProduct] = useState([]);
    const getdata = ()=>{
      axios.get("https://fakestoreapi.com/products")
      .then((res)=>{
        setProduct(res.data)
      })
      .then((err)=>{
        console.log(err);
      })
    }
    useEffect(()=>{
      getdata();
    },[])
  
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
      <div className="slide-container">
      <Swiper
          slidesPerView={4}
          spaceBetween={10}
          // pagination={{
          //   clickable: true,
          // }}
          
          modules={[Pagination]}
          className="mySwiper"
          style={{background:"yellow"}}
        >
          <div className="swiper-wrapper">
          {/* {
            Product.map((item, index) => (
              <SwiperSlide key={index}>
                <div className="card" style={{ width: '18rem', height: '400px' }}>
                  <img src={item.image} className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h5 className="card-title">{item.title}</h5>
                    <p className="card-text">{item.price}</p>
                    <a href="#" className="btn btn-primary" onClick={getdata}>
                      Go somewhere
                    </a>
                  </div>
                </div>
              </SwiperSlide>
            ))
          } */}
            <div className="cu-card">
              <div className="img-con">
                <img src={img} alt="product img" />
              </div>
              <div className="card-body">
                <h5 className="card-title">BIGZILLA</h5>
                <h5 className="card-Price">@34343<span className='temp-price'>7874</span></h5>
                <p className="card-text"></p>
              </div>
            </div>
          </div>
        </Swiper>
      </div>
    </div>
  )
}

export default Dashboard
