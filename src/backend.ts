import {RSVP} from './types';

export const getRSVPs = async () => {
  try {
    const response = await fetch('wedding-be/api/rsvp');
    if (response.ok) {
      const RSVPs: RSVP[] = await response.json();
      console.log('RSVPs: ', RSVPs);
    }
  } catch (err) {
    console.error(err);
  }
};

export const postRSVP = async (rsvp: RSVP) => {
  try {
    const response = await fetch('wedding-be/api/rsvp', {
      method: 'POST',
      body: JSON.stringify(rsvp),
    });
    if (response.ok) {
      const result = await response.json();
      console.log('POST result: ', result);
    }
  } catch (err) {
    console.error(err);
  }
};
