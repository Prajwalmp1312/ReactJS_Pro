import axios from 'axios'
import React, { useState } from 'react'
import "./Login.css"
import { Link, useNavigate } from 'react-router-dom'



const Loginpage = ({setIsLoggedIn,isLoggedIn}) => {

  const user = {
    'Pmp@gmail.com': 'dp1312',
    'Kgf@gmail.com': 'googly',
    'Rocky@gmail.com': 'SalamRockyBhai'
  };

 
let [state,setState]=useState({
        Email:"",
        Password:""
    })

    let {Email,Password}=state

    let navigate=useNavigate()



    let handleChange=(e)=>{
        let {name,value}=e.target
        setState({...state,[name]:value})
    }

    let handleSubmit=async(e)=>{
        e.preventDefault()
        if (user[Email] && user[Email] === Password) {
      setIsLoggedIn(true); 
      navigate('/shoppy');
    } else {
      alert("Invalid email or password!"); 
      navigate('/login')
    }

        try{

            // navigate('/shoppy')
  
            let payload={Email,Password}

          if (user[Email] && user[Email] === Password || setIsLoggedIn(!true)) {
           
            
            let data=await axios.post("http://localhost:1312/users",payload)
          }
        }
        catch(err){
            console.log(err);
            
        }     

    }

  return (
    <div id='d1'>
     <center>
        <div id='d22'></div>
        <div id='d21'>
        
        <form action="" id='fm' onSubmit={handleSubmit} autoComplete='off'>
            <h1>Login-Page</h1><br /><br />
            {/* <label htmlFor="name" className='lb'>Username:-</label><br />
            <input type="text" name="" id="name" placeholder="Enter Username" className='in' /><br /><br /> */}
            <label htmlFor="Email" className='lb'>Email-ID:-</label><br />
            <input type="email" name="Email" id="mail"  placeholder="Enter Email-ID" className='in' onChange={handleChange} required/><br /><br />
            <label htmlFor="Password" className='lb'>Password:-</label><br />
            <input type="password" name="Password" id="pass"  placeholder="Enter Password" className='in' onChange={handleChange} required/><br /><br />
            <button type="submit" id='lg' >Login</button><br /><br />
            <button type="reset" id='set'>Reset</button>
            <button id='can'>Cancel</button><br /><br />
            <a href="">Forgot Password?</a><br /><br />
            <h3>Don't have an account?<Link to="/signup" >Signup</Link></h3>
        </form>

</div>
        


      </center>
    </div>
  )
}

export default Loginpage



