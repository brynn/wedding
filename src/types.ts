export type MealChoice = 'fish' | 'meat' | 'vegetarian';

export interface RSVP {
  id?: number;
  guest_id?: number;
  name: string;
  email: string;
  response: boolean;
  meal_choice: MealChoice;
  rehearsal_dinner: boolean;
}

export interface Guest {
  id?: number;
  name: string;
  email: string;
  plus_one_allowed: boolean;
  plus_one: Guest;
  rsvp: RSVP;
}

export interface RSVPs {
  guest_rsvp: RSVP;
  plus_one_rsvp: RSVP;
}
