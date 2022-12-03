import {API_HOST} from '../consts';
import {RSVP, Guest, RSVPs} from '../types';

export const getRSVP = async (email: string): Promise<RSVP | null> => {
  try {
    const response = await fetch(`${API_HOST}/api/rsvp?email=${email}`, {
      headers: {'API-Key': `${process.env.REACT_APP_API_KEY}`},
      method: 'GET',
    });
    if (response.ok) {
      return (await response.json()) as RSVP;
    }
  } catch (err) {
    console.error(err);
  }
  return null;
};

// TODO: make this just sendRSVP, only POST
export const sendOrUpdateRSVP = async (
  rsvps: RSVPs,
  updating: boolean,
): Promise<RSVPs | string | null> => {
  try {
    const response = await fetch(`${API_HOST}/api/rsvp`, {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        'API-Key': `${process.env.REACT_APP_API_KEY}`,
      },
      method: updating ? 'PUT' : 'POST',
      body: JSON.stringify(rsvps),
    });
    if (response.ok) {
      return (await response.json()) as RSVPs;
    } else {
      // TODO: figure out how to decode the error response
      return Promise.resolve('Name is required');
    }
  } catch (err) {
    console.error(err);
  }
  return null;
};

export const getGuest = async (email: string): Promise<Guest | string | null> => {
  try {
    const response = await fetch(`${API_HOST}/api/guest?email=${email}`, {
      headers: {'API-Key': `${process.env.REACT_APP_API_KEY}`},
      method: 'GET',
    });
    if (response.ok) {
      return (await response.json()) as Guest;
    } else {
      return Promise.resolve("we couldn't confirm that email, sorry!");
    }
  } catch (err) {
    console.error(err);
  }
  return null;
};
