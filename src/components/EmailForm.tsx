import React, {useState} from 'react';
import {TextField, Button} from '@mui/material';
import {Guest} from '../types';
import {getGuest} from '../backend';

interface Props {
  setGuest: (guest: Guest) => void;
}

const EmailForm: React.FC<Props> = ({setGuest}: Props) => {
  const [email, setEmail] = useState<string>('');
  const confirmEmail = async (email: string) => {
    const guest = await getGuest(email);
    if (guest) {
      setGuest(guest);
    }
  };

  return (
    <>
      <TextField
        id="email"
        type="email"
        label="Email"
        helperText="Please confirm your email address in order to RSVP"
        variant="outlined"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <Button variant="contained" onClick={() => confirmEmail(email)} disabled={!email}>
        Confirm Email
      </Button>
    </>
  );
};

export default EmailForm;
