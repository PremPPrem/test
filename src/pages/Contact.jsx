import React from 'react'
import Content from "../components/Content";
import OtherHeader from '../components/OtherHeader';
import "../App.scss";


function Contact() {
  return (
    <div className='pages'>
    <OtherHeader />
    <h1 className="pages_h">Contact</h1>
    <Content />
  </div>
    
  )
}

export default Contact