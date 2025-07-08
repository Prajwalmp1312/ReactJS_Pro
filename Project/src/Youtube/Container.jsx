import React from 'react'
import VideoList from './VideoList'
import VideoPlay from './VideoPlay'

const Container = ({state,play,fun}) => {
  return (
    <div>
      <div>
        <article>
          <aside>
          <VideoPlay play={play}></VideoPlay>
          </aside>

          <aside>
            
            {
              state.map((data)=>{
                return <VideoList fun={fun} data={data}></VideoList>
              })
            }
          </aside>
        </article>
      </div>
    </div>
  )
}

export default Container
