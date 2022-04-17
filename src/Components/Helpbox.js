import React from 'react'

function Helpbox(props) {
  return (
    <div className='p-box'>
        <img src={props.image} alt='offers' />
        <p> {props.name} </p>
        <a href='#' className='info-btn'>Learn More</a>
    </div>
  )
}

export default Helpbox;