type Response = 'yes' | 'no';
type MealChoice = 'fish' | 'chicken' | 'vegetarian';

export interface RSVP {
  id?: number;
  name: string;
  plus_one: boolean;
  response: Response;
  meal_choice: MealChoice;
}
