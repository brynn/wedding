import React, {useState} from 'react';
import {TextField, Button} from '@mui/material';
import {Guest} from '../types';
import {getGuest} from '../backend';

interface Props {
  setGuest: (guest: Guest) => void;
}

const EmailForm: React.FC<Props> = ({setGuest}: Props) => {
  const [email, setEmail] = useState<string>('');
  const [error, setError] = useState<string>('');

  const confirmEmail = async (e: React.MouseEvent, email: string) => {
    e.preventDefault();
    const response = await getGuest(email);
    if ((response as Guest)?.id) {
      // If the response has an id, we know we confirmed the guest
      setGuest(response as Guest);
    } else {
      setError(response as string);
    }
  };

  return (
    <>
      <TextField
        id="email"
        type="email"
        label="Email"
        error={!!error}
        helperText={error || `Please confirm your email address in order to RSVP`}
        variant="outlined"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <Button variant="contained" onClick={(e) => confirmEmail(e, email)} disabled={!email}>
        Confirm Email
      </Button>
    </>
  );
};

export default EmailForm;
