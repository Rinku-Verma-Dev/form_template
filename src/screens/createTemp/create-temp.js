import React from "react";
import CreateTemp from "../../components/form/createTemp";

function TempScreen() {
  window.onoffline= (e)=>{
    alert("connection LOST");
  }
  return (
    <>
      <CreateTemp />
    </>
  );
}

export default TempScreen;
