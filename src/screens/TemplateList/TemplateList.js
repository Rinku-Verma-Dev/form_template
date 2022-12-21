import React, { useState } from "react";
import Header from "../../components/Headers/CreateTempHeader";
import TempList from "../../components/list-Item/ListTemp";
import Popup from "../../components/model/model.pre";
import "./style.css";

function TemplateList() {
  const [PreviewFlag, setFlag] = useState(false);
  const [tempName, setTemp] = useState();
  const [inputText, setText] = useState();
  const [dropDowns, setDrop] = useState();

  const field = localStorage.getItem("fields")
    ? JSON.parse(localStorage.getItem("fields"))
    : [];

  const handlePreviewToOpen = (item) => {
    if (field) {
      setTemp(item.name);
      setText(item.textField);
      setDrop(item.dropFields);
      setFlag(true);
    }
  };
  const handlePreviewToClose = () => {
    setFlag(false);
  };
  window.onoffline= (e)=>{
    alert("connection LOST");
  }
  return (
    <React.Fragment>
      <Header />
      <TempList
        data={field}
        renderItem={(Item, i) => (
          <button
            key={i}
            
            onClick={() => handlePreviewToOpen(Item)}
            className="listDiv"
          >
            {Item.name}
          </button>
        )}
      />
      <Popup
        tempName={tempName}
        inTextBoxes={inputText}
        dropDowns={dropDowns}
        PreviewFlag={PreviewFlag}
        handlePreviewToOpen={handlePreviewToOpen}
        handlePreviewToClose={handlePreviewToClose}
      />
    </React.Fragment>
  );
}

export default TemplateList;
