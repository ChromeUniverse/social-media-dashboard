import React, { useState } from "react";
import data from "./data.json";

// components
import Header from "./components/Header";
import CardPrimary from "./components/CardPrimary";
import CardSecondary from "./components/CardSecondary";

// stylesheets
import './css/lightMode.css'
import './css/darkMode.css'

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const mode = darkMode ? 'dark' : 'light';

  document.body.style.backgroundColor = darkMode
    ? "hsl(230, 17%, 14%)"
    : "hsl(0, 0%, 100%)";

  function toggleDarkMode() {
    setDarkMode((oldMode) => !oldMode);
  }

  return (
    <>
      <div className={`bg ${mode}-bg`}></div>
      <main className="main">
        <Header
          mode={mode}
          totalFollowers={data.total_followers}
          darkMode={darkMode}
          toggleDarkMode={toggleDarkMode}
        />
        <div className="card-primary-container">
          {data.primary.map((entry, index) => (
            <CardPrimary
              key={`card-primary-${index}`}
              mode={mode}
              platform={entry.platform}
              handle={entry.handle}
              quantity={entry.quantity}
              type={entry.type}
              deltaType={entry.deltaType}
              delta={entry.delta}
            />
          ))}
        </div>

        <h3 className={`main-overview-title ${mode}-main-overview-title`}>Overview - Today</h3>

        <div className="card-secondary-container">
          {data.secondary.map((entry, index) => (
            <CardSecondary
              mode={mode}
              key={`card-secondary-${index}`}
              type={entry.type}
              platform={entry.platform}
              quantity={entry.quantity}
              deltaType={entry.deltaType}
              delta={entry.delta}
            />
          ))}
        </div>
      </main>
    </>
  );
}

export default App;
