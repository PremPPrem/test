import React from "react";
import "./Modal.scss";
import { PiWarningCircleBold } from "react-icons/pi";

function Modal({closeModal}) {
  return (
    <div className="modal">
      <div className="modal_head">
        <div className="modal_title">
          <button className="modal_x" onClick={()=>{closeModal(false)}}>X</button>
          <div className="modal_icon">
            <PiWarningCircleBold />
          </div>

          <div className="modal_text">
            <p>Are you sure you want to delete this product?</p>
          </div>

          <div className="modal_btn">
            <button className="btn_danger" onClick={()=>{closeModal(false)}}>Yes, I'm sure</button>
            <button className="btn_secondary" onClick={()=>{closeModal(false)}}>No, cancel</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;
