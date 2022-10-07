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
import {RSVP, Guest, MealChoice} from '../types';

interface Props {
  guest: Guest;
  setSent: (sent: boolean) => void;
  setResponse: (response: boolean) => void;
}

const RSVPForm: React.FC<Props> = ({guest, setSent, setResponse}: Props) => {
  const {name, email, plus_one_allowed, rehearsal_dinner_allowed} = guest;
  const [rsvp, setRSVP] = useState<Partial<RSVP>>({
    name,
    email,
    meal_choice: 'fish',
    response: true,
    plus_one: true,
    rehearsal_dinner: true,
  });
  const [loading, setLoading] = useState<boolean>(false);

  if (!guest) {
    return null;
  }

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
      // TODO: show server errors
      setLoading(false);
    }
  };

  return (
    <>
      <TextField
        id="name"
        label="Your Full Name"
        variant="outlined"
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
      {rsvp.response && (
        <>
          <Divider />
          <FormControl>
            <FormLabel id="meal-choice-group" className="rsvp-label">
              what's your meal preference?
            </FormLabel>
            <RadioGroup
              aria-labelledby="meal-choice-group"
              name="meal-choice"
              value={rsvp.meal_choice}
              onChange={(e, value) => updateRSVP(e, {meal_choice: value as MealChoice})}
            >
              <FormControlLabel value="fish" control={<Radio />} label="Fish" />
              <FormControlLabel value="chicken" control={<Radio />} label="Meat (TBD)" />
              <FormControlLabel value="vegetarian" control={<Radio />} label="Vegetarian" />
            </RadioGroup>
          </FormControl>
          {plus_one_allowed && (
            <>
              <Divider />
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
            </>
          )}
          {rehearsal_dinner_allowed && (
            <>
              <Divider />
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
            </>
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
