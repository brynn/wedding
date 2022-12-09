import React, {useState} from 'react';
import {Button} from '@mui/material';
import {getGuest, sendRSVP} from '../backend';
import {RSVP, Guest, RSVPs} from '../types';
import {DEFAULT_RSVP} from '../consts';
import RSVPForm from './RSVPForm';

interface Props {
  guest: Guest;
  setGuest: (g: Guest) => void;
  setUpdatingRSVP: (u: boolean) => void;
}

const RSVPForms: React.FC<Props> = ({guest, setGuest, setUpdatingRSVP}: Props) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>('');

  const [rsvps, setRSVPs] = useState<RSVPs>({
    guest_rsvp: {
      ...DEFAULT_RSVP,
      ...guest?.rsvp,
      guest_id: guest?.id,
      name: guest?.name,
      email: guest?.email,
    },
    plus_one_rsvp: guest.plus_one_allowed
      ? {
          ...DEFAULT_RSVP,
          ...guest?.plus_one?.rsvp,
          guest_id: guest?.plus_one?.id,
          name: guest?.plus_one?.name,
          email: guest?.plus_one?.email,
        }
      : null,
  });

  if (!guest) {
    return;
  }

  const setRSVP = (e: React.ChangeEvent, updatedRSVP: Partial<RSVP>, guestType: keyof RSVPs) => {
    e.preventDefault();
    setRSVPs({
      ...rsvps,
      [guestType]: {
        ...rsvps[guestType],
        ...updatedRSVP,
      },
    });
  };

  const submitRSVP = async (rsvps: RSVPs) => {
    try {
      setLoading(true);
      const response = await sendRSVP(rsvps);
      if ((response as RSVPs)?.guest_rsvp) {
        setRSVPs(response as RSVPs);

        // Fetch updated guest info from server
        setGuest((await getGuest((response as RSVPs).guest_rsvp.email)) as Guest);
        setUpdatingRSVP(false);
        setError(null);
      } else {
        setError(response as string);
      }
      setLoading(false);
    } catch (err) {
      // TODO: show server errors
      console.error(err);
      setLoading(false);
    }
  };

  const {guest_rsvp, plus_one_rsvp} = rsvps;
  return (
    <>
      <div className={guest.plus_one_allowed ? 'rsvp-forms' : null}>
        <RSVPForm rsvps={rsvps} rsvpType="guest_rsvp" setRSVP={setRSVP} />
        {guest.plus_one_allowed && guest_rsvp.response && (
          <RSVPForm rsvps={rsvps} rsvpType="plus_one_rsvp" setRSVP={setRSVP} error={error} />
        )}
      </div>
      <Button
        onClick={() => submitRSVP(rsvps)}
        variant="contained"
        size="large"
        disabled={!guest_rsvp.name || (guest.plus_one && !plus_one_rsvp?.name)}
      >
        {loading ? 'Loading...' : !!guest.rsvp ? 'Update RSVP' : 'Send RSVP'}
      </Button>
    </>
  );
};

export default RSVPForms;
