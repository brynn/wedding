export type MealChoice = 'fish' | 'meat' | 'vegetarian';

export interface RSVP {
  id?: number;
  plus_one_id?: number;
  name: string;
  email: string;
  response: boolean;
  rehearsal_dinner: boolean;
  meal_choice: MealChoice;
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
  guest: Partial<RSVP>;
  plus_one: Partial<RSVP>;
}
