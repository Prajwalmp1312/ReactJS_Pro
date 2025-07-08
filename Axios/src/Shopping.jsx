import React, { useState } from 'react'
import "./App.css"
import Logo from "./Photos/Logo.svg"
import { Link } from 'react-router-dom'
import Rudrakshi from "./Photos/Rudrakshi.avif"
import Band from "./Photos/Ankleband.avif"
import Wallet from "./Photos/Wallet.avif"
import shoes from "./Photos/Shoes.avif"
import Snapd from "./Photos/Snapd.png"
import Lock from "./Photos/Lock.avif"
import Trust from "./Photos/Trust.png"
import Help from "./Photos/Help.jpg"
import Shop from "./Photos/Shop.jpg"
import Visa from "./Photos/Visa.png"
import Amex from "./Photos/Amex.png"
import Master from "./Photos/Master.png"
import Cod from "./Photos/Cod.png"
import Net from "./Photos/Net.png"





const Shopping = () => {

    
  return (
    <div>
      <nav id='nav1'></nav>
      <nav id='nav2'>
        <div id='dd1'> 
            <div >Brand Waali Quality,</div>
            <div>Bazaar Waali Deal!</div>
        </div>
        <div id='dd2'>
            <div>Our Blog</div>
            <div>Help Center</div>
            <div>Sell On Snapdeal</div>
            <div>Download App</div>
        </div>
      </nav>
    
    <div id='dd3'>
        <div id='img'>
            <img src={Logo} height={60} width={150} alt="" />
        </div>
        <div id='dd4'>
        <input type="text" placeholder="Search products & brands" id='input'/>
        <button id='btn'> Search</button>
        </div>
        <div id='dd5'>
            <div><Link to="/cart">🛒 Cart</Link></div>
            <div><Link to="/Signup">👤 Sign In</Link></div>
        </div>
       
    </div>
    <br /><br /><br />
    <h1>Trending Products </h1>
     <div id='images'>

      {/* **************************************** */}

          <div>
            <img src={Rudrakshi} height={250}width={250} alt="" /><br />
            <center>Shiva Rudraksha Mala <br />
            <button> Add to Cart </button>
            </center> 
          </div>


           {/* **************************************** */}


          <div>
            <img src={Band} height={250}width={250} alt="" /><br /> 
            <center>Stay Healthy-Foot Protector <br />
            <button>Add to Cart</button>
            </center>
          </div>


           {/* **************************************** */}


          <div>
            <img src={Wallet} height={250}width={250} alt="" /><br />
            <center>Stylish Men's wallet <br />
            
            <button>Add to Cart</button>
            </center>
          </div>

           {/* **************************************** */}


          <div>
            <img src={shoes} height={250}width={250} alt="" /><br />
            <center>Men's running Shoes <br />
            <button>Add to Cart</button>
            </center>
          </div>
           {/* **************************************** */}
    </div>
    <br /><br />
    <div>
      <hr /><br /><br />
      <center>
        <img src={Snapd} height={500} width={1500} alt="" />
      </center>
      <br /><br />
      <hr />
    </div>
    <br /><br /><br />
    <div id='Box1'>


      {/* **************************************** */}


      <div className='box2'>
        <center><br /><br /><br />
        <a href="https://www.snapdeal.com/page/terms" target='blank'>
        <img src={Lock} height={75} width={75} alt="" />
        </a>
        <h3>100% Secure Payments</h3>
        <h5>Moving your card details to <br />much  more secured place</h5>
        </center>
      </div>

      {/* ****************************************************************** */}

      <div className='box2'>
        <center><br /><br /><br />
        <a href="https://www.snapdeal.com/page/TrustPay" target='blank'>
        <img src={Trust} height={75} width={75} alt="" />
        </a>
        <h3>Trust Pay</h3>
        <h5>100% Payment Protection. <br /> Easy Return Policy</h5>
        </center>
      </div>


      {/* ****************************************************************** */}


      <div className='box2'>
        <center><br /><br /><br />
        <a href="https://www.snapdeal.com/help?redirectFrom=footerstrip" target='blank'>
        <img src={Help} height={75} width={75} alt="" />
        </a>
        <h3>Help Center</h3>
        <h5>Got a question?Look no further. <br />Browse our FAQs or submit your query here </h5>
        </center>
      </div>


      {/* ****************************************************************** */}



      <div className='box2'>
        <center><br /><br /><br />
        <a href="https://play.google.com/store/apps/details?id=com.snapdeal.main&utm_source=web_footer&utm_campaign=android" target='blank'><img src={Shop} height={75} width={75} alt="" />
        </a>
        <h3>Shop on Go</h3>
        <h5>Download the app and get exiting <br /> app only offers at your fingertips </h5>
        </center>
      </div>

      {/* ****************************************************************** */}
    </div>
    <br />

    <br /><br /> <hr />

    {/* ******************************************************** */}


    <div id='foot'>
      <div className='foot1'>
        <br />
        <center><h1>Payment</h1>
        <img src={Visa} alt="" height={50}/>
        <img src={Amex} alt="" height={50}/>
        <img src={Master} alt="" height={50}/>
        <img src={Cod} alt="" height={70}/>
        <img src={Net} alt="" height={70}/>
        </center>
      </div>

      
      <div className='foot1'><br />
        <center><h1>Connect</h1>
        <a href="https://www.facebook.com/Snapdeal" target='blank'><img src="https://i4.sdlcdn.com/img/footer/facebook@4x.png" alt=""  height={50}/></a>
        <a href="https://twitter.com/snapdeal" target='blank'><img src="https://i1.sdlcdn.com/img/footer/twitter@4x.png" alt=""  height={50} /></a>
        <a href="https://instagram.com/snapdeal/" target='blank'><img src="https://i4.sdlcdn.com/img/footer/instagram@4x.png" alt=""  height={50}/></a>
        <a href="https://www.linkedin.com/company/snapdeal/" target='blank'><img src="https://i2.sdlcdn.com/img/footer/linkedin@4x.png" alt=""  height={50}/></a>
        <a href="https://www.youtube.com/user/snapdeal" target='blank'><img src="https://i1.sdlcdn.com/img/footer/youtube@4x.png" alt=""  height={50}/></a>
        <a href="https://t.me/sdwapp" target='blank'><img src="https://i4.sdlcdn.com/img/footer/Telegram-Logo_112x112.png" alt=""  height={45}/></a>
        <a href="https://wa.me/918130222868?text=Hello%20Snapdeal,%20I%20need%20help" target='blank'><img src="https://i1.sdlcdn.com/img/footer/whatsapp-logo-112x112.png" alt=""  height={50}/></a>
        </center>
        
      </div>
    </div>
    <br /><br />
    <hr />
    </div>
    
  )
}

export default Shopping





      