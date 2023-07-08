import React from 'react'
import './OtherHeader.scss'

function OtherHeader() {
  return (
    <div className='other'>
        <div className="other_head">
            {/* <div className="other_content">
            <div className="other_text">Welcome To</div>
            <ul className="other_title">
                <li><span>About</span></li>
                <li><span>Services</span></li>
                <li><span>Contact</span></li>
                <li><span>Privacy Policy</span></li>
                <li><span>Terms&Conditions</span></li>
            </ul>
            </div> */}
            <h1 className="other_title" data-text="WelcomeToPages">WelcomeToPages</h1>
        </div>
    </div>
  )
}

export default OtherHeader