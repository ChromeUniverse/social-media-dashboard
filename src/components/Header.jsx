import React from "react";

// import '../darkMode.css'

function Header({ totalFollowers, mode, darkMode, toggleDarkMode }) {
  return (
    <header className="header">
      <div className="header-main">
        <h1 className={`header-title ${mode}-header-title`}>Social Media Dashboard</h1>
        <h2 className={`header-subtitle ${mode}-header-subtitle`}>Total Followers: {totalFollowers}</h2>
      </div>
      <hr className={`header-divider-mobile ${mode}-header-divider-mobile`} />
      <div className="header-toggle">
        <p className={`header-toggle-text ${mode}-header-toggle-text`}>Dark Mode</p>
        <label className="switch">
          <input
            className="switch-input"
            type="checkbox"
            value={darkMode}
            onChange={toggleDarkMode}
          />
          <span className="toggle-slider"></span>
        </label>
      </div>
    </header>
  );
}

export default Header;
