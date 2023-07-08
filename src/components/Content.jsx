import React, { useState } from 'react'
import './Content.scss'
import { BsMoonStarsFill ,BsFillStarFill } from "react-icons/bs";
import Modal from './Modal';

function Content() {
    const [openModal,setOpenModal] = useState(false)
  return (
    <div>
         {openModal && <Modal closeModal={setOpenModal} />}
        <div className="content_head">
            <div className="content_line"></div>
            <div className="content_row row1">
                <section>
                    <BsFillStarFill className='content_icon' />
                    <div>
                        <span className="content_title">Hello World !</span>
                    </div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis corporis est, alias deserunt fugiat necessitatibus iste illo mollitia assumenda quibusdam!</p>
                    <div>
                    <button className="btn_primary" onClick={()=>{setOpenModal(true)}}>Toggle modal</button>
                    </div>
                </section>
            </div>
            <div className="content_row row2">
                <section>
                <BsMoonStarsFill className='content_icon' />
                    <div>
                        <span className="content_title">Hello World !</span>
                    </div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis corporis est, alias deserunt fugiat necessitatibus iste illo mollitia assumenda quibusdam!</p>
                    <div>
                    <button className="btn_primary" onClick={()=>{setOpenModal(true)}}>Toggle modal</button>
                    </div>
                </section>
            </div>
            <div className="content_row row1">
                <section>
                    <BsFillStarFill className='content_icon' />
                    <div>
                        <span className="content_title">Hello World !</span>
                    </div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis corporis est, alias deserunt fugiat necessitatibus iste illo mollitia assumenda quibusdam!</p>
                    <div>
                    <button className="btn_primary" onClick={()=>{setOpenModal(true)}}>Toggle modal</button>
                    </div>
                </section>
            </div>
            <div className="content_row row2">
                <section>
                <BsMoonStarsFill className='content_icon' />
                    <div>
                        <span className="content_title">Hello World !</span>
                    </div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis corporis est, alias deserunt fugiat necessitatibus iste illo mollitia assumenda quibusdam!</p>
                    <div>
                    <button className="btn_primary" onClick={()=>{setOpenModal(true)}}>Toggle modal</button>
                    </div>
                </section>
            </div>
            <div className="content_row row1">
                <section>
                    <BsFillStarFill className='content_icon' />
                    <div>
                        <span className="content_title">Hello World !</span>
                    </div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis corporis est, alias deserunt fugiat necessitatibus iste illo mollitia assumenda quibusdam!</p>
                    <div>
                    <button className="btn_primary" onClick={()=>{setOpenModal(true)}}>Toggle modal</button>
                    </div>
                </section>
            </div>
            <div className="content_row row2">
                <section>
                <BsMoonStarsFill className='content_icon' />
                    <div>
                        <span className="content_title">Hello World !</span>
                    </div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis corporis est, alias deserunt fugiat necessitatibus iste illo mollitia assumenda quibusdam!</p>
                    <div>
                    <button className="btn_primary" onClick={()=>{setOpenModal(true)}}>Toggle modal</button>
                    </div>
                </section>
            </div>
        </div>
    </div>
  )
}

export default Content