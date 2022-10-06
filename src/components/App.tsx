import React, {useState, useEffect} from 'react';
import {Card, Button, Divider} from '@mui/material';
import KeyOutlinedIcon from '@mui/icons-material/KeyOutlined';
import LocalFireDepartmentOutlinedIcon from '@mui/icons-material/LocalFireDepartmentOutlined';
import EggAltOutlinedIcon from '@mui/icons-material/EggAltOutlined';
import KayakingOutlinedIcon from '@mui/icons-material/KayakingOutlined';
import LunchDiningOutlinedIcon from '@mui/icons-material/LunchDiningOutlined';
import CelebrationOutlinedIcon from '@mui/icons-material/CelebrationOutlined';
import CakeOutlinedIcon from '@mui/icons-material/CakeOutlined';
import NightlifeOutlinedIcon from '@mui/icons-material/NightlifeOutlined';
import BrunchDiningOutlinedIcon from '@mui/icons-material/BrunchDiningOutlined';
import HotelOutlinedIcon from '@mui/icons-material/HotelOutlined';
import FlightTakeoffOutlinedIcon from '@mui/icons-material/FlightTakeoffOutlined';
import DirectionsCarFilledOutlinedIcon from '@mui/icons-material/DirectionsCarFilledOutlined';
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
                Lodging <span className="amp">&amp;</span> Travel
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
            <p className="serif date">june third, two thousand &amp; twenty-three</p>
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
          <div className="copy">
            <div className="item">
              <KeyOutlinedIcon className="icon" />
              <div>
                <h3>
                  Lodge Guest Check-In
                  <span className="serif schedule-time">friday, june second, 4pm</span>
                </h3>
                <p className="subtitle">Migis Lodge</p>
                <p>
                  For guests staying at Migis, check-in is at 4 PM, but you're free to arrive at the
                  property and hang out with us starting at noon. Enjoy all the resort has to offer:
                  kayaks, canoes, paddle boards, tennis, trails, shuffleboard, frisbee golf,{' '}
                  <span className="amp">&amp;</span> more!
                </p>
              </div>
            </div>
            <div className="item">
              <LocalFireDepartmentOutlinedIcon className="icon" />
              <div>
                <h3>
                  Welcome Party <span className="amp">&amp;</span> Bonfire
                  <span className="serif schedule-time">friday, june second, 6—11pm</span>
                </h3>
                <p className="subtitle">Cookout Point</p>
                <p>
                  For guests staying at Migis, dinner will be provided at the cookout point. Dress
                  code is sport coat or button down for men <span className="amp">&amp;</span>{' '}
                  sundresses for women.
                </p>
              </div>
            </div>
            <Divider />
            <div className="item">
              <EggAltOutlinedIcon className="icon" />
              <div>
                <h3>
                  Breakfast
                  <span className="serif schedule-time">saturday, june third, 8—10am</span>
                </h3>
                <p className="subtitle">Cookout Point</p>
                <p>For guests staying at Migis, breakfast will be provided at the cookout point.</p>
              </div>
            </div>
            <div className="item">
              <KayakingOutlinedIcon className="icon" />
              <div>
                <h3>
                  Enjoy the Lodge
                  <span className="serif schedule-time">saturday, june third, 11am onwards</span>
                </h3>
                <p className="subtitle">Migis Lodge</p>
                <p>
                  All guests are welcome to spend the day enjoying the lake{' '}
                  <span className="amp">&amp;</span> all that Migis Lodge has to offer.
                </p>
              </div>
            </div>
            <div className="item">
              <LunchDiningOutlinedIcon className="icon" />
              <div>
                <h3>
                  Lunch
                  <span className="serif schedule-time">saturday, june third, 12—1pm</span>
                </h3>
                <p className="subtitle">Main Lodge</p>
                <p>
                  For guests staying at Migis, boxed lunches with assorted sandwiches, chips,
                  cookies, <span className="amp">&amp;</span> fruit will be available in the main
                  lodge.
                </p>
              </div>
            </div>
            <div className="item">
              <CelebrationOutlinedIcon className="icon" />
              <div>
                <h3>
                  Ceremony <span className="amp">&amp;</span> Cocktail Hour
                  <span className="serif schedule-time">saturday, june third, 5—6:30pm</span>
                </h3>
                <p className="subtitle">The Lawn</p>
                <p>
                  Dress code is suit and tie for men <span className="amp">&amp;</span> cocktail
                  dresses for women. Our ceremony will take place on grass, so plan your shoes
                  accordingly!
                </p>
              </div>
            </div>
            <div className="item">
              <CakeOutlinedIcon className="icon" />
              <div>
                <h3>
                  Reception
                  <span className="serif schedule-time">saturday, june third, 6:30pm—10pm</span>
                </h3>
                <p className="subtitle">Main Lodge</p>
                <p>
                  Dinner <span className="amp">&amp;</span> dancing will take place at the main
                  lodge.
                </p>
              </div>
            </div>
            <div className="item">
              <NightlifeOutlinedIcon className="icon" />
              <div>
                <h3>
                  After Party
                  <span className="serif schedule-time">saturday, june third, 10pm onwards</span>
                </h3>
                <p className="subtitle">Boulders</p>
                <p>Keep the party going at Boulders!</p>
              </div>
            </div>
            <Divider />
            <div className="item">
              <BrunchDiningOutlinedIcon className="icon" />
              <div>
                <h3>
                  Farewell Brunch
                  <span className="serif schedule-time">sunday, june fourth, 9—11am</span>
                </h3>
                <p className="subtitle">Cookout Point</p>
                <p>For guests staying at Migis, brunch will be provided at the cookout point.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="travel section" id="travel">
          <h2>
            Lodging <span className="amp">&amp;</span> Travel
          </h2>
          <div className="copy">
            <div className="item">
              <HotelOutlinedIcon className="icon" />
              <div>
                <h3>
                  Migis Lodge at Sebago Lake
                  <span className="serif schedule-time">
                    30 Migis Lodge Road, South Casco, Maine, 04077
                  </span>
                </h3>
                <p className="subtitle">(207) 655–4524</p>
                <p>
                  We will work with Migis to assign the cottages and lodge rooms, making sure to
                  place you close to your friends and favorite people, and you will be informed of
                  your cottage upon your check-in.
                </p>
              </div>
            </div>
            <div className="item">
              <HotelOutlinedIcon className="icon" />
              <div>
                <h3>
                  Microtel Inn <span className="amp">&amp;</span> Suites by Wyndham
                  <span className="serif schedule-time">
                    965 Roosevelt Trail, Wyndham, Maine, 04062
                  </span>
                </h3>
                <p className="subtitle">(207) 893–8870</p>
                <p>
                  For those that would prefer to stay offsite, the Microtel is a 10 minute drive
                  from Migis. The lodge and its amenities will still be available to you throughout
                  the weekend. There will not be transportation provided from the Microtel.
                </p>
              </div>
            </div>
            <Divider />
            <div className="item">
              <FlightTakeoffOutlinedIcon className="icon" />
              <div>
                <h3>
                  PWM <span className="serif schedule-time">portland international jetport</span>
                </h3>
                <p>Migis Lodge is about 45 minutes driving from Portland International Jetport.</p>
              </div>
            </div>
            <div className="item">
              <FlightTakeoffOutlinedIcon className="icon" />
              <div>
                <h3>
                  BOS{' '}
                  <span className="serif schedule-time">boston logan international airport</span>
                </h3>
                <p>
                  Migis Lodge is about 2.5 hours driving from Boston Logan International Airport.
                </p>
              </div>
            </div>
            <div className="item">
              <DirectionsCarFilledOutlinedIcon className="icon" />
              <div>
                <h3>Driving From NYC</h3>
                <p>
                  Depending on traffic, it takes between 5—7 hours to drive to Migis from the New
                  York City area.
                </p>
              </div>
            </div>
          </div>
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
