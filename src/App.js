import "./App.css";
import ironhack from "./images/ironhack-logo.svg";
import menu from "./images/menu-top.svg";
import declarative from "./images/icon1.png";
import component from "./images/icon2.png";
import single from "./images/icon3.png";
import jsx from "./images/icon4.png";

function App() {
  return (
    <div className="main">
      <header className="header">
        <img className="ironhack" src={ironhack} alt="Ironhack logo" />
        <img className="menu" src={menu} alt="Menu icon" />
        <div className="text-container">
          <div className="text-header">
            <h1>Say hello to ReactJS</h1>
            <div className="text">
              <p>
                You will learn how to use the most popular frontend library, and
                become a super Ninja developer.
              </p>
            </div>
            <button type="submit">
              <strong>Awesome!</strong>
            </button>
          </div>
        </div>
      </header>

      <div className="strategies">
        <div className="item">
          <img src={declarative} alt="Wrench" />
          <h2>Declarative</h2>
          <p>React makes it painless to create interactive UIs.</p>
        </div>
        <div className="item">
          <img src={component} alt="Laptop" />
          <h2>Components</h2>
          <p>Build encapsulated components taht manage their state.</p>
        </div>
        <div className="item">
          <img src={single} alt="Desktop" />
          <h2>Single-Way</h2>
          <p>A set of immutable values are passed to the components.</p>
        </div>
        <div className="item">
          <img src={jsx} alt="JS syntax" />
          <h2>JSX</h2>
          <p>Statically-typed and designed to run on modern browsers.</p>
        </div>
      </div>
    </div>
  );
}

export default App;
