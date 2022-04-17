import React from 'react'

function Doctorbox(props) {
  return (
    <div className='d-box'>
        <div className='a-b-img'>
            <img src={props.image} alt='dr' />
        </div>
        <div className='a-b-text'>
            <h3>{props.name}</h3>
            <a href='#' className='doctor-btn'>Book Now</a>
        </div>
    </div>
  )
}

export default Doctorbox;