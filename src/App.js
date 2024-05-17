import React, { useEffect } from 'react'
import './index.css';

// Icons
import logo from './Icons/logo.png'

// Images
import image1 from './Images/image 1.jpg'


// Components
import SkillsandOffers from './components/Skills&Offers';
import Service from './components/Service';
import Contact from './components/Contact';
import Footer from './components/Footer'

const App = () => {

    return<>
    <div className='Hero'>
      <div className='HeroHeadline'>
        <div className='logoContainer'>
            <img src={logo} className='logo'/>
            <h1 className='logoName'>Your Logo</h1>
        </div>  
        <h1 className='headlineDesc'>WE ARE <span className='primaryText'>HIRING! SOFTWARE ENGINEER</span> WANTED!</h1>
        <div className='headlineBtn'>
            <button className='btn btn1'>Apply Now</button>
            <button className='btn btn2'>Learn More</button>
        </div>
      </div>
      <div className='heroImageContainer'>
        <img src={image1} className='heroImage' />
      </div>
    </div>
        <SkillsandOffers/>
        <Service/>
        <Contact/>
        <Footer/>
        
      
    
      

    </>
 
     
  
}

export default App