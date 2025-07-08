import React, { useState } from 'react'
import "./Signup.css"
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'

const Signup = () => {

   
let [state,setState]=useState({
        Name:"",
        Password:"",
        ConfirmPass:"",
        Email:""
    })

    let {Name,Password,ConfirmPass,Email}=state

    let navigate=useNavigate()

    let handleChange=(e)=>{
        let {name,value}=e.target
        setState({...state,[name]:value})
    }

    let handleSubmit=async(e)=>{
        e.preventDefault()
        

        try{

            navigate("/login")

            let payload={Name,Password,ConfirmPass,Email}

            let data=await axios.post("http://localhost:1312/signup",payload)
        }
        catch(err){
            console.log(err);
            
        }
    }

  return (
    <div id='d1'>
      <center>
        <div id='d2'>
        <br /><br /><br />
        <form action="" id='form1' onSubmit={handleSubmit} autoComplete='off '>
          <h2>Signup-Page</h2><br />
          <label htmlFor="Name" id='name2'>Name:-</label><br />
          <input type="text" name="Name" id="name1" className='in1' onChange={handleChange} required/><br /><br />

          <label htmlFor="Password" className='lb1'>Password:-</label><br />
          <input type="password" name="Password" id="pass1"  className='in1' onChange={handleChange} required/><br /><br />

          <label htmlFor="ConfirmPass" id='cp1'>Confirm Password:-</label><br />
          <input type="password" name="ConfirmPass" id="cp" className='in1' onChange={handleChange} required/><br /><br />

          <label htmlFor="Email" className='lb1'>Email-Id:-</label><br />
          <input type="email" name="Email" id="email1"  className='in1' onChange={handleChange} required /><br /><br />

          <button type="submit" id='sgin'  >Signup</button><br /><br /> &nbsp;&nbsp;&nbsp;&nbsp;
          <button type="reset">Reset</button>

          <h3>Already have an account? <Link to="/login">Login</Link></h3>

        </form>
        </div>
      </center>
    </div>
  )
}

export default Signup


    // let [state,setState]=useState({
    //     Name:"",
    //     Password:"",
    //     ConfirmPass:"",
    //     Email:""
    // })


    // let {Name,Password,ConfirmPass,Email}=state


    //  let handleChange=(e)=>{
    //     let{name,value}=e.target
    //     setState({...state,[name]:value})
    // }

    // let handleSubmit=async(e)=>{
    //     e.preventDefault()

    //     try{
    //         let payload={Name,Password,ConfirmPass,Email}

    //         let data=await axios.post("http://localhost:1312/Signup",payload)
    //     }
    //     catch(err){
    //         console.log(err);
            
    //     }
       

    // }