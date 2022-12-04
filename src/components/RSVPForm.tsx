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
  Card,
  FormHelperText,
} from '@mui/material';
import {MealChoice, RSVP, RSVPs} from '../types';

interface Props {
  rsvps: RSVPs;
  rsvpType: keyof RSVPs;
  setRSVP: (e: React.ChangeEvent, updatedRSVP: Partial<RSVP>, rsvpType: keyof RSVPs) => void;
  error?: string;
}

const RSVPForm: React.FC<Props> = ({rsvps, rsvpType, setRSVP, error}: Props) => {
  const [newPlusOne] = useState<boolean>(
    rsvpType === 'plus_one_rsvp' && !rsvps.plus_one_rsvp?.guest_id,
  );
  const [addingPlusOne, setAddingPlusOne] = useState<boolean>(false);

  if (newPlusOne && !addingPlusOne) {
    return (
      <Card className="rsvp-form">
        <Button
          onClick={() => setAddingPlusOne(true)}
          variant="contained"
          size="large"
          disabled={!rsvps.guest_rsvp.response}
        >
          I'm Bringing a Plus One
        </Button>
      </Card>
    );
  }
  return (
    <Card className="rsvp-form">
      <TextField
        id={`name-${rsvpType}`}
        label="Name"
        variant="outlined"
        size="small"
        autoFocus={rsvpType === 'guest_rsvp'}
        value={rsvps[rsvpType].name || ''}
        onChange={(e) => setRSVP(e, {name: e.target.value}, rsvpType)}
        error={!!error}
      />
      <FormHelperText>{error}</FormHelperText>

      {/* TODO: don't show when updating */}
      <TextField
        id={`email-${rsvpType}`}
        label="Email"
        variant="outlined"
        size="small"
        value={rsvps[rsvpType].email || ''}
        onChange={(e) => setRSVP(e, {email: e.target.value}, rsvpType)}
      />
      {/* We assume that new plus ones can attend */}
      {!addingPlusOne && (
        <>
          <FormControl>
            <FormLabel id={`response-group-${rsvpType}`} className="rsvp-label">
              can you attend the wedding?
            </FormLabel>
            <RadioGroup
              aria-labelledby={`response-group-${rsvpType}`}
              name="response"
              value={rsvps[rsvpType].response ? 'yes' : 'no'}
              onChange={(e, value) => setRSVP(e, {response: value === 'yes'}, rsvpType)}
            >
              <FormControlLabel value="yes" control={<Radio size="small" />} label="Can't wait!" />
              <FormControlLabel value="no" control={<Radio size="small" />} label="Sadly, no" />
            </RadioGroup>
          </FormControl>
          {rsvps[rsvpType].response && <Divider />}
        </>
      )}
      {rsvps[rsvpType].response && (
        <>
          <FormControl>
            <FormLabel id={`meal-choice-group-${rsvpType}`} className="rsvp-label">
              what is your meal preference?
            </FormLabel>
            <RadioGroup
              aria-labelledby={`meal-choice-group-${rsvpType}`}
              name="meal-choice"
              value={rsvps[rsvpType].meal_choice}
              onChange={(e, value) => setRSVP(e, {meal_choice: value as MealChoice}, rsvpType)}
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
            <FormLabel id={`rehearsal-dinner-group-${rsvpType}`} className="rsvp-label">
              can you attend the welcome party on june second?
            </FormLabel>
            <RadioGroup
              aria-labelledby={`rehearsal-dinner-group-${rsvpType}`}
              name="rehearsal-dinner"
              value={rsvps[rsvpType].rehearsal_dinner ? 'yes' : 'no'}
              onChange={(e, value) => setRSVP(e, {rehearsal_dinner: value === 'yes'}, rsvpType)}
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
