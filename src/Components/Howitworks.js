import React from 'react'

function Howitworks() {
  return (
    <div className='how-it-works'>
        <div className='container'>
            <h2>How It Works</h2>
            <div className='flex'>

                <div>
                    <span className='fa fa-user-md'></span>
                    <h4>Talk To A Physician</h4>
                    <p>Tell them what you're looking for.</p>
                </div>

                <div>
                    <span className='fa fa-pencil-square-o'></span>
                    <h4>Get Prescribed</h4>
                    <p>One of our licensed physicians will write you a prescription. </p>
                </div>

                <div>
                    <span className='fa fa-chevron-circle-up'></span>
                    <h4>Refill Your Prescription</h4>
                    <p>Easily refill your prescription when you run out.</p>
                </div>

            </div>
        </div>
    </div>
  )
}

export default Howitworks;