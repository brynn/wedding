import React, {useState, useEffect} from 'react';
import {
  TextField,
  Button,
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
  Divider,
  Card,
} from '@mui/material';
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

const RSVPs: React.FC<Props> = ({guest}: Props) => {
  if (!guest) {
    return null;
  }

  const {name, email, plus_one_allowed, plus_one, rsvp} = guest;
  const [loading, setLoading] = useState<boolean>(false);

  const [rsvps, setRSVPs] = useState<RSVPs>({
    guest_rsvp: {...DEFAULT_RSVP, ...rsvp, name, email},
    plus_one_rsvp: {
      ...DEFAULT_RSVP,
      ...plus_one?.rsvp,
      name: plus_one?.name,
      email: plus_one?.email,
    },
  });

  // If updating the RSVP, call the backend to prefill our existing RSVP values
  // useEffect(() => {
  //   const fetchRSVPs = async () => {
  //     const existingRSVP = await getRSVP(email);
  //     setRSVP(existingRSVP);
  //     if (plus_one_allowed) {
  //       const existingGuestRSVP = await getRSVP(plus_one_email);
  //       setGuestRSVP(existingGuestRSVP);
  //     }
  //   };
  //   if (updating && !rsvp && plus_one_allowed && !guestRSVP) {
  //     fetchRSVPs();
  //   }
  // }, [updating, rsvp, email]);

  const updateRSVP = (e: React.ChangeEvent, updatedRSVP: Partial<RSVP>, guestType: keyof RSVPs) => {
    e.preventDefault();
    setRSVPs({
      ...rsvps,
      [guestType]: {
        ...[guestType],
        ...updatedRSVP,
      },
    });
  };

  // const submitRSVP = async (rsvp: RSVP, updating: boolean) => {
  //   try {
  //     setLoading(true);
  //     const newRSVP = await sendOrUpdateRSVP(rsvp, updating);
  //     if (newRSVP?.id) {
  //       setRsvpSent(true);
  //       setResponse(newRSVP.response);
  //     }
  //     setLoading(false);
  //     setUpdating && setUpdating(false);
  //   } catch (err) {
  //     // TODO: show server errors
  //     setLoading(false);
  //   }
  // };
  const {guest_rsvp, plus_one_rsvp} = rsvps;

  return (
    <>
      <div style={plus_one_allowed ? {display: 'flex', columnGap: '20px'} : null}>
        <RSVPForm rsvp={guest_rsvp} rsvpType="guest_rsvp" updateRSVP={updateRSVP} />
        {plus_one_allowed && (
          <RSVPForm rsvp={plus_one_rsvp} rsvpType="plus_one_rsvp" updateRSVP={updateRSVP} />
        )}
      </div>
      <Button
        // onClick={() => rsvp && submitRSVP(rsvp as RSVP, updatingRsvp)}
        variant="contained"
        size="large"
        disabled={!guest_rsvp.name || (plus_one_allowed && !plus_one_rsvp.name)}
      >
        {loading ? 'Loading...' : guest.rsvp ? 'Update RSVP' : 'Send RSVP'}
      </Button>
    </>
  );
};

export default RSVPs;
