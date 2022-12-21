import React, { useState } from "react";
import "./style.css";
function DropDown({ data = [], comData = [], setDrops }) {
  const [options, setOptions] = useState([]);
  const handleChangeOption = (e) => {
    setOptions(
      options.map((option) =>
        option.id === e.target.id
          ? { id: option.id, Option: e.target.value }
          : option
      )
    );
  };
  const handleAddOptions = () => {
    setOptions((prev) => [...prev, { id: Date(), Option: "" }]);
  };
  const handleCloseOptions = (e) => {
    setOptions(options.filter((item) => item.id !== e.target.value));
  };
  const handleChangeInput = (e) => {
    data.label = e.target.value;
    data.options = options;
    setDrops(comData);
  };
  const handleCheckRequired = (e) => {
    data.isRequired = e.target.value;
    setDrops(comData);
  };
  const hadleSave = () => {
    data.options = options;
    setDrops(comData);
    console.log(comData);
  };
  const handleCloseDrop = (e) => {
    setDrops(comData.filter((Item) => Item.id !== e.target.id));
  };
  return (
    <div className="dropDown-field-form">
      <button id={data.id} onClick={handleCloseDrop} className="close">
        X
      </button>
      <label>
        <span>Field Label:</span>
        <br />
        <input
          placeholder="Enter Field Name.."
          type="text"
          name="label"
          onChange={handleChangeInput}
          required
        />
        <br />
        <br />
        <span>
          {" "}
          Add Option:{" "}
          <button className="btn" onClick={handleAddOptions}>
            +
          </button>{" "}
        </span>
      </label>
      <label>
        {options.map((item) => {
          return (
            <div key={item.id}>
              <span>Option: </span>
              <input
                onChange={handleChangeOption}
                placeholder="Enter Option Name.."
                type="text"
                name="option"
                id={item.id}
                required
              />
              <button
                value={item.id}
                className="btn"
                onClick={handleCloseOptions}
              >
                x
              </button>
            </div>
          );
        })}
      </label>
      <label>
        <span className="required">
          Required:
          <input
            onChange={handleCheckRequired}
            type="checkbox"
            name="required"
          />
        </span>
        <button onClick={hadleSave} className="save">
          Save
        </button>
      </label>
    </div>
  );
}

export default DropDown;
