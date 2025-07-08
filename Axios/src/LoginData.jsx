import axios from 'axios'
import React, { useEffect, useState } from 'react'
import PrintLogin from './PrintLogin'

const LoginData = () => {

    let [state,setState]=useState(null)

    let fetchLogin=async()=>{
        let {data}=await axios.get("http://localhost:1312/users")

        setState(data)
    }

    useEffect(()=>{
        fetchLogin()
    })



  return (
    <div>
      {
        state==null ? ("?") : (state.map((data)=>{
            return <PrintLogin {...data}></PrintLogin>
        }))
      }
    </div>
  )
}

export default LoginData
