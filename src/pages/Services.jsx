import React, { useContext } from "react";
import "./Services.scss";
import { ApiContext } from "../context/ApiContext";
import { AiFillCaretDown } from "react-icons/ai";
import Sort from "../components/Sort";
import OtherHeader from '../components/OtherHeader';


function Services() {
  const { userSort, loading, sortDataAToZ, sortDataZToA, sortData,search,word,setWord } =
    useContext(ApiContext);
  

  if (loading === true) return <p>Loading...</p>;
  return (
 <div>
    <div className="services">
    <OtherHeader />
      <h1 className="services_h">Services</h1>
  <div className="search">
  <label htmlFor="search_form">
          <input
            type="text"
            className="search_input"
            placeholder="Search name or email"
            value={word}
            onChange={(e)=>setWord(e.target.value)}
          />
        </label>
  </div>

    <div className="dropdown_head">
    <div className="dropdown">
       <div className="sort"> <span>Sort</span><AiFillCaretDown className="sort_arrow" /></div>
        <div className="dropdown-content">
          <button className="sort_btn" onClick={sortData}>
            Default
          </button>
          <button className="sort_btn" onClick={sortDataAToZ}>A TO Z</button>
          <button className="sort_btn" onClick={sortDataZToA}>Z TO A</button>
        </div>
      </div>
    </div>

    <div className="services_container">
     
     {search(userSort).length &&
          search(userSort).map((data, index) => {
            return (
            <Sort key={index} {...data} />
            );
          })}
     </div> 
    </div>  
 </div>    
  );
}

export default Services;
