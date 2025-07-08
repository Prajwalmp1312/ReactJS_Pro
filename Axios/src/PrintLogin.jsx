import React from 'react'
import { Link } from 'react-router-dom'

const PrintLogin = ({Email,Password,id}) => {
  return (
    <div>
      <center>
      <h1>**************</h1>
      <h1>Email-ID:{Email}</h1>
      <h1>Password:{Password}</h1>
      <ul>
        <li><Link to={`/edit/${id}`}>Edit</Link></li>
        <li></li>
      </ul>
      </center>
    </div>
  )
}

export default PrintLogin
