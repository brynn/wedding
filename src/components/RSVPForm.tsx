import React from 'react';
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
import {MealChoice, RSVP, RSVPs} from '../types';

interface Props {
  rsvp: Partial<RSVP>;
  guestType: keyof RSVPs;
  updateRSVP: (e: React.ChangeEvent, updatedRSVP: Partial<RSVP>, guestType: keyof RSVPs) => void;
}

const RSVPForm: React.FC<Props> = ({rsvp, guestType, updateRSVP}: Props) => {
  return (
    <Card>
      <TextField
        id="name"
        label="Name"
        variant="outlined"
        size="small"
        autoFocus
        value={rsvp.name}
        onChange={(e) => updateRSVP(e, {name: e.target.value}, guestType)}
      />
      <TextField
        id="email"
        label="Email"
        variant="outlined"
        size="small"
        value={rsvp.email}
        onChange={(e) => updateRSVP(e, {email: e.target.value}, guestType)}
      />
      <FormControl>
        <FormLabel id="response-group" className="rsvp-label">
          can you attend the wedding?
        </FormLabel>
        <RadioGroup
          aria-labelledby="response-group"
          name="response"
          value={rsvp.response ? 'yes' : 'no'}
          onChange={(e, value) => updateRSVP(e, {response: value === 'yes'}, guestType)}
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
              onChange={(e, value) => updateRSVP(e, {meal_choice: value as MealChoice}, 'guest')}
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
              onChange={(e, value) => updateRSVP(e, {rehearsal_dinner: value === 'yes'}, 'guest')}
            >
              <FormControlLabel value="yes" control={<Radio size="small" />} label="Yep" />
              <FormControlLabel value="no" control={<Radio size="small" />} label="Nope" />
            </RadioGroup>
          </FormControl>
        </>
      )}
    </Card>
  );
};

export default RSVPForm;
