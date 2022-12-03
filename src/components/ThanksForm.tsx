import React from 'react';
import {Card, Button} from '@mui/material';

interface Props {
  response: boolean;
  setUpdatingRSVP: (updating: boolean) => void;
}

const ThanksForm: React.FC<Props> = ({response, setUpdatingRSVP}: Props) => {
  return (
    <Card>
      <p className="thanks">
        {response
          ? `thanks for RSVPing, we can't wait to celebrate with you!`
          : `thanks for RSVPing, you'll be missed!`}
      </p>
      <div>
        <Button onClick={() => setUpdatingRSVP(true)} variant="contained" size="large">
          Update RSVP
        </Button>
        {response && (
          <Button
            href="https://forms.office.com/pages/responsepage.aspx?id=KuxuzI7XB0q7huxnBYH0EatEVNsLYHFDi-9clDMNPpJUNERJSFgwMUdQVEZPWE9ITVYyUjUzTjVINCQlQCN0PWcu"
            variant="contained"
            size="large"
            target="_blank"
          >
            Book Lodging at Migis
          </Button>
        )}
      </div>
    </Card>
  );
};

export default ThanksForm;
