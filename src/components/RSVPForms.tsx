import React, {useState, useEffect} from 'react';
import {Button} from '@mui/material';
import {getRSVP, sendOrUpdateRSVP} from '../backend';
import {RSVP, Guest, RSVPs} from '../types';
import {DEFAULT_RSVP} from '../consts';
import RSVPForm from './RSVPForm';

interface Props {
  guest: Guest;
}

// TODO (brynn): refactor a bunch of this
// Components for guest RSVP, existing plus one, and new plus one
// New plus one form doesn't have "can you attend the wedding option" or email
// "I'm bringing a guest" button for new plus ones
// Mobile design shouldn't have two columns

const RSVPForms: React.FC<Props> = ({guest}: Props) => {
  const [loading, setLoading] = useState<boolean>(false);

  const [rsvps, setRSVPs] = useState<RSVPs>({
    guest_rsvp: {...DEFAULT_RSVP, ...guest?.rsvp, name: guest?.name, email: guest?.email},
    plus_one_rsvp: {
      ...DEFAULT_RSVP,
      ...guest?.plus_one?.rsvp,
      name: guest?.plus_one?.name,
      email: guest?.plus_one?.email,
    },
  });

  if (!guest) {
    return;
  }

  const updateRSVP = (e: React.ChangeEvent, updatedRSVP: Partial<RSVP>, guestType: keyof RSVPs) => {
    e.preventDefault();
    setRSVPs({
      ...rsvps,
      [guestType]: {
        ...rsvps[guestType],
        ...updatedRSVP,
      },
    });
  };

  const submitRSVP = async (rsvps: RSVPs, updating: boolean) => {
    try {
      setLoading(true);
      const newRSVPs = await sendOrUpdateRSVP(rsvps, updating);
      setRSVPs(newRSVPs);
      setLoading(false);
    } catch (err) {
      // TODO: show server errors
      setLoading(false);
    }
  };
  const {guest_rsvp, plus_one_rsvp} = rsvps;

  return (
    <>
      <div style={guest.plus_one_allowed ? {display: 'flex', columnGap: '20px'} : null}>
        <RSVPForm rsvps={rsvps} rsvpType="guest_rsvp" updateRSVP={updateRSVP} />
        {guest.plus_one_allowed && (
          <RSVPForm rsvps={rsvps} rsvpType="plus_one_rsvp" updateRSVP={updateRSVP} />
        )}
      </div>
      <Button
        onClick={() => submitRSVP(rsvps, !!guest.rsvp)}
        variant="contained"
        size="large"
        disabled={!guest_rsvp.name || (guest.plus_one && !plus_one_rsvp.name)}
      >
        {loading ? 'Loading...' : !!guest.rsvp ? 'Update RSVP' : 'Send RSVP'}
      </Button>
    </>
  );
};

export default RSVPForms;
