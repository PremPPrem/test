import React from 'react'
import './Sort.scss'

function Sort({ first_name, avatar, id, email }) {
  return (
    <div>
        <div className="sort_container">
            <div className="sort_card">
                <h2>{first_name}</h2>
                <p>{email}</p>
                <img src={avatar} alt={id} />
            </div>
        </div>
    </div>
  )
}

export default Sort