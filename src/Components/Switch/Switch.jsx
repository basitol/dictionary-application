import React from "react";
import "./Switch.scss";

const SwitchToggle = ({ checked, onChange }) => {
  return (
    <div>
      <div className="toggleWrapper">
        <input
          type="checkbox"
          className="dn"
          id="dn"
          onChange={onChange}
          checked={checked}
        />
        <label htmlFor="dn" className="toggle">
          <span className="toggle__handler">
            <span className="crater crater--1"></span>
            <span className="crater crater--2"></span>
            <span className="crater crater--3"></span>
          </span>
          <span className="star star--1"></span>
          <span className="star star--2"></span>
          <span className="star star--3"></span>
          <span className="star star--4"></span>
          <span className="star star--5"></span>
          <span className="star star--6"></span>
        </label>
      </div>
    </div>
  );
};

export default SwitchToggle;
