import React from 'react'
import './Card.scss'

function Card({first_name , last_name , avatar , id ,email}) {
  return (

    <div>
    <div className="card">
    <img src={avatar} alt={id} />
   <div className="container">
   <h1>
      {first_name} {last_name}
    </h1>
    <p>{email}</p>
    <button className='btn_primary'>Go somewhere</button>
   </div>
    </div>
    </div>
 
  )
}

export default Card