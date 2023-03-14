import React, { Component } from "react";
import Slider from "react-slick";

export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <div>
        <h2> Single Item</h2>
        <Slider {...settings}>
        <div className='test-list'>
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




          </div>
        </Slider>
      </div>
    );
  }
}