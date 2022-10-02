import React, {useState} from 'react';
import {
  TextField,
  Button,
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
} from '@mui/material';
import {postRSVP} from '../backend';
import {RSVP, Guest} from '../types';

interface Props {
  guest: Guest;
  setSent: (sent: boolean) => void;
}

const RSVPForm: React.FC<Props> = ({guest, setSent}: Props) => {
  const [rsvp, setRSVP] = useState<Partial<RSVP>>({
    email: guest.email,
    response: true,
    plus_one: guest.plus_one_allowed,
  });

  const updateRSVP = (e: React.ChangeEvent, updatedRSVP: Partial<RSVP>) => {
    e.preventDefault();
    setRSVP({...rsvp, ...updatedRSVP});
  };

  const submitRSVP = async (rsvp: RSVP) => {
    const newRSVP = await postRSVP(rsvp);
    if (newRSVP?.id) {
      setSent(true);
    }
  };

  return (
    <>
      <TextField
        id="name"
        label="Full Name"
        variant="outlined"
        required
        onChange={(e) => updateRSVP(e, {name: e.target.value})}
      />
      <FormControl>
        <FormLabel id="response-group">Can you attend?</FormLabel>
        <RadioGroup
          aria-labelledby="response-group"
          name="response"
          value={rsvp.response ? 'yes' : 'no'}
          onChange={(e, value) => updateRSVP(e, {response: value === 'yes'})}
        >
          <FormControlLabel value="yes" control={<Radio />} label="Can't wait!" />
          <FormControlLabel value="no" control={<Radio />} label="Sadly I cannot" />
        </RadioGroup>
      </FormControl>
      {guest.plus_one_allowed && (
        <FormControl>
          <FormLabel id="plus-one-group">Will you be bringing a guest?</FormLabel>
          <RadioGroup
            aria-labelledby="plus-one-group"
            name="plus-one"
            value={rsvp.plus_one ? 'yes' : 'no'}
            onChange={(e, value) => updateRSVP(e, {plus_one: value === 'yes'})}
          >
            <FormControlLabel value="yes" control={<Radio />} label="Yep" />
            <FormControlLabel value="no" control={<Radio />} label="Nope" />
          </RadioGroup>
        </FormControl>
      )}
      <Button
        onClick={() => rsvp && submitRSVP(rsvp as RSVP)}
        variant="contained"
        disabled={!rsvp.name || rsvp.plus_one === undefined || rsvp.response === undefined}
      >
        Send RSVP
      </Button>
    </>
  );
};

export default RSVPForm;
