import React from 'react'
import MottionItem from './MotionItem'

import './services.css'
const Services = () => {
  return (
    <div className='serviceContainer' id='services'>
        <div className='header'>
           <h3 className='title'>НАШИ УСЛУГИ</h3> 
        </div>
      <div className='serviceBox'>
       <MottionItem/>
      </div>
    </div>
  )
}

export default Services
