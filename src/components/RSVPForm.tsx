import React, {useState} from 'react';
import {
  TextField,
  Button,
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
  Divider,
} from '@mui/material';
import {postRSVP} from '../backend';
import {RSVP, Guest} from '../types';

interface Props {
  guest: Guest;
  setSent: (sent: boolean) => void;
  setResponse: (response: boolean) => void;
}

const RSVPForm: React.FC<Props> = ({guest, setSent, setResponse}: Props) => {
  const {name, email} = guest;
  const [rsvp, setRSVP] = useState<Partial<RSVP>>({
    name,
    email,
    response: true,
    plus_one: true,
    rehearsal_dinner: true,
  });
  const [loading, setLoading] = useState<boolean>(false);

  const updateRSVP = (e: React.ChangeEvent, updatedRSVP: Partial<RSVP>) => {
    e.preventDefault();
    setRSVP({...rsvp, ...updatedRSVP});
  };

  const submitRSVP = async (rsvp: RSVP) => {
    try {
      setLoading(true);
      const newRSVP = await postRSVP(rsvp);
      if (newRSVP?.id) {
        setSent(true);
        setResponse(newRSVP.response);
      }
      setLoading(false);
    } catch (err) {
      setRSVP({
        ...rsvp,
        name: '',
        response: true,
        plus_one: guest.plus_one_allowed,
        rehearsal_dinner: guest.rehearsal_dinner_allowed,
      });
      setLoading(false);
    }
  };

  // TODO: show server errors

  return (
    <>
      <TextField
        id="name"
        label="Your Full Name"
        variant="outlined"
        required
        autoFocus
        // Name is editable but defaults to the value we started with in the guest table
        value={rsvp.name}
        onChange={(e) => updateRSVP(e, {name: e.target.value})}
      />
      <FormControl>
        <FormLabel id="response-group" className="rsvp-label">
          can you attend the wedding?
        </FormLabel>
        <RadioGroup
          aria-labelledby="response-group"
          name="response"
          value={rsvp.response ? 'yes' : 'no'}
          onChange={(e, value) => updateRSVP(e, {response: value === 'yes'})}
        >
          <FormControlLabel value="yes" control={<Radio />} label="Can't wait!" />
          <FormControlLabel value="no" control={<Radio />} label="Sadly, no" />
        </RadioGroup>
      </FormControl>
      <Divider />
      {rsvp.response && (
        <>
          {guest.plus_one_allowed && (
            <FormControl>
              <FormLabel id="plus-one-group" className="rsvp-label">
                will you be bringing a guest?
              </FormLabel>
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
          <Divider />
          {guest.rehearsal_dinner_allowed && (
            <FormControl>
              <FormLabel id="rehearsal-dinner-group" className="rsvp-label">
                can you attend the welcome party?
              </FormLabel>
              <RadioGroup
                aria-labelledby="rehearsal-dinner-group"
                name="rehearsal-dinner"
                value={rsvp.rehearsal_dinner ? 'yes' : 'no'}
                onChange={(e, value) => updateRSVP(e, {rehearsal_dinner: value === 'yes'})}
              >
                <FormControlLabel value="yes" control={<Radio />} label="Yep" />
                <FormControlLabel value="no" control={<Radio />} label="Nope" />
              </RadioGroup>
            </FormControl>
          )}
        </>
      )}
      <Button
        onClick={() => rsvp && submitRSVP(rsvp as RSVP)}
        variant="contained"
        size="large"
        disabled={!rsvp.name}
      >
        {loading ? 'Loading...' : 'Send RSVP'}
      </Button>
    </>
  );
};

export default RSVPForm;
