import React from "react";

const DarkModeSwitch = ({ isDarkMode, toggleDarkMode }) => {
  return (
    <div className="flex items-center justify-center">
      <label htmlFor="darkModeToggle" className="switch toggle-label">
        <input
          type="checkbox"
          id="darkModeToggle"
          className="toggle-checkbox"
          checked={isDarkMode}
          onChange={toggleDarkMode}
        />
        <span className="slider toggle-switch"></span>
      </label>
    </div>
  );
};

export default DarkModeSwitch;
