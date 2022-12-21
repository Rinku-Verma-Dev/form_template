import React from "react";
import { useHistory } from "react-router-dom";
import "./CreateTempHeader.css";
// import Modal from "react-modal";

function Header() {
  const history = useHistory();
  const changeRoute = () => {
    history.push("/create-template");
  };
  const logOut = () =>{
      localStorage.setItem('jwt', "");
      history.push("/login");
  }
  return (
    <React.Fragment>
      <div className="HeaderNav">
        <span>Create Template</span>
        <button onClick={changeRoute} className="create-btn" type="button">
          {" "}
          Create{" "}
        </button>
        <button onClick={logOut} className="create-btn" type="button">Log Out</button>
      </div>
    </React.Fragment>
  );
}

export default Header;
