import React, { Fragment } from 'react'
import "./App.css"


const PrintDetails = ({Name,Password,ConfirmPass,Email}) => {

  return (
    <div>
      <center>
        <div id='div1'></div>
         <h1>**************</h1>
      <h1>Name:{Name}</h1>
      <h1>Password:{Password}</h1>
      <h1>ConfirmPassword:{ConfirmPass}</h1>
      <h1>Email-ID:{Email}</h1>
      
      </center>
    </div>
  )
}

export default PrintDetails
