import React from "react";
import "./ListTemp.css";

function TempList({ data = [], renderItem = () => {} }) {
  return (
    <>
      <div className="container">{data.map(renderItem)}</div>
    </>
  );
}

export default TempList;
