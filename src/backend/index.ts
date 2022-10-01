import {API_HOST} from '../consts';
import {RSVP, Guest} from '../types';

export const getRSVPs = async (): Promise<RSVP[]> => {
  let RSVPs: RSVP[] = [];
  try {
    const response = await fetch(`${API_HOST}/api/rsvp`);
    if (response.ok) {
      RSVPs = (await response.json()) as RSVP[];
    }
  } catch (err) {
    console.error(err);
  }
  return RSVPs;
};

export const postRSVP = async (rsvp: RSVP): Promise<RSVP | null> => {
  try {
    const response = await fetch(`${API_HOST}/api/rsvp`, {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      method: 'POST',
      body: JSON.stringify(rsvp),
    });
    if (response.ok) {
      return (await response.json()) as RSVP;
    }
  } catch (err) {
    console.error(err);
  }
  return null;
};

export const getGuest = async (email: string): Promise<Guest | null> => {
  try {
    const response = await fetch(`${API_HOST}/api/guest?email=${email}`);
    if (response.ok) {
      return (await response.json()) as Guest;
    }
  } catch (err) {
    console.error(err);
  }
  return null;
};
