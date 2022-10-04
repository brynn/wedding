type MealChoice = 'fish' | 'chicken' | 'vegetarian';

export interface RSVP {
  id?: number;
  name: string;
  email: string;
  plus_one: boolean;
  response: boolean;
  meal_choice: MealChoice;
}

export interface Guest {
  id?: number;
  name: string;
  email: string;
  plus_one_allowed: boolean;
  rsvp_sent: boolean;
  response: boolean;
}
