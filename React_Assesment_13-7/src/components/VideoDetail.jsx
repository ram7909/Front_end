import React, { useState } from 'react'
import Home from './Home'
import { useParams } from 'react-router-dom'
const VideoDetail = () => {
    const [filter, setFilter] = useState([])
    const { videoId } = useParams();
    const filterData = ()=>{
        const filtered = Home.data.filter((video)=>video.id.videoId === videoId )
        setFilter(filtered)
    }  
    return (
    <>
        <Home data={filter} />
    </>
  )
}

export default VideoDetail