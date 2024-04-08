"use client";
import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
const data = [
  { id: 1, img: "/bdu1.png" },
  { id: 2, img: "/bdu2.png" },
  { id: 3, img: "/bdu3.png" }
 

]
const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };


  return (
<div>
<div className=' w-3/4 m-auto'>
        <div className=''>
          <Slider {...settings}>
            {
              data.map(({img,id}) => {
                return (
                  <div key={id} className="">
                    <div>
                      <div className="pt-9">
                        <img className='w-full ' src={img} alt="" />
                      </div>

                    </div>
                  </div>
                )
              })
            }
          </Slider>
        </div>




      </div>
</div>
  );
};

export default Carousel;