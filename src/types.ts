type Response = 'yes' | 'no';
type MealChoice = 'fish' | 'chicken' | 'vegetarian';

export interface RSVP {
  id?: number;
  name: string;
  plus_one: boolean;
  response: Response;
  meal_choice: MealChoice;
}

export interface Guest {
  id?: number;
  email: string;
  plus_one_allowed: boolean;
  rsvp_sent: boolean;
}
