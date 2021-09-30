import './home.css'
import React from 'react'
import Navbar from '../components/navbar/Navbar'
import Featured from '../components/featured/Featured'
import FilmList from '../components/list/FilmLists'
import Watch from '../components/watch/Watch'




const Home = () => {
    return (
        <div className="home">
            
    
            <Navbar/>
            <Featured />
            <FilmList/>
            <FilmList/>
            <FilmList/>
            <Watch/>
         
            
        </div>
    )
}

export default Home
