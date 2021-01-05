import React, { useContext } from "react";
import "./peopleFilterControls.css";

const PeopleFilterControls = props => {

  const handleChange = (e, type, value) => {
    e.preventDefault();
    props.onUserInput(type, value);
  };
  const handleTextChange = e => {
    handleChange(e, "name", e.target.value);
  };

  return (
    <div id="filterdiv" className="row">
      <div className="col-md-12">
        <h4>
          <span>Filter By Name:</span>
          <input
            type="text"
            placeholder="Title Search"
            onChange={handleTextChange}
          />
        </h4>
      </div>
    </div>
  );
};

export default PeopleFilterControls;