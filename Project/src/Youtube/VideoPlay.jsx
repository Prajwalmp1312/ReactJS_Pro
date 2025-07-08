import React, { Fragment } from 'react'

const VideoPlay = ({play}) => {

  

  return (
    <Fragment>
    <div>
      <video src={play} height={500} width={1050} id='vid1' controls  autoPlay></video>
      
    </div>
    
    </Fragment>
  )
}

export default VideoPlay
