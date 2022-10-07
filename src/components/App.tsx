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
import RestaurantOutlinedIcon from '@mui/icons-material/RestaurantOutlined';
import SportsBarOutlinedIcon from '@mui/icons-material/SportsBarOutlined';
import BakeryDiningOutlinedIcon from '@mui/icons-material/BakeryDiningOutlined';
import CookieOutlinedIcon from '@mui/icons-material/CookieOutlined';
import LocalBarOutlinedIcon from '@mui/icons-material/LocalBarOutlined';
import ColorLensOutlinedIcon from '@mui/icons-material/ColorLensOutlined';
import './styles.css';

import {Guest} from '../types';
import RSVPForm from './RSVPForm';
import EmailForm from './EmailForm';
import Section from './Section';
import Item from './Item';

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

  // TODO: add loading bar
  // TODO: add link to Migis map
  // TODO: icon map
  // TODO: content map (?)
  // TODO: add link to registry

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
              <a href="#schedule">
                Schedule <span className="amp">&amp;</span> Details
              </a>
            </li>
            <li>
              <a href="#travel">
                Lodging <span className="amp">&amp;</span> Travel
              </a>
            </li>
            <li>
              <a href="#things">Things to Do</a>
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
        <Section id="prelude">
          <h2>Prelude</h2>
        </Section>
        <Section id="schedule">
          <h2>
            Schedule <span className="amp">&amp;</span> Details
          </h2>

          <Item
            title="Lodge Guest Check-In"
            icon={<KeyOutlinedIcon />}
            description="friday, june second, 4pm"
            subtitle="Migis Lodge"
            body={
              <>
                {' '}
                For guests staying at Migis, check-in is at 4 PM, but you're free to arrive at the
                property and hang out with us starting at noon. Enjoy all the resort has to offer:
                kayaks, canoes, paddle boards, tennis, trails, shuffleboard, frisbee golf,{' '}
                <span className="amp">&amp;</span> more!
              </>
            }
          />
          <Item
            title={
              <>
                Welcome Party <span className="amp">&amp;</span> Bonfire
              </>
            }
            icon={<LocalFireDepartmentOutlinedIcon />}
            description="friday, june second, 6–11pm"
            subtitle="Cookout Point"
            body={
              <>
                For guests staying at Migis, dinner will be provided at the cookout point. Dress
                code is sport coat or button down for men <span className="amp">&amp;</span>{' '}
                sundresses for women.
              </>
            }
          />

          <Divider />

          <Item
            title="Breakfast"
            icon={<EggAltOutlinedIcon />}
            description="saturday, june third, 8–10am"
            subtitle="Cookout Point"
            body="For guests staying at Migis, breakfast will be provided at the cookout point."
          />
          <Item
            title="Enjoy the Lodge"
            icon={<KayakingOutlinedIcon />}
            description="saturday, june third, 11am onwards"
            subtitle="Main Lodge"
            body={
              <>
                All guests are welcome to spend the day enjoying the lake{' '}
                <span className="amp">&amp;</span> all that Migis Lodge has to offer.
              </>
            }
          />
          <Item
            title="Lunch"
            icon={<LunchDiningOutlinedIcon />}
            description="saturday, june third, 12–1pm"
            subtitle="Main Lodge"
            body={
              <>
                For guests staying at Migis, boxed lunches with assorted sandwiches, chips, cookies,{' '}
                <span className="amp">&amp;</span> fruit will be available in the main lodge.
              </>
            }
          />
          <Item
            title={
              <>
                Ceremony <span className="amp">&amp;</span> Cocktail Hour
              </>
            }
            icon={<CelebrationOutlinedIcon />}
            description="saturday, june third, 5–6:30pm"
            subtitle="The Lawn"
            body={
              <>
                Dress code is suit and tie for men <span className="amp">&amp;</span> cocktail
                dresses for women. Our ceremony will take place on grass, so plan your shoes
                accordingly!
              </>
            }
          />
          <Item
            title="Reception"
            icon={<CakeOutlinedIcon />}
            description="saturday, june third, 6:30pm–10pm"
            subtitle="Main Lodge"
            body={
              <>
                Dinner <span className="amp">&amp;</span> dancing will take place at the main lodge.
              </>
            }
          />
          <Item
            title="After Party"
            icon={<NightlifeOutlinedIcon />}
            description="saturday, june third, 10pm onwards"
            subtitle="Boulders"
            body="Keep the party going!"
          />
          <Divider />
          <Item
            title="Farewell Brunch"
            icon={<BrunchDiningOutlinedIcon />}
            description="sunday, june fourth, 9–11am"
            subtitle="Cookout Point"
            body="For guests staying at Migis, brunch will be provided at the cookout point."
          />
        </Section>
        <Section id="travel">
          <h2>
            Lodging <span className="amp">&amp;</span> Travel
          </h2>
          <Item
            title={
              <a href="https://www.migis.com/" rel="noreferrer" target="_blank">
                Migis Lodge at Sebago Lake
              </a>
            }
            icon={<HotelOutlinedIcon />}
            description="30 Migis Lodge Road, South Casco"
            subtitle="(207) 655-4524"
            body="We will work with Migis to assign the cottages and lodge rooms, making sure to
              place you close to your friends and favorite people, and you will be informed of
              your cottage upon your check-in."
          />
          <Item
            title={
              <a
                href="https://www.wyndhamhotels.com/microtel/windham-maine/microtel-inn-and-suites-by-wyndham-windham/overview"
                rel="noreferrer"
                target="_blank"
              >
                Microtel Inn <span className="amp">&amp;</span> Suites by Wyndham
              </a>
            }
            icon={<HotelOutlinedIcon />}
            description="965 Roosevelt Trail, Windham"
            subtitle="(207) 893-8870"
            body="For those that would prefer to stay offsite, the Microtel is a 10 minute drive
              from Migis. The lodge and its amenities will still be available to you throughout
              the weekend. There will not be transportation provided from the Microtel."
          />

          <Divider />

          <Item
            title="PWM"
            icon={<FlightTakeoffOutlinedIcon />}
            description="Portland International Jetport"
            body="Migis Lodge is about 45 minutes driving from Portland International Jetport."
          />
          <Item
            title="BOS"
            icon={<FlightTakeoffOutlinedIcon />}
            description="Boston Logan International Airport"
            body="Migis Lodge is about 2.5 hours driving from Boston Logan International Airport."
          />
          <Item
            title="Driving From NYC"
            icon={<DirectionsCarFilledOutlinedIcon />}
            body="Depending on traffic, it takes between 5–7 hours to drive to Migis from the New
                  York City area."
          />
        </Section>

        <Section id="things">
          <h2>Things to Do</h2>
          <Item
            title={
              <a href="http://www.sebagobrewing.com/" rel="noreferrer" target="_blank">
                Sebago Brewing Company
              </a>
            }
            icon={<SportsBarOutlinedIcon />}
            description="616 Main Street, Gorham"
            body="Great local beers; there are a few locations, but this one is closest to the venue. Co-founded and owned by the bride's stepdad's cousin!"
          />
          <Item
            title={
              <a href="https://mkkitchen.net/" rel="noreferrer" target="_blank">
                MK Kitchen
              </a>
            }
            icon={<RestaurantOutlinedIcon />}
            description="2 School Street, Gorham"
            body="Delicious food in nearby Gorham, which is a bit closer to Migis than downtown Portland."
          />
          <Item
            title={
              <a href="https://www.tandemcoffee.com/pages/bakery/" rel="noreferrer" target="_blank">
                Tandem Coffee <span className="amp">&amp;</span> Bakery
              </a>
            }
            icon={<BakeryDiningOutlinedIcon />}
            description="742 Congress Street, Portland"
            body="Excellent coffee and even better breakfast sandwiches!"
          />
          <Item
            title={
              <a href="https://www.theholydonut.com/" rel="noreferrer" target="_blank">
                The Holy Donut
              </a>
            }
            icon={<CookieOutlinedIcon />}
            description="7 Exchange Street, Portland"
            body="Delicious craft donuts with all-natural ingredients."
          />
          <Item
            title={
              <a href="https://www.duckfat.com/" rel="noreferrer" target="_blank">
                Duckfat
              </a>
            }
            icon={<RestaurantOutlinedIcon />}
            description="43 Middle Street, Portland"
            body="The fries alone are worth the (inevitably) long wait!"
          />
          <Item
            title={
              <a href="https://www.blythandburrows.com/" rel="noreferrer" target="_blank">
                Blyth <span className="amp">&amp;</span> Burrows
              </a>
            }
            icon={<LocalBarOutlinedIcon />}
            description="26 Exchange Street, Portland"
            body="Top-tier cocktails and great food too."
          />
          <Item
            title={
              <a href="https://www.portlandmuseum.org/" rel="noreferrer" target="_blank">
                Portland Museum of Art
              </a>
            }
            icon={<ColorLensOutlinedIcon />}
            description="7 Congress Square, Portland"
            body="Fantastic collection and the perfect size for a short visit."
          />
        </Section>

        <Section id="rsvp">
          <h2>RSVP</h2>
          <Card>{cardContent}</Card>
        </Section>
      </div>
    </div>
  );
};

export default App;
