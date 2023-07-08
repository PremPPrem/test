import React from "react";
import "../App.scss";
import Content from "../components/Content";
import OtherHeader from '../components/OtherHeader';

function About() {
  return (

    <div className='pages'>
    <OtherHeader />
    <h1 className="pages_h">About</h1>
    <Content />
  </div>
   
  );
}

export default About;
