import './home.css'
import React from 'react'
import Navbar from '../components/navbar/Navbar'
import Featured from '../components/featured/Featured'
import FilmList from '../components/list/FilmLists'




const Home = () => {
    return (
        <div className="home">
            
    
            <Navbar/>
            <Featured />
            <FilmList/>
            <FilmList/>
            <FilmList/>
         
            
        </div>
    )
}

export default Home
