import React, { useContext, useState } from "react";
import "./Home.scss";
import { ApiContext } from "../context/ApiContext";
import Card from "../components/Card";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import Header from "../components/Header";

function Home() {
  const { userCarousel, loading } = useContext(ApiContext);
  const [page, setPage] = useState(1);
  const [pageMobile,setPageMobile] = useState(1)
  const perPage = 3;
  const lastIndex = page * perPage;
  const firstIndex = lastIndex - perPage;
  const pages = userCarousel.slice(firstIndex, lastIndex);
  const nPage = Math.ceil(userCarousel.length / perPage);
  //   const number = [...Array(nPage + 1).keys()].slice(1);

  const perPageMobile = 1;
  const lastIndexMobile = pageMobile * perPageMobile;
  const firstIndexMobile = lastIndexMobile - perPageMobile;
  const pagesMobile = userCarousel.slice(firstIndexMobile, lastIndexMobile);
  const nPageMobile = Math.ceil(userCarousel.length / perPageMobile);

  const prevPage = () => {
    if (page !== 1) {
      setPage(page - 1);
    }
  };

  const nextPage = () => {
    if (page !== nPage) {
      setPage(page + 1);
    }
  };
  const prevPageMobile = () => {
    if (pageMobile !== 1) {
      setPageMobile(pageMobile - 1);
    }
  };

  const nextPageMobile = () => {
    if (pageMobile !== nPageMobile) {
      setPageMobile(pageMobile + 1);
    }
  };

  if (loading === true) return <p>Loading...</p>;

  return (
    <div>
      <Header />
      <div className="other">
        <h1 className="other_h">My Home Page</h1>
        <div>
          <div className="home">
            <div className="home_container">
              {pages.map((data, index) => {
                return <Card key={index} {...data} />;
              })}
            </div>
            <AiOutlineArrowLeft className="home_left" onClick={prevPage} />
            <AiOutlineArrowRight className="home_right" onClick={nextPage} />
          </div>
          <div className="home_mobile">
            <div className="home_mobile_container">
              {pagesMobile.map((data, index) => {
                return <Card key={index} {...data} />;
              })}
            </div>

            <p className="home_page">
              {pageMobile} / {nPageMobile}
            </p>
           <div className="home_btn">
           <button className="btn_secondary" onClick={prevPageMobile}>
              Prev
            </button>
            <button className="btn_primary " onClick={nextPageMobile}>
              Next
            </button>
           </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
