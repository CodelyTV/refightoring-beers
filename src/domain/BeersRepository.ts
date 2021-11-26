import { Beer } from "./Beer";

export interface BeersRepository {
  searchByFoodPairing(foodToPairWith: string): Promise<Beer[]>;
}
