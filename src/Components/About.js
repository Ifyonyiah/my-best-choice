import React from 'react'
import aboutimg from '../Images/aboutimg.jpeg'
function About() {
  return (
    <div className='about'>
        <div className='about-info'>
            <img src={aboutimg} alt='about img' />
        </div>
        <div className='about-text'>
            <h2>A New Way Of Looking At Contraception</h2>
            <p>My Best Choice is the new way to get contraception. All you need to do is set up a consultation with one of our Physicians, who are available 24/7, tell them about what you’re looking for a see if you’re a candidate for quick, easy, and affordable birth control. Also, you can refill prescriptions right from home!</p>
            <button>View More Details</button>
        </div>
    </div>
  )
}

export default About;