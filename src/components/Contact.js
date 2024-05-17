import React from 'react'

const Contact = () => {
  return <>
  <div className='gradientBg'>
            <div className='contactus'>
                <div className='contactusHeadline'>
                    <h1 className='contactusHeader'><span className='bold contactusHeaderBold'>encourage </span>TO<br/> COMPLETE CTA AND<br/> LEAVE CV</h1>
                    <article className='salary'>SALLARY: <span className='bold'>£34,142</span></article>
                </div>
            <form action='#' className='contactForm'>
                <label htmlFor='yourName' className='contactFormLabel'>
                    Your Name
                <input type="text" id='yourName' required className='contactFormInput'/>
                </label>
                <label htmlFor='yourEmail' className='contactFormLabel'>
                    Your e-mail
                <input type="text" id='yourEmail' required className='contactFormInput'/>
                </label>
                <label htmlFor='yourPhonenumber' className='contactFormLabel'>
                    Your phone number
                <input type="text" id='yourPhonenumber' required className='contactFormInput'/>
                </label>
                <label htmlFor='yourPortfolio' className='contactFormLabel'>
                    upload your portfolio (max 1.5mb)
                <input type="file" id='yourPortfolio' required className='contactFormInput fileInput'/>
                <div className='contactFormInput'>
                    <span className='browseBtn'>browse...</span>
                </div>
                </label>
                <button type='submit' className='btn btn1 contactBtn'>Apply Now</button>
                
            </form>
            </div>
        </div>
  </>
}

export default Contact