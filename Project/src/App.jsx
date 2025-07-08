import React, { Fragment, useState } from 'react'
import Video from "./Video.json"
import Container from "./Youtube/Container"
import "./App.css"
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdSearch } from "react-icons/io";
import { MdKeyboardVoice } from "react-icons/md";

const App = () => {


  let [state,setState]=useState(Video)

  let [play,setPlay]=useState(state[0])

  let handlePlay=(kgf)=>{
    setPlay(kgf.videoUrl)
  }


  return (
    <Fragment>
      <div id='d1'>
          <div id='d2'><GiHamburgerMenu />
          <a href="https://www.youtube.com/"><img src="Y2.png" alt="" height={30} /></a>
          
          </div>
          <div id='d3'> 
            <input type="text" placeholder='Search' name="" id="pd" />
            &nbsp;&nbsp;&nbsp;  
            <img src="Search.png" height={25} alt="" />
            <img src="Voice.jpg" alt="" height={35} width={35}/>  
          </div>
          <div id='d4'>
            <button id='btn'><h2>+ Create</h2></button>
            <img src="Noti.png" alt="" height={60} />
            <button id='btn1'>SignIn</button>
          </div>
      </div>

{/* *********************************************** */}


    <div>
      <Container fun={handlePlay} state={state} play={play} ></Container>
      
    </div>

    </Fragment>
  )
}

export default App
