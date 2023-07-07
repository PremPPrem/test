import React from "react";
import "./Card.scss";


function Card({ first_name, last_name, avatar, id, email }) {

  return (
    //   <div>
    //   <div className="card">
    //   <img src={avatar} alt={id} />
    //  <div className="container">
    //  <h1>
    //     {first_name} {last_name}
    //   </h1>
    //   <p>{email}</p>
    //   <button className="btn_primary" onClick={()=>{setOpenModal(true)}}>Toggle modal</button>
    //   {openModal && <Modal closeModal={setOpenModal} />}
    //  </div>
    //   </div>
    //   </div>

    <div>
      <div className="card_container">
        <div className="card">
          <div className="card_box">
            <div className="card_content">
              <img src={avatar} alt={id} />
              <h3>
                {first_name} {last_name}
              </h3>
              <p>{email}</p>
              <button className="btn_primary card_btn">Go somewhere</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
