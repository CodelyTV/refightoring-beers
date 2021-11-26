import { Application, Request, Response } from "express";

import { BeersRepository } from "../domain/BeersRepository";

export const loadApiEndpoints = (
  app: Application,
  beersRepository: BeersRepository
): void => {
  app.get("/api/beers", async (req: Request, res: Response) => {
    const foodToPairWith = "chicken";

    const beers = await beersRepository.searchByFoodPairing(foodToPairWith);

    return res.status(200).send(beers);
  });
};
