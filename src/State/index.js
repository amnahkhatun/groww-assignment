import React, { Component } from "react";
import { useParams } from "react-router-dom";

import InformationBox from "../Home/InformationBox";
import DisplayTable from "../Home/DisplayTable";

const StateComponent = () => {
  const { code } = useParams();
  let data = JSON.parse(localStorage.getItem("Covid19"))[code];
  console.log(code, "code");
  return (
    <div>
      <InformationBox />
      <DisplayTable data={data} isState={true} />
    </div>
  );
};
export default StateComponent;
