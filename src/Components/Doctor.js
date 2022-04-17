import React from 'react';
import Doctorbox from './Doctorbox';
import doctor1 from '../Images/doctor1.jpeg';
import doctor2 from '../Images/doctor2.jpeg';
import doctor3 from '../Images/doctor3.jpeg';

function Doctor() {
  return (
    <div className='doctor'>
        <div className='doctor-heading'>
            <h1>Physicians</h1>
            <p>Physicians Ready To Help You!</p>
        </div>
        <div className='b-container'>
            <Doctorbox image={doctor1} name='Mary Cruz MD' />
            <Doctorbox image={doctor2} name='Ashley Crawford MD' />
            <Doctorbox image={doctor3} name='David Smith MD' />
        </div>
    </div>
  )
}

export default Doctor;