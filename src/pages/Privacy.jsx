import React from "react";
import "../App.scss";
import Content from "../components/Content";
import OtherHeader from "../components/OtherHeader";

function Privacy() {
  return (
    <div className="pages">
      <OtherHeader />
      <h1 className="pages_h">Privacy Policy</h1>
      <Content />
    </div>
  );
}

export default Privacy;
