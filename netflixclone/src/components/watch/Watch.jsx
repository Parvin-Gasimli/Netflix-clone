import { ArrowBackIosOutlined } from '@material-ui/icons'
import React from 'react'
import './watch.css'

const Watch = () => {
    return (
        <div className="watch">
            <div className="back">

                <ArrowBackIosOutlined/>
                Home
            </div>
            <iframe className="video" width="760" height="500px" src="https://www.youtube.com/embed/A80pz7ZvF5s" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            
        </div>
    )
}

export default Watch
