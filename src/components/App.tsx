import React, {useState} from 'react';

import {Button, Divider} from '@mui/material';
import './styles.css';

import {Guest} from '../types';
import RSVPForms from './RSVPForms';
import EmailForm from './EmailForm';
import ThanksForm from './ThanksForm';
import Section from './Section';
import Item from './Item';
import Gallery from './Gallery';
import {ICON_MAP} from '../icons';

const App: React.FC = () => {
  const [guest, setGuest] = useState<Guest>(null);
  const [updatingRSVP, setUpdatingRSVP] = useState<boolean>(false);

  // TODO: add loading bar

  let rsvpContent = <EmailForm setGuest={setGuest} />;
  if (guest && (!guest.rsvp || updatingRSVP)) {
    // Show the RSVP form if we've loaded a guest that hasn't sent theirs yet
    // Or if the guest has but clicked the "Update RSVP button"
    rsvpContent = <RSVPForms guest={guest} setGuest={setGuest} setUpdatingRSVP={setUpdatingRSVP} />;
  } else if (guest && guest.rsvp) {
    rsvpContent = <ThanksForm response={guest.rsvp.response} setUpdatingRSVP={setUpdatingRSVP} />;
  }

  return (
    <div className="App">
      <Gallery />
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
              <a href="#rsvp">
                RSVP <span className="amp">&amp;</span> Registry
              </a>
            </li>
          </ul>
          <div className="intro-content">
            <img src="/img/logo.png" alt="Andrew &amp; Brynn" className="logo" />
            <p className="location">
              Migis Lodge <br />
              South Casco, Maine
            </p>
            <p className="serif date">june third, two thousand &amp; twenty-three</p>
            <div className="intro-buttons">
              <Button variant="contained" size="large" href="#rsvp" color="secondary">
                RSVP
                <span className="amp" style={{margin: '0 5px'}}>
                  &amp;
                </span>
                Book Lodging
              </Button>
              <Button
                variant="contained"
                size="large"
                href="https://www.zola.com/registry/brynnandandrew"
                target="_blank"
                color="secondary"
              >
                Registry
              </Button>
            </div>
          </div>
        </div>
        <Section id="prelude">
          <h2>Prelude</h2>
          <Item
            title={
              <>
                Andrew <span className="amp">&amp;</span> Brynn Meet
              </>
            }
            icon={ICON_MAP.satellite}
            description="august 2018"
            subtitle="Dreamstate, San Francisco"
            body={
              <>
                <p>
                  Before Andrew <span className="amp">&amp;</span> Brynn met, they were orbiting
                  each other like singing satellites.
                </p>
                <p>
                  While at Dreamstate, a trance festival in San Francisco, they found each other at
                  a mutual friend's afterparty, where they immediately began arguing about a certain
                  infamous "trance" DJ. As most of you may know, these two are quite competitive and
                  had to eventually agree to disagree as the night wrapped.
                </p>
              </>
            }
          />
          <Item
            title="Things escalate at Esscalation"
            icon={ICON_MAP.music}
            description="june 2019"
            subtitle="The Melrose Ballroom, NYC"
            body={
              <>
                <p>
                  Flashing forward to June of 2019, Andrew found himself heading to New York City
                  for Esscalation, another trance event. Not knowing anyone in NYC, Andrew reached
                  out to the only person on his friends list who lived there, Brynn Shepherd.
                </p>
                <p>
                  Upon receiving a Facebook message from Andrew, Brynn didn't remember who he was
                  and had to ask another mutual friend to remind her that they met after Dreamstate
                  the previous summer. It's safe to say that after the weekend was over, she would
                  never forget him again.
                </p>
              </>
            }
          />
          <Item
            title="A Lumi Dreamland"
            icon={ICON_MAP.beach}
            description="june 2019"
            subtitle="Luminosity Beach Festival, Holland"
            body={
              <>
                <p>
                  It just so happened that Andrew <span className="amp">&amp;</span> Brynn had
                  independently made plans to attend Luminosity Beach Festival in the Netherlands, a
                  mere two weeks after their magical weekend in NYC!
                </p>
                <p>
                  This festival turned into five days of bliss for both; you could even say it lit a
                  fire in their souls.
                </p>
              </>
            }
          />
          <Item
            title="Long Distance"
            icon={ICON_MAP.phone}
            description="june 2019 — august 2020"
            subtitle={
              <>
                Austin, Texas <span className="amp">&amp;</span> the Financial District, NYC
              </>
            }
            body={
              <>
                <p>
                  After getting home from Lumi, Andrew <span className="amp">&amp;</span> Brynn
                  started dating long distance. Every day before they went to bed, they FaceTimed
                  each other. Brynn was shocked to discover that she looked forward to these calls,
                  despite never being a fan of phones.
                </p>
                <p>
                  While Brynn enjoyed getting to know Austin, they both knew she was never going to
                  move to Texas. Feeling inspired by dreams that guided him, Andrew realized he'd
                  find a way to move to NYC.
                </p>
              </>
            }
          />
          <Item
            title="Covid Times"
            icon={ICON_MAP.mask}
            description="march 2020 — september 2021"
            subtitle="Brooklyn, NYC"
            body={
              <>
                <p>
                  While generally NOT the best of times, the pandemic had a silver lining for Andrew{' '}
                  <span className="amp">&amp;</span> Brynn. Andrew's job went fully remote, and in
                  August of 2020 he made the big move to the big city!
                </p>
                <p>
                  After renting an apartment with a friend in Long Island City for nearly a year,
                  Andrew moved in with Brynn in July of 2021, after she upgraded to a (much needed)
                  one-bedroom apartment in her building in Brooklyn. Despite the pandemic's many
                  hardships, they loved dating in the same city. Brynn also fell madly in love with
                  Andrew's cat, Leia, whom they flew from Texas to NYC in January of 2021.
                </p>
              </>
            }
          />
          <Item
            title={
              <>
                Andrew <span className="amp">&amp;</span> Brynn Get Engaged!
              </>
            }
            icon={ICON_MAP.sun}
            description="september sixth, 2021"
            subtitle="Avignon, France"
            body={
              <>
                <p>
                  Andrew <span className="amp">&amp;</span> Brynn had made plans to fly to Europe in
                  September of 2021, hilariously enough to attend a festival hosted by that certain
                  aforementioned "trance" DJ above. While the festival was cancelled last-minute due
                  to Covid's Delta era, they decided to go anyway, spending a weekend in Utrecht and
                  then flying to France for a three-day biking tour of Provence.
                </p>
                <p>
                  On their first day in France, they climbed the Pope's Castle during golden hour in
                  Avignon. It was there that Andrew got down on one knee and asked Brynn that most
                  important question. She said yes, and Andrew had never seen the sun shine
                  brighter!
                </p>
              </>
            }
          />
        </Section>
        <Section id="schedule">
          <h2>
            Schedule <span className="amp">&amp;</span> Details
          </h2>
          <Button
            variant="contained"
            size="small"
            href="https://migis.com/site/assets/files/1939/2022_season_rates_brochure.pdf"
            target="_blank"
            color="secondary"
          >
            View Migis Map
          </Button>

          <Item
            title="Lodge Guest Check-In"
            icon={ICON_MAP.key}
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
            icon={ICON_MAP.fire}
            description="friday, june second, 6pm–11pm"
            subtitle={
              <>
                Cookout Point <span className="amp">&amp;</span> Terrace
              </>
            }
            body={
              <>
                Dinner will be provided at the cookout point, followed by a bonfire on the terrace.
                Dress code is semi-formal.
              </>
            }
          />

          <Divider />

          <Item
            title="Breakfast"
            icon={ICON_MAP.egg}
            description="saturday, june third, 8–9:30am"
            subtitle="Cookout Point"
            body="For guests staying at Migis, breakfast will be provided at the cookout point."
          />
          <Item
            title="Enjoy the Lodge"
            icon={ICON_MAP.kayak}
            description="saturday, june third, 9:30am onwards"
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
            icon={ICON_MAP.lunch}
            description="saturday, june third, 12pm–1:30pm"
            subtitle="Main Lodge"
            body={
              <>
                Boxed lunches with assorted sandwiches, chips, cookies,{' '}
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
            icon={ICON_MAP.confetti}
            description="saturday, june third, 5–6:30pm"
            subtitle="Terrace"
            body={
              <>
                Dress code is formal attire, black tie optional. Weather permitting, our ceremony
                will take place on grass, so plan your shoes accordingly!
              </>
            }
          />
          <Item
            title="Reception"
            icon={ICON_MAP.cake}
            description="saturday, june third, 6:30pm–10:30pm"
            subtitle="Main Lodge"
            body={
              <>
                Dinner <span className="amp">&amp;</span> dancing will take place at the main lodge.
              </>
            }
          />
          <Item
            title="After Party"
            icon={ICON_MAP.afters}
            description="saturday, june third, 10:30pm onwards"
            subtitle="Boulders"
            body="Keep the party going! All bangers, all the time."
          />
          <Divider />
          <Item
            title="Farewell Brunch"
            icon={ICON_MAP.brunch}
            description="sunday, june fourth, 8:30–10am"
            subtitle="Cookout Point"
            body="Brunch will be provided at the cookout point."
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
            icon={ICON_MAP.hotel}
            description="30 Migis Lodge Road, South Casco"
            subtitle="(207) 655-4524"
            body={
              <>
                We will work with the venue to assign the cottages and lodge rooms, making sure to
                place you close to your friends and favorite people, and you will be informed of
                your cottage upon your check-in. The cottages are first come, first served, and you
                can reserve your place after you <a href="#rsvp">RSVP</a>. Rates are $163.83 per
                adult per night, or $175.26 per adult to stay Saturday night only. Important note!{' '}
                <strong>
                  Migis doesn't accept credit cards, so if you're staying at the venue please
                  remember to bring cash or check for payment upon departure.
                </strong>{' '}
                We will also be reminding everyone about this many times in advance of the wedding.
              </>
            }
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
            icon={ICON_MAP.hotel}
            description="965 Roosevelt Trail, Windham"
            subtitle="(207) 893-8870"
            body={
              <>
                For those that prefer to stay offsite, the Microtel is a 10 minute drive from Migis.
                The lodge and its amenities will still be available to you throughout the weekend.
                There will not be transportation provided from the Microtel. We have a hotel block
                of 15 rooms with discounted pricing; please call the hotel directly and say you are
                with the Shepherd/Keim wedding to reserve a room at the discounted rate of
                $298.32/night. This rate is not available if you book online and it is only
                available until April 19th.
              </>
            }
          />

          <Divider />

          <Item
            title="PWM"
            icon={ICON_MAP.flight}
            description="Portland International Jetport"
            body={
              <>
                Migis Lodge is about 45 minutes driving from Portland International Jetport. While
                it's possible to take Uber or Lyft from the airport to the venue, we recommend
                renting a car if you're planning to explore other parts of Maine. Also, please{' '}
                <a href="mailto:andrewandbrynn@gmail.com" target="_blank">
                  let us know
                </a>{' '}
                if you're planning to Uber back to the airport on Sunday, as it may be more
                convenient to arrange a car service.
              </>
            }
          />
          <Item
            title="BOS"
            icon={ICON_MAP.flight}
            description="Boston Logan International Airport"
            body="Migis Lodge is about 2.5 hours driving from Boston Logan International Airport."
          />
          <Item
            title="Driving From NYC"
            icon={ICON_MAP.car}
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
            icon={ICON_MAP.beer}
            description="616 Main Street, Gorham"
            body="Great local beers; there are a few locations, but this one is closest to the venue. Co-founded and owned by the bride's stepdad's cousin!"
          />
          <Item
            title={
              <a href="https://mkkitchen.net/" rel="noreferrer" target="_blank">
                MK Kitchen
              </a>
            }
            icon={ICON_MAP.restaurant}
            description="2 School Street, Gorham"
            body="Delicious food in nearby Gorham, which is a bit closer to Migis than downtown Portland."
          />
          <Item
            title={
              <a href="https://www.tandemcoffee.com/pages/bakery/" rel="noreferrer" target="_blank">
                Tandem Coffee <span className="amp">&amp;</span> Bakery
              </a>
            }
            icon={ICON_MAP.bakery}
            description="742 Congress Street, Portland"
            body="Excellent coffee and even better breakfast sandwiches!"
          />
          <Item
            title={
              <a href="https://www.theholydonut.com/" rel="noreferrer" target="_blank">
                The Holy Donut
              </a>
            }
            icon={ICON_MAP.cookie}
            description="7 Exchange Street, Portland"
            body="Delicious craft donuts with all-natural ingredients."
          />
          <Item
            title={
              <a href="https://www.duckfat.com/" rel="noreferrer" target="_blank">
                Duckfat
              </a>
            }
            icon={ICON_MAP.restaurant}
            description="43 Middle Street, Portland"
            body="The fries alone are worth the (inevitably) long wait!"
          />
          <Item
            title={
              <a href="https://www.blythandburrows.com/" rel="noreferrer" target="_blank">
                Blyth <span className="amp">&amp;</span> Burrows
              </a>
            }
            icon={ICON_MAP.cocktail}
            description="26 Exchange Street, Portland"
            body="Top-tier cocktails and great food too."
          />
          <Item
            title={
              <a href="https://www.portlandmuseum.org/" rel="noreferrer" target="_blank">
                Portland Museum of Art
              </a>
            }
            icon={ICON_MAP.art}
            description="7 Congress Square, Portland"
            body="Fantastic collection and the perfect size for a short visit."
          />
          <Item
            title={
              <a
                href="https://www.boothbayboattrips.com/cruises/puffin-scenic-cruise/"
                rel="noreferrer"
                target="_blank"
              >
                Audubon Puffin <span className="amp">&amp;</span> Scenic Cruise
              </a>
            }
            icon={ICON_MAP.puffin}
            description="42 Commercial Street, Boothbay Harbor"
            body="Need we say more?! Brynn did this cruise once and loved it even though it was super cloudy
            and she could barely see the puffins. About an hour and a half drive from Migis; if you are interested
            we recommending booking the cruise in advance on their website."
          />
          <Item
            title={
              <a href="https://www.nps.gov/acad/index.htm" rel="noreferrer" target="_blank">
                Acadia National Park
              </a>
            }
            icon={ICON_MAP.park}
            description="Bar Harbor"
            body="If you're making a longer trip out of our wedding weekend, we highly recommend
            driving up to Acadia National Park in Bar Harbor. The town itself is adorable, and 
            the park offers incredible hiking and views! It's about a three hour drive from Migis."
          />
        </Section>

        <Section id="rsvp">
          <h2>
            RSVP <span className="amp">&amp;</span> Registry
          </h2>
          {rsvpContent}
          <div className="registry">
            <Button
              variant="contained"
              size="large"
              href="https://www.zola.com/registry/brynnandandrew"
              target="_blank"
            >
              Registry
            </Button>
          </div>
        </Section>
      </div>
    </div>
  );
};

export default App;
