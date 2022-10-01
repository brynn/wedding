import React, {useState, useEffect} from 'react';
import {Card} from '@mui/material';
import './styles.css';

import {getRSVPs} from '../backend';
import {Guest, RSVP} from '../types';
import RSVPForm from './RSVPForm';
import EmailForm from './EmailForm';

const App: React.FC = () => {
  const [RSVPs, setRSVPs] = useState<RSVP[]>([]);
  const [guest, setGuest] = useState<Guest>();

  useEffect(() => {
    const fetchRSVPs = async () => {
      setRSVPs(await getRSVPs());
    };
    fetchRSVPs();
  }, []);

  console.log('RSVPs: ', RSVPs);
  console.log('guest: ', guest);

  return (
    <div className="App">
      <div className="photo">
        <img src="/img/ab.jpg" alt="Andrew &amp; Brynn" />
      </div>
      <div className="content">
        <div className="intro section">
          <ul className="nav">
            <li>
              <a href="#prelude">Prelude</a>
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
        <div className="story section" id="prelude">
          <p>Prelude</p>
        </div>
        <div className="details section" id="details">
          <p>
            Schedule <span className="amp">&amp;</span> Details
          </p>
        </div>
        <div className="travel section" id="travel">
          <p>
            Travel <span className="amp">&amp;</span> Lodging
          </p>
        </div>
        <div className="rsvp section" id="rsvp">
          <p>RSVP</p>
          <Card style={{display: 'flex', flexDirection: 'column', margin: '5vh', padding: '5vh'}}>
            {guest ? (
              <RSVPForm setRSVPs={setRSVPs} RSVPs={RSVPs} />
            ) : (
              <EmailForm setGuest={setGuest} />
            )}
          </Card>
        </div>
      </div>
    </div>
  );
};

export default App;
