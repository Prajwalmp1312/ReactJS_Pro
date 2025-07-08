import axios from 'axios'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import "./Login.css"
import { useNavigate, useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'

const Editdetails = () => {
    let [state,setState]=useState({
        Email:"",
        Password:""
    })

    let {Email,Password}=state

    let {id}=useParams()

    let navigate=useNavigate()



    let handleChange=(e)=>{
        let {name,value}=e.target
        setState({...state,[name]:value})
    }

    useEffect(()=>{
        let data=async()=>{
            let edit=await axios.get(`http://localhost:1312/users/${id}`)
        }
        data()
    },[id])


    let handleSubmit=async(e)=>{
        e.preventDefault()


        try{
         
            navigate("/shoppy");

            let payload={Email,Password}

            let data=await axios.put(`http://localhost:1312/users/${id}`,payload)
        }
        catch(err){
            console.log(err);
            
        }
    }

  return (
       <div id='d1'>
     <center>
        <div className='d2'></div>
        <div className='d2'></div>
        
        <form action="" id='fm' onSubmit={handleSubmit}>
            <h1>Login-Page</h1><br /><br />
            {/* <label htmlFor="name" className='lb'>Username:-</label><br />
            <input type="text" name="" id="name" placeholder="Enter Username" className='in' /><br /><br /> */}
            <label htmlFor="Email" className='lb'>Email-ID:-</label><br />
            <input type="email" name="Email" id="mail" placeholder="Enter Email-ID" className='in' onChange={handleChange} required/><br /><br />
            <label htmlFor="Password" className='lb'>Password:-</label><br />
            <input type="password" name="Password" id="pass" placeholder="Enter Password" className='in' onChange={handleChange} required/><br /><br />
            <button type="submit" id='lg'>Login</button><br /><br />
            <button type="reset" id='set'>Reset</button>
            <button id='can'>Cancel</button><br /><br />
            <a href="">Forgot Password?</a><br /><br />
            <h3>Don't have an account?<Link to="/signup" >Signup</Link></h3>
        </form>


        


      </center>
    </div>
  )
}

export default Editdetails
