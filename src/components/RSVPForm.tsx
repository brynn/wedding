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
import {RSVP, Guest, MealChoice} from '../types';

interface Props {
  guest: Guest;
  setSent: (sent: boolean) => void;
  setResponse: (response: boolean) => void;
  updating: boolean;
  setUpdating?: (updating: boolean) => void;
}

// TODO (brynn): refactor a bunch of this

const RSVPForm: React.FC<Props> = ({guest, setSent, setResponse, updating, setUpdating}: Props) => {
  const {name, email, plus_one_allowed, plus_one_name, plus_one_email} = guest;
  const [loading, setLoading] = useState<boolean>(false);
  const [rsvp, setRSVP] = useState<Partial<RSVP>>(
    updating
      ? null
      : {
          name,
          email,
          response: true,
          rehearsal_dinner: true,
          meal_choice: 'fish',
        },
  );
  const [guestRSVP, setGuestRSVP] = useState<Partial<RSVP>>(
    updating
      ? null
      : {
          name: plus_one_name,
          email: plus_one_email,
          response: true,
          rehearsal_dinner: true,
          meal_choice: 'fish',
        },
  );

  // If updating the RSVP, call the backend to prefill our existing RSVP values
  useEffect(() => {
    const fetchRSVPs = async () => {
      const existingRSVP = await getRSVP(email);
      setRSVP(existingRSVP);
      if (plus_one_allowed) {
        const existingGuestRSVP = await getRSVP(plus_one_email);
        setGuestRSVP(existingGuestRSVP);
      }
    };
    if (updating && !rsvp && plus_one_allowed && !guestRSVP) {
      fetchRSVPs();
    }
  }, [updating, rsvp, email]);

  if (!guest) {
    return null;
  } else if (!rsvp) {
    return <p>Loading...</p>;
  }

  const updateRSVP = (e: React.ChangeEvent, updatedRSVP: Partial<RSVP>) => {
    e.preventDefault();
    setRSVP({...rsvp, ...updatedRSVP});
  };

  const submitRSVP = async (rsvp: RSVP, updating: boolean) => {
    try {
      setLoading(true);
      const newRSVP = await sendOrUpdateRSVP(rsvp, updating);
      if (newRSVP?.id) {
        setSent(true);
        setResponse(newRSVP.response);
      }
      setLoading(false);
      setUpdating && setUpdating(false);
    } catch (err) {
      // TODO: show server errors
      setLoading(false);
    }
  };

  return (
    <>
      <div style={{display: 'flex', columnGap: '20px'}}>
        <Card>
          <TextField
            id="name"
            label="Name"
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
              <FormControlLabel value="yes" control={<Radio size="small" />} label="Can't wait!" />
              <FormControlLabel value="no" control={<Radio size="small" />} label="Sadly, no" />
            </RadioGroup>
          </FormControl>
          {rsvp.response && (
            <>
              <Divider />
              <FormControl>
                <FormLabel id="meal-choice-group" className="rsvp-label">
                  what is your meal preference?
                </FormLabel>
                <RadioGroup
                  aria-labelledby="meal-choice-group"
                  name="meal-choice"
                  value={rsvp.meal_choice}
                  onChange={(e, value) => updateRSVP(e, {meal_choice: value as MealChoice})}
                >
                  <FormControlLabel value="fish" control={<Radio size="small" />} label="Fish" />
                  <FormControlLabel value="meat" control={<Radio size="small" />} label="Meat" />
                  <FormControlLabel
                    value="vegetarian"
                    control={<Radio size="small" />}
                    label="Vegetarian"
                  />
                </RadioGroup>
              </FormControl>
              <Divider />
              <FormControl>
                <FormLabel id="rehearsal-dinner-group" className="rsvp-label">
                  can you attend the welcome party on june second?
                </FormLabel>
                <RadioGroup
                  aria-labelledby="rehearsal-dinner-group"
                  name="rehearsal-dinner"
                  value={rsvp.rehearsal_dinner ? 'yes' : 'no'}
                  onChange={(e, value) => updateRSVP(e, {rehearsal_dinner: value === 'yes'})}
                >
                  <FormControlLabel value="yes" control={<Radio size="small" />} label="Yep" />
                  <FormControlLabel value="no" control={<Radio size="small" />} label="Nope" />
                </RadioGroup>
              </FormControl>
            </>
          )}
        </Card>
        {plus_one_allowed && (
          <Card>
            <TextField
              id="plus-one-name"
              label="Guest's Name"
              variant="outlined"
              // Name is editable but defaults to the value we started with in the guest table
              value={plus_one_name}
              onChange={(e) => updateRSVP(e, {name: e.target.value})}
            />
            <FormControl>
              <FormLabel id="response-group" className="rsvp-label">
                can your guest attend the wedding?
              </FormLabel>
              <RadioGroup
                aria-labelledby="response-group"
                name="response"
                value={rsvp.response ? 'yes' : 'no'}
                onChange={(e, value) => updateRSVP(e, {response: value === 'yes'})}
              >
                <FormControlLabel
                  value="yes"
                  control={<Radio size="small" />}
                  label="Can't wait!"
                />
                <FormControlLabel value="no" control={<Radio size="small" />} label="Sadly, no" />
              </RadioGroup>
            </FormControl>
            {rsvp.response && (
              <>
                <Divider />
                <FormControl>
                  <FormLabel id="meal-choice-group" className="rsvp-label">
                    what is your guest's meal preference?
                  </FormLabel>
                  <RadioGroup
                    aria-labelledby="meal-choice-group"
                    name="meal-choice"
                    value={rsvp.meal_choice}
                    onChange={(e, value) => updateRSVP(e, {meal_choice: value as MealChoice})}
                  >
                    <FormControlLabel value="fish" control={<Radio size="small" />} label="Fish" />
                    <FormControlLabel value="meat" control={<Radio size="small" />} label="Meat" />
                    <FormControlLabel
                      value="vegetarian"
                      control={<Radio size="small" />}
                      label="Vegetarian"
                    />
                  </RadioGroup>
                </FormControl>
                <Divider />
                <FormControl>
                  <FormLabel id="rehearsal-dinner-group" className="rsvp-label">
                    can your guest attend the welcome party on june second?
                  </FormLabel>
                  <RadioGroup
                    aria-labelledby="rehearsal-dinner-group"
                    name="rehearsal-dinner"
                    value={rsvp.rehearsal_dinner ? 'yes' : 'no'}
                    onChange={(e, value) => updateRSVP(e, {rehearsal_dinner: value === 'yes'})}
                  >
                    <FormControlLabel value="yes" control={<Radio size="small" />} label="Yep" />
                    <FormControlLabel value="no" control={<Radio size="small" />} label="Nope" />
                  </RadioGroup>
                </FormControl>
              </>
            )}
          </Card>
        )}
      </div>
      <Button
        onClick={() => rsvp && submitRSVP(rsvp as RSVP, updating)}
        variant="contained"
        size="large"
        disabled={!rsvp.name}
      >
        {loading ? 'Loading...' : updating ? 'Update RSVP' : 'Send RSVP'}
      </Button>
    </>
  );
};

export default RSVPForm;
