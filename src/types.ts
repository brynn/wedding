export type MealChoice = 'fish' | 'meat' | 'vegetarian';

export interface RSVP {
  id?: number;
  name: string;
  email: string;
  plus_one: boolean;
  rehearsal_dinner: boolean;
  response: boolean;
  meal_choice: MealChoice;
  guest_meal_choice?: MealChoice;
}

export interface Guest {
  id?: number;
  name: string;
  email: string;
  plus_one_allowed: boolean;
  rsvp_sent: boolean;
  response: boolean;
  plus_one_name: string;
  plus_one_email: string;
  plus_one_response: string;
}
