import BeersData from "../../data/beers.json";
import { Beer } from "../domain/Beer";
import { BeersRepository } from "../domain/BeersRepository";

export class InMemoryBeersRepository implements BeersRepository {
  async searchByFoodPairing(foodToPairWith: string): Promise<Beer[]> {
    const foundBeers = BeersData.data
      .filter((beer) =>
        beer.food_pairing.some((food) => food.includes(foodToPairWith))
      )
      .map<Beer>((b) => new Beer(b.name));

    return Promise.resolve(foundBeers);
  }
}
