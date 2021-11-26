import BeersData from "../../data/courses.json";

export class InMemoryBeersRepository implements BeersRepository {
  async searchByFoodPairing(foodToPairWith: string): Promise<unknown> {
    return Promise.resolve(
      BeersData.data.find((beer) =>
        beer.food_pairing.some((food) => food.includes(foodToPairWith))
      )
    );
  }
}
