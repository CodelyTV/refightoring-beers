interface BeersRepository {
  searchByFoodPairing(foodToPairWith: string): Promise<unknown>;
}
