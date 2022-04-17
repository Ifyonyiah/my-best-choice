import React from 'react';
import Helpbox from './Helpbox';
import img1 from '../Images/img1.jpeg';
import img2 from '../Images/img2.jpeg';
import img3 from '../Images/img3.png';




function Help() {
  return (
    <div className='product'>
        <div className='p-heading'>
            <h3>How Can We Help You?</h3>
            <p>Choose One Of The Options Below To Get Started:</p>
        </div>

        <div className='product-container'>
            <Helpbox image={img1} name='Get A New Prescription' />
            <Helpbox image={img2} name='Refill A Prescription' />
            <Helpbox image={img3} name='Types of Contraception We Offer' />

        </div>
    </div>
  )
}

export default Help;