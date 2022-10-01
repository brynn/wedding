import React, {useState, useEffect} from 'react';

import './App.css';

import {getRSVPs} from './backend';
import {RSVP} from './types';

const App: React.FC = () => {
  const [RSVPs, setRSVPs] = useState<RSVP[]>([]);
  useEffect(() => {
    const fetchRSVPs = async () => {
      setRSVPs(await getRSVPs());
    }
    fetchRSVPs();
  }, []);

  return (
    <div className="App">
      <div className="photo">
        <img src="/img/ab.jpg" alt="Andrew &amp; Brynn" />
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
            <img src="/img/logo.png" alt="Andrew &amp; Brynn" className="logo" />
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
};

export default App;
