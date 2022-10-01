import React, {useState} from 'react';
import {TextField, Button} from '@mui/material';
import {postRSVP} from '../backend';
import {RSVP} from '../types';

interface Props {
  RSVPs: RSVP[];
  setRSVPs: (RSVPs: RSVP[]) => void;
}

const RSVPForm: React.FC<Props> = ({RSVPs, setRSVPs}: Props) => {
  const [rsvp, setRSVP] = useState<RSVP>();
  const submitRSVP = async (rsvp: RSVP) => {
    const newRSVP = await postRSVP(rsvp);
    if (newRSVP) {
      setRSVPs([...RSVPs, newRSVP]);
    }
  };

  return (
    <>
      <TextField id="name" label="Name" variant="outlined" required />
      <Button onClick={() => rsvp && submitRSVP(rsvp)} variant="contained">
        Send RSVP
      </Button>
    </>
  );
};

export default RSVPForm;
