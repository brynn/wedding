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
} from '@mui/material';
import {MealChoice, RSVP, RSVPs} from '../types';
import {DEFAULT_RSVP} from '../consts';

interface Props {
  rsvps: RSVPs;
  rsvpType: keyof RSVPs;
  setRSVP: (updatedRSVP: Partial<RSVP>, rsvpType: keyof RSVPs) => void;
  error?: string;
}

const RSVPForm: React.FC<Props> = ({rsvps, rsvpType, setRSVP, error}: Props) => {
  const [newPlusOne] = useState<boolean>(
    rsvpType === 'plus_one_rsvp' && !rsvps.plus_one_rsvp?.guest_id,
  );
  const [addingPlusOne, setAddingPlusOne] = useState<boolean>(false);

  const handleAddPlusOne = () => {
    setAddingPlusOne(true);
    setRSVP({...DEFAULT_RSVP}, 'plus_one_rsvp');
  };

  // TODO: remove plus one button (?)
  if (newPlusOne && !addingPlusOne) {
    return (
      <Card className="rsvp-form">
        <Button
          onClick={handleAddPlusOne}
          variant="contained"
          size="large"
          disabled={!rsvps.guest_rsvp.response}
        >
          I'm Bringing a +1
        </Button>
      </Card>
    );
  }
  return (
    <Card className="rsvp-form">
      <TextField
        id={`name-${rsvpType}`}
        label={rsvpType === 'guest_rsvp' ? 'Name' : `+1's Name`}
        variant="outlined"
        size="small"
        autoFocus={rsvpType === 'guest_rsvp'}
        value={rsvps[rsvpType]?.name || ''}
        onChange={(e) => setRSVP({name: e.target.value}, rsvpType)}
        error={!!error}
        helperText={error}
      />

      <TextField
        id={`email-${rsvpType}`}
        label={rsvpType === 'guest_rsvp' ? 'Email' : `+1's Email`}
        variant="outlined"
        size="small"
        value={rsvps[rsvpType]?.email || ''}
        onChange={(e) => setRSVP({email: e.target.value}, rsvpType)}
      />
      {/* We assume that new plus ones can attend */}
      {!addingPlusOne && (
        <>
          <FormControl>
            <FormLabel id={`response-group-${rsvpType}`} className="rsvp-label">
              can {rsvpType === 'guest_rsvp' ? 'you' : 'your +1'} attend the wedding?
            </FormLabel>
            <RadioGroup
              aria-labelledby={`response-group-${rsvpType}`}
              name="response"
              value={rsvps[rsvpType]?.response ? 'yes' : 'no'}
              onChange={(e, value) => setRSVP({response: value === 'yes'}, rsvpType)}
            >
              <FormControlLabel value="yes" control={<Radio size="small" />} label="Can't wait!" />
              <FormControlLabel value="no" control={<Radio size="small" />} label="Sadly, no" />
            </RadioGroup>
          </FormControl>
          {rsvps[rsvpType]?.response && <Divider />}
        </>
      )}
      {rsvps[rsvpType]?.response && (
        <>
          <FormControl>
            <FormLabel id={`meal-choice-group-${rsvpType}`} className="rsvp-label">
              what is {rsvpType === 'guest_rsvp' ? 'your' : `your +1's`} meal preference?
            </FormLabel>
            <RadioGroup
              aria-labelledby={`meal-choice-group-${rsvpType}`}
              name="meal-choice"
              value={rsvps[rsvpType]?.meal_choice}
              onChange={(e, value) => setRSVP({meal_choice: value as MealChoice}, rsvpType)}
            >
              <FormControlLabel
                value="fish"
                control={<Radio size="small" />}
                label="Pan seared salmon"
              />
              <FormControlLabel
                value="meat"
                control={<Radio size="small" />}
                label="Roasted beef tenderloin"
              />
              <FormControlLabel
                value="vegetarian"
                control={<Radio size="small" />}
                label="Veggie Shepherd's pie"
              />
            </RadioGroup>
          </FormControl>
          <Divider />
          <FormControl>
            <FormLabel id={`rehearsal-dinner-group-${rsvpType}`} className="rsvp-label">
              can {rsvpType === 'guest_rsvp' ? 'you' : 'your +1'} attend the welcome party on june
              second?
            </FormLabel>
            <RadioGroup
              aria-labelledby={`rehearsal-dinner-group-${rsvpType}`}
              name="rehearsal-dinner"
              value={rsvps[rsvpType]?.rehearsal_dinner ? 'yes' : 'no'}
              onChange={(e, value) => setRSVP({rehearsal_dinner: value === 'yes'}, rsvpType)}
            >
              <FormControlLabel value="yes" control={<Radio size="small" />} label="Yes" />
              <FormControlLabel value="no" control={<Radio size="small" />} label="No" />
            </RadioGroup>
          </FormControl>
        </>
      )}
    </Card>
  );
};

export default RSVPForm;
