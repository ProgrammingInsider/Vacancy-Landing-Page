import React from 'react'

// Images
import Image2 from '../Images/image 2.jpg'

// Icons
import image from '../Icons/image.svg'
import keyboard from '../Icons/keyboard.svg'
import mobile from '../Icons/mobile.svg'
import pen from '../Icons/result.svg'
import cotation from '../Icons/cotation.svg'


const Service = () => {
  return <>
    <div className='service'>
        <div className='serviceHeroContainer'>
           <div className='serviceHero'>
            <img src={Image2} alt="service" className='serviceHeroImage'/>
           </div>
            <div className='serviceStaticContainer'>
              <div className='serviceStatic'><span className='primaryText staticNumber'>4</span> <span className='staticName'>headquarters</span></div>
              <div className='serviceStatic'><span className='primaryText staticNumber'>1205</span> <span className='staticName'>projects</span></div>
              <div className='serviceStatic'><span className='primaryText staticNumber'>250</span> <span className='staticName'>employees</span></div>
            </div>
        </div>

           <div className='aboutus'>
              <p className='aboutusPara'><span className='bold'>A few words about you company. </span>What you are doing, what are you goals etc. 
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
              sed do eiusmod tempor incididunt ut labore et dolore magna 
              aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
              ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
              <h1 className='aboutusHeader'>what we are <span className='bold'>Doing</span></h1>
              <div className='serviceContainer'>
                 <div className='eachService'>
                    <div className='serviceIconContainer'>
                        <img src={image} className='serviceIcon'/>
                    </div>
                    <div className='eachServiceDesc'>
                    <h1 className='eachServiceHeader'>Logo And Branding</h1>
                    <p className='eachServicePara'>A few words about your Product/Offer. Focus on the benefits not the features</p>
                    </div>
                 </div>

                 <div className='eachService'>
                    <div className='serviceIconContainer'>
                        <img src={keyboard} className='serviceIcon'/>
                    </div>
                    <div className='eachServiceDesc'>
                    <h1 className='eachServiceHeader'>WWW PAGES</h1>
                    <p className='eachServicePara'>A few words about your Product/Offer. Focus on the benefits not the features</p>
                    </div>
                 </div>

                 <div className='eachService'>
                  <div className='serviceIconContainer'>
                    <img src={mobile} className='serviceIcon'/>
                 </div>
                    <div className='eachServiceDesc'>
                    <h1 className='eachServiceHeader'>MOBILE APS</h1>
                    <p className='eachServicePara'>A few words about your Product/Offer. Focus on the benefits not the features</p>
                    </div>
                 </div>

                 <div className='eachService'>
                 <div className='serviceIconContainer'>
                    <img src={pen} className='serviceIcon'/>
                </div>
                    <div className='eachServiceDesc'>
                    <h1 className='eachServiceHeader'>CONTENT MARKETING</h1>
                    <p className='eachServicePara'>A few words about your Product/Offer. Focus on the benefits not the features</p>
                    </div>
                 </div>
              </div>
           </div>

           <div className='proofContainer'>
           <h1 className='aboutusHeader'>social <span className='bold'>Proof</span></h1>
            <div className='eachProofContainer'>
            <div className='eachProof'>
                <img src={cotation} alt='cotation' className='cotationIcon'/>
                <p className='proofPara italic'>
                A few sentences about your product. How it help 
                tosolve clients' problems.It should convince the 
                unconvinced. No fake quotes or photos!
                </p>
                <h4 className='proofName'>Your Customer Name</h4>
            </div>

            <div className='eachProof'>
                <img src={cotation} alt='cotation' className='cotationIcon'/>
                <p className='proofPara italic'>
                A few sentences about your product. How it help 
                tosolve clients' problems.It should convince the 
                unconvinced. No fake quotes or photos!
                </p>
                <h4 className='proofName'>Your Customer Name</h4>
            </div>
            </div>
           </div>
      </div>
  </>
}

export default Service