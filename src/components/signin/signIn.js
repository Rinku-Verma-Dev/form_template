import React from "react";
import { useHistory } from "react-router-dom";
import { AllData } from "../../routes";
import HOC from "../HOC/HOC";
import "./style.css";

function Sigin() {
  let id = "";
  const handleChnage = (e) => {
    id = e.target.value;
  };
  const history = useHistory();
  const handleClick = () => {
    localStorage.setItem("jwt", id);
    history.push("/");
  };
  window.onoffline= (e)=>{
    alert("connection LOST");
  }
  return (
    <AllData.Consumer>
      {() => {
        return (
          <div className="signin-div">
            <input
              onChange={handleChnage}
              type="email"
              placeholder="Enter User ID"
            />
            <button type="submit" onClick={handleClick}>
              submit
            </button>
          </div>
        );
      }}
    </AllData.Consumer>
  );
}
export default HOC(Sigin);
