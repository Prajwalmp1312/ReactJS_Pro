import React, { useRef, useState } from 'react'
import Video from "./Photos/Video.mp4"
import "./App.css"

const Home1 = () => {

    let [play,setPlay]=useState(true)
    
    let playRef=useRef()

    let handlePlay=()=>{
    setPlay(!play)

    if(play === true){
      playRef.current.play()
    }else{
      playRef.current.pause()
    }
  }

  return (
    <div>
        <br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
        <center>
      <video src={Video} controls ref={playRef} height={400} width={850} id='vid'></video><br /><br />
      <button id='vidbtn' onClick={handlePlay}>{play? "Play":"Pause"} </button>
      </center>
    </div>
  )
}

export default Home1
