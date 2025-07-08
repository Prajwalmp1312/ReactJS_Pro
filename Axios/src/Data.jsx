import axios from 'axios'
import React, { useEffect, useState } from 'react'
// import PacmanLoader from "react-spinners"
import PrintDetails from './PrintDetails'


const Data = () => {

    let [state,setState]=useState(null)

    let fetchDetails=async()=>{
        let {data}=await axios.get("http://localhost:1312/signup")

        setState(data)
    }



    useEffect(()=>{
        fetchDetails()
        
    })

  return (
    <div>
      {
        state==null ? ("?") : (state.map((data)=>{
            return <PrintDetails {...data}></PrintDetails>
        }))
      }
    </div>
  )
}

export default Data
