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
import { Link } from 'react-router-dom';

const Dashboard = () => {
    const [Product,setProduct] = useState([]);
    const getdata = ()=>{
      axios.get("https://fakestoreapi.com/products")
      .then((res)=>{
        console.log(res);
        setProduct(res.data)
      })
      .then((err)=>{
        console.log(err);
      })
    }
    useEffect(()=>{
      getdata();
    },[])

    function truncateDescription(description, wordLimit) {
      const words = description.split(' ');
      const truncatedWords = words.slice(0, wordLimit);
      const truncatedDescription = truncatedWords.join(' ');
      return truncatedDescription;
    } 
  return (
    
    <div>
      <div className="container-fluid" style={{padding:"0"}}>
        <div className="cus-slidecontainer swiper-wrapper" style={{padding:"0"}}>
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
         
        >
          <div className="swiper-wrapper">
          {
            Product.map((item, index) => (
              <SwiperSlide key={index}>
                <div className="cu-card">
                    <div className="img-con">
                      <img src={item.image} alt="product img" />
                    </div>
                    <div className="card-body align-center">
                      <h5 className="card-title"><Link to={"#"} className='title-link'>{truncateDescription(item.title,4)}</Link></h5>
                      <h5 className="card-Price">&#x20B9; &nbsp;{item.price}<span className='temp-price'>&#x20B9;  &nbsp;1900</span></h5>
                      <div className="vartion-button">
                      <Link to="" className="var-btn">XS</Link>
                        <Link to="" className="var-btn">S</Link>
                        <Link to="" className="var-btn">M</Link>
                        <Link to="" className="var-btn">L</Link>
                        <Link to="" className="var-btn">XL</Link>
                      </div>
                    </div>
                  </div>
              </SwiperSlide>
            ))
          }
          </div>
        </Swiper>
      </div>
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
         
        >
          <div className="swiper-wrapper">
          {
            Product.map((item, index) => (
              <SwiperSlide key={index}>
                <div className="cu-card">
                    <div className="img-con">
                      <img src={item.image} alt="product img" />
                    </div>
                    <div className="card-body align-center">
                      <h5 className="card-title"><Link to={"#"} className='title-link'>{truncateDescription(item.title,4)}</Link></h5>
                      <h5 className="card-Price">&#x20B9; &nbsp;{item.price}<span className='temp-price'>&#x20B9;  &nbsp;1900</span></h5>
                      <div className="vartion-button">
                      <Link to="" className="var-btn">XS</Link>
                        <Link to="" className="var-btn">S</Link>
                        <Link to="" className="var-btn">M</Link>
                        <Link to="" className="var-btn">L</Link>
                        <Link to="" className="var-btn">XL</Link>
                      </div>
                    </div>
                  </div>
              </SwiperSlide>
            ))
          }
          </div>
        </Swiper>
      </div>
    </div>
  )
}

export default Dashboard
