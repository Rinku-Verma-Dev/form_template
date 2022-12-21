import React from "react";

function HOC(WrappedComponent) {
  return function () {
    return (
      <div>
        <h1 style={{ marginLeft: "40vw" }}>This is from HOC</h1>
        <WrappedComponent />
      </div>
    );
  };
}

export default HOC;
