import React, { useState } from "react";
import InputText from "../inputText/InputText";
import DropDown from "../dropdown/Dropdown";
import Foorter from "../../components/footer/footer";
import "./style.css";
import { useHistory } from "react-router-dom";
import Popup from "../model/model.pre";

function CreateTemp() {
  const history = useHistory();
  const [PreviewFlag, setFlag] = useState(false);
  const [tempName, setName] = useState("");
  const [inTextBoxes, setFields] = useState([]);
  const [dropDowns, setDrop] = useState([]);

  const submitToSave = () => {

    if(tempName){const array = {
      id: Date(),
      name: tempName,
      textField: inTextBoxes,
      dropFields: dropDowns,
    };
    const array2 = JSON.parse(localStorage.getItem("fields")) || [];
    localStorage.setItem("fields", JSON.stringify([...array2, array]));
    history.push("/");}
  };
  const handlePreviewToOpen = () => {
    if (tempName) {
      setFlag(true);
    }
  };
  const handlePreviewToClose = () => {
    setFlag(false);
  };
  const handleClickTaxtBox = () => {
    setFields((prev) => [
      ...prev,
      {
        id: Date(),
        label: "label",
        placeholder: "placeholder",
        isRequired: false,
      },
    ]);
  };
  const handleClickDropBox = () => {
    setDrop((prev) => [
      ...prev,
      {
        id: Date(),
        label: "label",
        options: [],
        isRequired: false,
      },
    ]);
  };
  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  return (
    <React.Fragment>
      <div className="cerate-template-div-form">
        <div className="toolBox">
          <h1>Tool Box</h1>
          <ul>
            <li onClick={handleClickTaxtBox}>Input Text</li>
            <li onClick={handleClickDropBox}>Drop Down</li>
          </ul>
        </div>

        <div className="tempForm" onSubmit={handlePreviewToOpen}>
          <label>
            <span>Template Name:</span>
            <br />
            <input
              onChange={handleNameChange}
              type="text"
              placeholder="Enter Template form name..."
              name="templateName"
              required
            />
          </label>
          <div>
            {inTextBoxes.map((item) => {
              return (
                <div key={item.id}>
                  <InputText
                    data={item}
                    handleChangeCheck={(e) => {
                      item.isRequired = e.target.value;
                    }}
                    handleChangeLabel={(e) => {
                      item.label = e.target.value;
                    }}
                    handleChangePlaceHolder={(e) => {
                      item.placeholder = e.target.value;
                    }}
                    handleCloseText={(e) => {
                      setFields(
                        inTextBoxes.filter((Item) => Item.id !== item.id)
                      );
                    }}
                  />
                </div>
              );
            })}
            {dropDowns.map((item) => {
              return (
                <div key={item.id}>
                  <DropDown
                    data={item}
                    comData={dropDowns}
                    setDrops={setDrop}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <Foorter
        handlePreview={handlePreviewToOpen}
        handleSubmit={submitToSave}
      />
      <Popup
        tempName={tempName}
        inTextBoxes={inTextBoxes}
        dropDowns={dropDowns}
        PreviewFlag={PreviewFlag}
        handlePreviewToOpen={handlePreviewToOpen}
        handlePreviewToClose={handlePreviewToClose}
      />
    </React.Fragment>
  );
}
export default CreateTemp;
