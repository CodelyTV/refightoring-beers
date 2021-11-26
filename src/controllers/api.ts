import { Application, Request, Response } from "express";

import { InMemoryBeersRepository } from "../infrastructure/InMemoryBeersRepository";

export const loadApiEndpoints = (app: Application): void => {
  const beersRepository = new InMemoryBeersRepository();

  app.get("/api/beers", async (req: Request, res: Response) => {
    const foodToPairWith = "chicken";

    const beers = await beersRepository.searchByFoodPairing(foodToPairWith);

    return res.status(200).send(beers);
  });
};
