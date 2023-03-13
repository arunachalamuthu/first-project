import React from 'react'
import './navbar.css'
// import './nav1.css'
import image from './hero.png'
import { useState } from 'react'
import logo from './logo.png'
import search from './search-icon.svg'

const Navbar = () => {
  const [menu, setmenu] = useState(false)

  return (
    <div>
      <div id='hero'>
        <nav>
          <div className='first-nav'>

            <img src={logo} id='image' alt="" />
            <li>
              EKalai
            </li>
          </div>
          <div className='sec-nav' id={menu ? "hidden" : ""}>
            <li className='active'>home</li>
            <li>about</li>
            <li>courses</li>
            <li className='nav-signup'>signup</li>
            <li className='nav-login'>login</li>
          </div>
          <button className='button' onClick={() => setmenu(!menu)}>
           Menu
          </button>
        </nav>
        {menu ? ('') : (<div className='learn-Page'>
          <div className='learn-left'>
            <p>Learn with us and</p>
            <h1>Enrich your skills, Anytime, Anywhere!</h1>
            <p>Own your future learning new skills online</p>

            <ul>
              <div>
              <input type="text" />
              <img className='search-img' src={search} alt="" />
              </div>
            
              <button>
                Get Start
              </button>
            </ul>

          </div>
          <div className='learn-right' >
            <img src={image} alt="" className='learn-img-right' />
          </div>
        </div>)}

        {/* <div className='learn-Page' >
          <div className='learn-left' id={menu ?"hidden1":""}>
            <p>Learn with us and</p>
            <h1>Enrich your skills, Anytime, Anywhere!</h1>
            <p>Own your future learning new skills online</p>

            <ul>
              <div>
              <input type="text" />
              <img className='search-img' src={search} alt="" />
              </div>
            
              <button>
                Get Start
              </button>
            </ul>

          </div>
          <div className='learn-right' >
            <img src={image} alt="" className='learn-img-right' />
          </div>
        </div> */}
    
      </div>

    </div>
  )
}

export default Navbar
