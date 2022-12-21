import React from "react";
import "./style.css";

function Foorter({ handlePreview = () => {}, handleSubmit = () => {} }) {
  return (
    <div className="footer">
      <button type="submit" onClick={handlePreview}>
        Preview
      </button>
      <button type="submit" onClick={handleSubmit}>
        Submit
      </button>
    </div>
  );
}

export default Foorter;
