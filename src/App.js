import React from 'react';

import photo from './img/ab.jpg';
import logo from './img/logo.png';
import './App.css';

const testApi = async () => {
  const response = await fetch('wedding-be/api/rsvp');
  console.log('response: ', response);
};

const testApi2 = async () => {
  const response = await fetch('https://wedding-be.onrender.com/api/rsvp');
  console.log('response: ', response);
};

function App() {
  testApi();
  testApi2();
  return (
    <div className="App">
      <div className="photo">
        <img src={photo} alt="Andrew &amp; Brynn" />
      </div>
      <div className="content">
        <div className="intro section">
          <ul className="nav">
            <li>
              <a href="#story">Prelude</a>
            </li>
            <li>
              <a href="#details">
                Schedule <span className="amp">&amp;</span> Details
              </a>
            </li>
            <li>
              <a href="#travel">
                Travel <span className="amp">&amp;</span> Lodging
              </a>
            </li>
            <li>
              <a href="#rsvp">RSVP</a>
            </li>
          </ul>
          <div className="title">
            <img src={logo} alt="Andrew &amp; Brynn" className="logo" />
            <p className="location">
              Migis Lodge <br />
              South Casco, Maine
            </p>
            <p className="date">june third, two thousand &amp; twenty-three</p>
          </div>
        </div>
        <div className="story section">
          <p>Prelude</p>
        </div>
        <div className="details section">
          <p>
            Schedule <span className="amp">&amp;</span> Details
          </p>
        </div>
        <div className="travel section">
          <p>
            Travel <span className="amp">&amp;</span> Lodging
          </p>
        </div>
        <div className="rsvp section">
          <p>RSVP</p>
        </div>
      </div>
    </div>
  );
}

export default App;
