import React from "react";
import Modal from "react-modal";
import "./style.css";
function Popup({
  tempName = [],
  inTextBoxes = [],
  dropDowns = [],
  PreviewFlag = () => {},
  handlePreviewToOpen = () => {},
  handlePreviewToClose = () => {},
}) {
  return (
    <Modal
      isOpen={PreviewFlag}
      onRequestClose={() => handlePreviewToOpen(false)}
      ariaHideApp={false}
    >
      <button onClick={handlePreviewToClose} className="Xbtn">
        X
      </button>
      <div>
        <h1>{tempName}</h1>
        <form onSubmit={handlePreviewToClose} className="preview-form-div">
          {inTextBoxes.map((item) => {
            return (
              <label className="label">
                {item.label}
                <br />
                <input
                  className="input"
                  type="text"
                  placeholder={item.placeholder}
                  required={item.isRequired}
                ></input>
              </label>
            );
          })}
          {dropDowns.map((item) => {
            return (
              <label className="label">
                {item.label}
                <br />
                <select
                  className="selectDrop"
                  placeholder={"------" + item.label + "------"}
                  required
                >
                  <option>---------{item.label}---------</option>
                  {item.options.map((item2) => {
                    return <option>{item2.Option}</option>;
                  })}
                </select>
              </label>
            );
          })}
          <div className="submitDiv">
            <button className="SUBMIT" type="submit">
              SUBMIT
            </button>
          </div>
        </form>
      </div>
    </Modal>
  );
}

export default Popup;
