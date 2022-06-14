import React from 'react';
import { Link } from 'react-router-dom';
import BannerImage from '../images/makingpizza.jpeg';
import '../styles/Home.css';

const HomePage = () => {
  return (
    <div className='home' style={{ backgroundImage: `url(${BannerImage})`}}>
        <div className='header-container'>
            <h1>Ian's Pizzeria</h1>
            <p>WHITE OR WHEAT</p>
            <Link to='/menu'>
            <button>ORDER NOW</button>
            </Link>
        </div>  
    </div>
  )
}

export default HomePage;