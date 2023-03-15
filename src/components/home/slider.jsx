
import rectanguler from './image/Rectangle 25.png'
import qouote from './image/qouote.svg'
import mobile from './image/mob 1.png'
import desktop from './image/desk.png'
import google from './image/play.png'
import rectanguler26 from './image/Rectangle 26.png'
import rectanguler27 from './image/Rectangle 26 (1).png'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import React from 'react'

const slider = () => {

  const settings = {
    dots: true,
    className: "center",
    centerMode: false,
    infinite: false,
    focusOnSelect: true,
    slidesToScroll: 1,
    slidesToShow: 3,
    speed: 500,
    responsive: [
        
      {
        breakpoint: 900,
        settings: {
          centerMode: false,
          slidesToShow: 2,
          slidesToScroll: 3,
      
        }
      },
      {
        breakpoint: 800,
        settings: {
          centerMode: false,
          slidesToShow: 2,
          slidesToScroll: 3,
      
        }
      },
      {
        breakpoint: 700,
        settings: {
          centerMode: false,
          slidesToShow: 1,
          slidesToScroll: 3,
      
        }
      },
      {
        breakpoint: 600,
        settings: {
          centerMode: false,
          slidesToShow: 1,
          slidesToScroll: 2,
       
        }
      },
    ]
   
  }
  return (
    <div className='div'>
      <div >
        <h2>Center Mode</h2>
        <Slider {...settings}>

            <div className='list-class'>
            <ul className='list-row'>
              <img className='image-1' src={rectanguler} alt="" />
              <div className='list-title'>
                <h1 className='heading'>Guy Hawkins</h1>
                <p>Student</p>
              </div>
              <img src={qouote} alt="" />
            </ul>
            <p className='list-class-p'>Ut pharetra ipsum nec leo blandit, sit amet tincidunt eros pharetra. Nam sed imperdiet turpis. In hac habitasse platea dictumst.
              Praesent nulla massa, hendrerit vestibulum gravida in, feugiat auctor felis.</p>
          </div>

          <div className='list-class'>
            <ul className='list-row'>
              <img className='image-1' src={rectanguler} alt="" />
              <div className='list-title'>
                <h1  className='heading'>Guy Hawkins</h1>
                <p>Student</p>
              </div>
              <img src={qouote} alt="" />
            </ul>
            <p>Ut pharetra ipsum nec leo blandit, sit amet tincidunt eros pharetra. Nam sed imperdiet turpis. In hac habitasse platea dictumst.
              Praesent nulla massa, hendrerit vestibulum gravida in, feugiat auctor felis.</p>
          </div>


          <div className='list-class'>
            <ul className='list-row'>
              <img className='image-1' src={rectanguler} alt="" />
              <div className='list-title'>
                <h1  className='heading'>Guy Hawkins</h1>
                <p>Student</p>
              </div>
              <img src={qouote} alt="" />
            </ul>
            <p>Ut pharetra ipsum nec leo blandit, sit amet tincidunt eros pharetra. Nam sed imperdiet turpis. In hac habitasse platea dictumst.
              Praesent nulla massa, hendrerit vestibulum gravida in, feugiat auctor felis.</p>
          </div>


          <div className='list-class'>
            <ul className='list-row'>
              <img className='image-1' src={rectanguler} alt="" />
              <div className='list-title'>
                <h1  className='heading'>Guy Hawkins</h1>
                <p>Student</p>
              </div>
              <img src={qouote} alt="" />
            </ul>
            <p>Ut pharetra ipsum nec leo blandit, sit amet tincidunt eros pharetra. Nam sed imperdiet turpis. In hac habitasse platea dictumst.
              Praesent nulla massa, hendrerit vestibulum gravida in, feugiat auctor felis.</p>
          </div>

          <div className='list-class'>
            <ul className='list-row'>
              <img className='image-1' src={rectanguler} alt="" />
              <div className='list-title'>
                <h1  className='heading'>Guy Hawkins</h1>
                <p>Student</p>
              </div>
              <img src={qouote} alt="" />
            </ul>
            <p>Ut pharetra ipsum nec leo blandit, sit amet tincidunt eros pharetra. Nam sed imperdiet turpis. In hac habitasse platea dictumst.
              Praesent nulla massa, hendrerit vestibulum gravida in, feugiat auctor felis.</p>
          </div>

          <div className='list-class'>
            <ul className='list-row'>
              <img className='image-1' src={rectanguler} alt="" />
              <div className='list-title'>
                <h1  className='heading'>Guy Hawkins</h1>
                <p>Student</p>
              </div>
              <img src={qouote} alt="" />
            </ul>
            <p>Ut pharetra ipsum nec leo blandit, sit amet tincidunt eros pharetra. Nam sed imperdiet turpis. In hac habitasse platea dictumst.
              Praesent nulla massa, hendrerit vestibulum gravida in, feugiat auctor felis.</p>
          </div>

          <div className='list-class'>
            <ul className='list-row'>
              <img className='image-1' src={rectanguler} alt="" />
              <div className='list-title'>
                <h1  className='heading'>Guy Hawkins</h1>
                <p>Student</p>
              </div>
              <img src={qouote} alt="" />
            </ul>
            <p>Ut pharetra ipsum nec leo blandit, sit amet tincidunt eros pharetra. Nam sed imperdiet turpis. In hac habitasse platea dictumst.
              Praesent nulla massa, hendrerit vestibulum gravida in, feugiat auctor felis.</p>
          </div>
        </Slider>
      </div>
    </div>
  );
}

export default slider
