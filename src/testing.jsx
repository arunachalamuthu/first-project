import React, { Component } from "react";
import Slider from "react-slick";
import rectanguler from './image/Rectangle 25.png'
import qouote from './image/qouote.svg'
import mobile from './image/mob 1.png'
import desktop from './image/desk.png'
import google from './image/play.png'
import rectanguler26 from './image/Rectangle 26.png'
import rectanguler27 from './image/Rectangle 26 (1).png'

export default class Responsive extends Component {
  render() {
    var settings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 4,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };
    return (
      <div>
        <h2> Responsive </h2>
        <Slider {...settings}>
        {/* <div className='test-list'> */}
            <div className='test-list-1'>
              <ul className='list-row'>
                <img src={rectanguler} alt="" />
                <div className='list-title'>
                  <h1>Guy Hawkins</h1>
                  <p>Student</p>
                </div>
                <img src={qouote} alt="" />
              </ul>
 
            </div>

         <div className='test-list-1'>
              <ul className='list-row'>
                <img src={rectanguler26} alt="" />
                <div className='list-title'>
                  <h1>Guy Hawkins</h1>
                  <p>Student</p>
                </div>
                <img src={qouote} alt="" />
              </ul>
          
            </div>
    {/*
            <div className='test-list-1'>
              <ul className='list-row'>
                <img src={rectanguler27} alt="" />
                <div className='list-title'>
                  <h1>Guy Hawkins</h1>
                  <p>Student</p>
                </div>
                <img src={qouote} alt="" />
              </ul>

              <p>Ut pharetra ipsum nec leo blandit, sit amet tincidunt eros pharetra. Nam sed imperdiet turpis. In hac habitasse platea dictumst.
                Praesent nulla massa, hendrerit vestibulum gravida in, feugiat auctor felis.</p>
            </div>

            <div className='test-list-1'>
              <ul className='list-row'>
                <img src={rectanguler} alt="" />
                <div className='list-title'>
                  <h1>Guy Hawkins</h1>
                  <p>Student</p>
                </div>
                <img src={qouote} alt="" />
              </ul>
              <p>Ut pharetra ipsum nec leo blandit, sit amet tincidunt eros pharetra. Nam sed imperdiet turpis. In hac habitasse platea dictumst.
                Praesent nulla massa, hendrerit vestibulum gravida in, feugiat auctor felis.</p>
            </div>

            <div className='test-list-1'>
              <ul className='list-row'>
                <img src={rectanguler26} alt="" />
                <div className='list-title'>
                  <h1>Guy Hawkins</h1>
                  <p>Student</p>
                </div>
                <img src={qouote} alt="" />
              </ul>
              <p>Ut pharetra ipsum nec leo blandit, sit amet tincidunt eros pharetra. Nam sed imperdiet turpis. In hac habitasse platea dictumst.
                Praesent nulla massa, hendrerit vestibulum gravida in, feugiat auctor felis.</p>
            </div>

            <div className='test-list-1'>

              <ul className='list-row'>
                <img src={rectanguler27} alt="" />
                <div className='list-title'>
                  <h1>Guy Hawkins</h1>
                  <p>Student</p>
                </div>
                <img src={qouote} alt="" />
              </ul>

              <p>Ut pharetra ipsum nec leo blandit, sit amet tincidunt eros pharetra. Nam sed imperdiet turpis. In hac habitasse platea dictumst.
                Praesent nulla massa, hendrerit vestibulum gravida in, feugiat auctor felis.</p>
            </div>




          </div> */}
        </Slider>
      </div>
    );
  }
}