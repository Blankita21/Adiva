import React from 'react'
import './Row.css'
import { FaHeart } from "react-icons/fa";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

function Row({task, items}) {

    
  return (
    <div className="container">
        <div className="title">
            <h3>{task}</h3>
        </div>
        <div className="cards-container">
            <Swiper
                spaceBetween={5}
                slidesPerView={4}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
            >
                {items.map((e)=>
                {
                return (
                <SwiperSlide>
                    <div className="card">
                        <div className="poster">
                            <img src={e.img}/>
                        </div>
                        <div className="name">
                            <p>{e.name}</p>
                            <span><FaHeart /></span>
                        </div>    
                    </div>
                </SwiperSlide>
                );
                })
                }
            </Swiper>
        </div>  
    </div>
  )
}

export default Row