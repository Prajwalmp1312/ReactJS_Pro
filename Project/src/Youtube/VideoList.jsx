import React from 'react'

const VideoList = (props) => {

  console.log(props);

  let {thumbnailUrl,title}=props.data
  
  return (
    <div>
      <div onClick={()=>{
        return props.fun(props.data)
      }}>
        <img src={thumbnailUrl} height={200} width={300} id='img1' alt="" />
        <h1 id='img2' >{title}</h1>
      </div>
    </div>
  )
}

export default VideoList
