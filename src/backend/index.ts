import {RSVP} from '../types';

export const getRSVPs = async (): Promise<RSVP[]> => {
  let RSVPs: RSVP[] = [];
  try {
    const response = await fetch('http://localhost:3001/api/rsvp');
    if (response.ok) {
      RSVPs = (await response.json()) as RSVP[];
    }
  } catch (err) {
    console.error(err);
  }
  return RSVPs;
};

export const postRSVP = async (rsvp: RSVP) => {
  try {
    const response = await fetch('http://localhost:3001/api/rsvp', {
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
