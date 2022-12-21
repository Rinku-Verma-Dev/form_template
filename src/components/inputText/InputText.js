import React from "react";
import "./style.css";

function InputText({
  data = [],
  handleChangeCheck = () => {},
  handleChangeLabel = () => {},
  handleChangePlaceHolder = () => {},
  handleCloseText = () => {},
}) {
  return (
    <React.Fragment>
      <div className="input-text-field-form">
        <button onClick={handleCloseText} className="close">
          X
        </button>
        <label>
          <span>Field Label:</span>
          <br />
          <input
            onChange={handleChangeLabel}
            placeholder="Enter Place Holder.."
            type="text"
            name="label"
            required
          />
        </label>
        <label>
          <span>Field PlaceHolder:</span>
          <br />
          <input
            onChange={handleChangePlaceHolder}
            placeholder="Enter Place Holder.."
            type="text"
            name="paceholder"
            required
          />
        </label>
        <label>
          <span className="required">
            Required:
            <input
              onChange={handleChangeCheck}
              type="checkbox"
              name="required"
            />
          </span>
        </label>
      </div>
    </React.Fragment>
  );
}

export default InputText;
