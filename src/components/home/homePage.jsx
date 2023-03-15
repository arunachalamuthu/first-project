import React, { useEffect } from 'react'
import './homepage.css'
import bulb from './image/bulb-icon.svg'
import hat from './image/hat-icon.svg'
import idcard from './image/idcard-icon.svg'
import pass from './image/pass-icon.svg'
import ultimate from './image/image 20.png'
import star from './image/Group 131153.png'
import mark from './image/Vector.svg'
import review from './image/(15 Reviews).png'
import heart from './image/Vector.png'
import cart from './image/cart-icon.svg'
import browser from './image/browse.svg'
import arrow from './image/arrow-1.svg'
import arrow2 from './image/arrow-2.svg'
import purchase from './image/purchase.svg'
import learn from './image/learn.svg'
import elearning from './image/elearning.svg'
import rectanguler from './image/Rectangle 25.png'
import qouote from './image/qouote.svg'
import mobile from './image/mob 1.png'
import desktop from './image/desk.png'
import google from './image/play.png'
import rectanguler26 from './image/Rectangle 26.png'
import rectanguler27 from './image/Rectangle 26 (1).png'
import Responsive from '../../testing'
import { useState } from 'react'
import Navbar from '../navbar/navbar'
import Slide from './slider'

const HomePage = () => {
  const [menu, setmenu] = useState(false)

  const hidden = (task) => {
    setmenu(task)
  }

  return (

    <div >
      <div className='home'>
        <Navbar Add={hidden} />
      </div>
      <div id={menu ? "secondClass" : ""}>
        <div className='why' >
          <h1 className='why-head'>Why choose us?</h1>
          <div className='why-list'>
            <div className='why-align'>
              <ul className='why-list1'>
                <img src={bulb} alt="" />
                <li>Reach higher in your career</li>
                <p>Having a solid foundation of skills and knowledge with us will help you advance in your profession.</p>
              </ul>
              <ul>
                <img src={hat} alt="" />
                <li>Self learn</li>
                <p>With all of our tools and courses, you can study whenever you want, from anywhere.</p>
              </ul>

              <ul>
                <img src={idcard} alt="" />
                <li>Enhance personal skills</li>
                <p>Provide learners with a broad variety of coding skills for use in teaching and coaching.</p>
              </ul>
              <ul>
                <img src={pass} alt="" />
                <li>Learn at your ease</li>
                <p>Easy access and streaming of any courses at any time with application support.</p>
              </ul>
            </div>
          </div>
        </div>


        {/* couressss */}

        <div className='course'>
          <h1 className='course-heading'> <font color='blue'>Popular</font>  courses</h1>
          <div className='course-main'>
            <div className='course-grid' >
              <ul className='course-details'>
                <img src={ultimate} className='course-profile' alt="" />

                <ul className='course-star-review'>
                  <li>
                    <img src={star} alt="" className='course-star' />
                    <img src={review} alt="" />
                  </li>
                  <img src={heart} alt="" />
                </ul>

                <h1 className='course-line'>PHP Beginner + Advanced</h1>
                <ul className='course-lessons'>
                  <img src={mark} alt="" />
                  <li>12 Lessons</li>
                </ul>

                <p>Learn the fundamentals of PHP, one of the most popular languages of modern web development.</p>
                <ul className='checkbox'>
                  <input type="checkbox" />
                  <li>By Ekalai Academy</li>
                </ul>
                <ul className='course-price-cart'>
                  <ul className='first'>
                    <li>₹1,500</li>
                    <del>1,999</del>
                  </ul>
                  <ul className='second'>
                    <img src={cart} alt="" />
                    <li>Add to cart</li>
                  </ul>
                </ul>

              </ul>

              <ul className='course-details'>
                <img src={ultimate} className='course-profile' alt="" />

                <ul className='course-star-review'>
                  <li>
                    <img src={star} alt="" className='course-star' />
                    <img src={review} alt="" />
                  </li>
                  <img src={heart} alt="" />
                </ul>

                <h1 className='course-line'>PHP Beginner + Advanced</h1>
                <ul className='course-lessons'>
                  <img src={mark} alt="" />
                  <li>12 Lessons</li>
                </ul>

                <p>Learn the fundamentals of PHP, one of the most popular languages of modern web development.</p>
                <ul className='checkbox'>
                  <input type="checkbox" />
                  <li>By Ekalai Academy</li>
                </ul>
                <ul className='course-price-cart'>
                  <ul className='first'>
                    <li>₹1,500</li>
                    <del>1,999</del>
                  </ul>
                  <ul className='second'>
                    <img src={cart} alt="" />
                    <li>Add to cart</li>
                  </ul>
                </ul>

              </ul>

              <ul className='course-details'>
                <img src={ultimate} className='course-profile' alt="" />

                <ul className='course-star-review'>
                  <li>
                    <img src={star} alt="" className='course-star' />
                    <img src={review} alt="" />
                  </li>
                  <img src={heart} alt="" />
                </ul>

                <h1 className='course-line'>PHP Beginner + Advanced</h1>
                <ul className='course-lessons'>
                  <img src={mark} alt="" />
                  <li>12 Lessons</li>
                </ul>

                <p>Learn the fundamentals of PHP, one of the most popular languages of modern web development.</p>
                <ul className='checkbox'>
                  <input type="checkbox" />
                  <li>By Ekalai Academy</li>
                </ul>
                <ul className='course-price-cart'>
                  <ul className='first'>
                    <li>₹1,500</li>
                    <del>1,999</del>
                  </ul>
                  <ul className='second'>
                    <img src={cart} alt="" />
                    <li>Add to cart</li>
                  </ul>
                </ul>

              </ul>

              <ul className='course-details'>
                <img src={ultimate} className='course-profile' alt="" />

                <ul className='course-star-review'>
                  <li>
                    <img src={star} alt="" className='course-star' />
                    <img src={review} alt="" />
                  </li>
                  <img src={heart} alt="" />
                </ul>

                <h1 className='course-line'>PHP Beginner + Advanced</h1>
                <ul className='course-lessons'>
                  <img src={mark} alt="" />
                  <li>12 Lessons</li>
                </ul>

                <p>Learn the fundamentals of PHP, one of the most popular languages of modern web development.</p>
                <ul className='checkbox'>
                  <input type="checkbox" />
                  <li>By Ekalai Academy</li>
                </ul>
                <ul className='course-price-cart'>
                  <ul className='first'>
                    <li>₹1,500</li>
                    <del>1,999</del>
                  </ul>
                  <ul className='second'>
                    <img src={cart} alt="" />
                    <li>Add to cart</li>
                  </ul>
                </ul>

              </ul>

              <ul className='course-details'>
                <img src={ultimate} className='course-profile' alt="" />

                <ul className='course-star-review'>
                  <li>
                    <img src={star} alt="" className='course-star' />
                    <img src={review} alt="" />
                  </li>
                  <img src={heart} alt="" />
                </ul>

                <h1 className='course-line'>PHP Beginner + Advanced</h1>
                <ul className='course-lessons'>
                  <img src={mark} alt="" />
                  <li>12 Lessons</li>
                </ul>

                <p>Learn the fundamentals of PHP, one of the most popular languages of modern web development.</p>
                <ul className='checkbox'>
                  <input type="checkbox" />
                  <li>By Ekalai Academy</li>
                </ul>
                <ul className='course-price-cart'>
                  <ul className='first'>
                    <li>₹1,500</li>
                    <del>1,999</del>
                  </ul>
                  <ul className='second'>
                    <img src={cart} alt="" />
                    <li>Add to cart</li>
                  </ul>
                </ul>

              </ul>

              <ul className='course-details'>
                <img src={ultimate} className='course-profile' alt="" />

                <ul className='course-star-review'>
                  <li>
                    <img src={star} alt="" className='course-star' />
                    <img src={review} alt="" />
                  </li>
                  <img src={heart} alt="" />
                </ul>

                <h1 className='course-line'>PHP Beginner + Advanced</h1>
                <ul className='course-lessons'>
                  <img src={mark} alt="" />
                  <li>12 Lessons</li>
                </ul>

                <p>Learn the fundamentals of PHP, one of the most popular languages of modern web development.</p>
                <ul className='checkbox'>
                  <input type="checkbox" />
                  <li>By Ekalai Academy</li>
                </ul>
                <ul className='course-price-cart'>
                  <ul className='first'>
                    <li>₹1,500</li>
                    <del>1,999</del>
                  </ul>
                  <ul className='second'>
                    <img src={cart} alt="" />
                    <li>Add to cart</li>
                  </ul>
                </ul>

              </ul>

              <ul className='course-details'>
                <img src={ultimate} className='course-profile' alt="" />

                <ul className='course-star-review'>
                  <li>
                    <img src={star} alt="" className='course-star' />
                    <img src={review} alt="" />
                  </li>
                  <img src={heart} alt="" />
                </ul>

                <h1 className='course-line'>PHP Beginner + Advanced</h1>
                <ul className='course-lessons'>
                  <img src={mark} alt="" />
                  <li>12 Lessons</li>
                </ul>

                <p>Learn the fundamentals of PHP, one of the most popular languages of modern web development.</p>
                <ul className='checkbox'>
                  <input type="checkbox" />
                  <li>By Ekalai Academy</li>
                </ul>
                <ul className='course-price-cart'>
                  <ul className='first'>
                    <li>₹1,500</li>
                    <del>1,999</del>
                  </ul>
                  <ul className='second'>
                    <img src={cart} alt="" />
                    <li>Add to cart</li>
                  </ul>
                </ul>

              </ul>

              <ul className='course-details'>
                <img src={ultimate} className='course-profile' alt="" />

                <ul className='course-star-review'>
                  <li>
                    <img src={star} alt="" className='course-star' />
                    <img src={review} alt="" />
                  </li>
                  <img src={heart} alt="" />
                </ul>

                <h1 className='course-line'>PHP Beginner + Advanced</h1>
                <ul className='course-lessons'>
                  <img src={mark} alt="" />
                  <li>12 Lessons</li>
                </ul>

                <p>Learn the fundamentals of PHP, one of the most popular languages of modern web development.</p>
                <ul className='checkbox'>
                  <input type="checkbox" />
                  <li>By Ekalai Academy</li>
                </ul>
                <ul className='course-price-cart'>
                  <ul className='first'>
                    <li>₹1,500</li>
                    <del>1,999</del>
                  </ul>
                  <ul className='second'>
                    <img src={cart} alt="" />
                    <li>Add to cart</li>
                  </ul>
                </ul>

              </ul>




            </div>
          </div>

          <h1 className='how-heading'>How it <font color='blue'>works?</font> </h1>
          <div className='how-work'>

            <div>
              <img src={browser} alt="" />
              <p>Browse courses from our expert contributors.</p>
            </div>

            <img className='arrow1' src={arrow} alt="" />
            <div>
              <img src={purchase} alt="" />
              <p>Purchase quickly and securely.</p>
            </div>

            <img className='arrow2' src={arrow2} alt="" />
            <div>
              <img src={learn} alt="" />
              <p>That’s it! Start learning right away.</p>
            </div>

          </div>


          <div>
            <div className='benefits-e-learn'>
              <h1>Benefits of E-Learning</h1>
              <div className='benefits'>
                <div className='benefits-left'>
                  <ul>
                    <h1>Flexibility</h1>
                    <p>When you enroll for online classes, you will be able to study and review course materials during your own time. </p>
                  </ul>
                  <ul>
                    <h1>Documentation</h1>
                    <p>When you enroll for online classes, you will be able to study and review course materials during your own time. </p>
                  </ul>
                  <ul>
                    <h1>Increased Time</h1>
                    <p>Effective time management not only helps with your learning but can also make you more productive at work and in your personal life</p>
                  </ul>
                </div>
                <div className='benefits-image'>
                  <img src={elearning} alt="" />
                </div>
                <div className='benefits-right'>
                  <ul>
                    <h1>Reduced Costs</h1>
                    <p>The price reduction is the result of educational institutions saving a lot of money on transportation and accommodation of both students and teachers.</p>
                  </ul>
                  <ul>
                    <h1>Access to Expertise</h1>
                    <ul>Online learning enables teachers to teach their lessons in a consistent way with a higher level of coverage ensuring all students receive the same amount of knowledge.</ul>
                  </ul>
                  <ul>
                    <h1>Networking Opportunities</h1>
                    <p>When you enroll for online classes, you will be able to study and review course materials during your own time. </p>
                  </ul>
                </div>
              </div>
            </div>
          </div>


         
           
            <div className="App1">

              <div className='sec1'>
                <Slide />
              </div>
            </div>
        


          <div className='testimonials'>
            <h1>Testimonials</h1>
            <p>See What Our Users Have To Say</p>
            <div className='test-list'>
              {/* <div className='test-list-1'>
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
                </div> */}


            </div>



          </div>
          <div className='view'>
            <div className='view-left'>
              <img className='view-img1' src={mobile} alt="" />
              <img className='view-img2' src={desktop} alt="" />
            </div>
            <div className='view-right'>
              <h1>Learn From <font color='blue'> Anywhere,
                Anytime!</font></h1>
              <p>Take classes on the go with the educrat app. Stream or download to watch on the plane, the subway, or wherever you learn best.</p>
              <img src={google} alt="" />
            </div>
          </div>


        </div>
      </div>

    </div>
  )
}

export default HomePage
