import React from 'react'
import {Link,Outlet} from 'react-router-dom'
import "./App.css"
import pic from "./Photos/Shopping1.jpg"
import Home1 from './Home1'

const Home = () => {

  

  return (
    <div>
      
      <div id='homed1'>
        
         <Link id='home' to="/vid" >Home Page</Link>
         <Link to="/signup">Signup Page</Link>
         <Link to="/login">Login Page</Link>
         <Link to="/shoppy">Shopping Page</Link>
         <Link to="/data">Signup Details</Link>
         <Link to="/logindata">Login Details</Link>
         
        
      </div>
      

      <Outlet></Outlet>
    </div>
  )
}

export default Home
