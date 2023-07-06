import React, { useContext } from "react";
import "./Services.scss";
import { ApiContext } from "../context/ApiContext";
import { AiFillCaretDown } from "react-icons/ai";


function Services() {
  const { userSort, loading, sortDataAToZ, sortDataZToA, sortData } =
    useContext(ApiContext);

  if (loading === true) return <p>Loading...</p>;
  return (
    <div className="services">
      <h1 className="other_h">Services</h1>

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

      <div className="services_data">
        {userSort.length &&
          userSort.map((data, index) => {
            return (
              <div key={index}>
                <p>{data.first_name}</p>
                <p>{data.email}</p>
                <img src={data.avatar} alt={data.id} />
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default Services;
