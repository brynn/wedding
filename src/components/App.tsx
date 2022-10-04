import React, {useState, useEffect} from 'react';
import {Card, Button} from '@mui/material';
import './styles.css';

import {Guest} from '../types';
import RSVPForm from './RSVPForm';
import EmailForm from './EmailForm';

const App: React.FC = () => {
  const [guest, setGuest] = useState<Guest>();
  const [sent, setSent] = useState<boolean>(guest?.rsvp_sent || false);
  const [response, setResponse] = useState<boolean>(guest?.response || false);

  useEffect(() => {
    if (guest && guest.rsvp_sent) {
      setSent(true);
      setResponse(guest.response);
    }
  }, [guest]);

  // TODO: add emojis
  // TODO: add loading bar

  let cardContent = (
    <p className="thanks">
      {response
        ? `thanks for RSVPing, we can't wait to celebrate with you!`
        : `thanks for RSVPing, you'll be missed!`}
    </p>
  );
  if (!sent) {
    cardContent = guest ? (
      <RSVPForm guest={guest} setSent={setSent} setResponse={setResponse} />
    ) : (
      <EmailForm setGuest={setGuest} />
    );
  }

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
          <div className="intro-content">
            <img src="/img/logo.png" alt="Andrew &amp; Brynn" className="logo" />
            <p className="location">
              Migis Lodge <br />
              South Casco, Maine
            </p>
            <p className="date">june third, two thousand &amp; twenty-three</p>
            <Button variant="contained" size="large" href="#rsvp" color="secondary">
              RSVP
            </Button>
          </div>
        </div>
        <div className="story section" id="prelude">
          <h2>Prelude</h2>
        </div>
        <div className="details section" id="details">
          <h2>
            Schedule <span className="amp">&amp;</span> Details
          </h2>
        </div>
        <div className="travel section" id="travel">
          <h2>
            Travel <span className="amp">&amp;</span> Lodging
          </h2>
        </div>
        <div className="rsvp section" id="rsvp">
          <h2>RSVP</h2>
          <Card>{cardContent}</Card>
        </div>
      </div>
    </div>
  );
};

export default App;
