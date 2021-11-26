import { Application, Request, Response } from "express";

import BeersData from "../../data/courses.json";

export const loadApiEndpoints = (app: Application): void => {
  app.get("/api/bEr_recomendations", (req: Request, res: Response) => {

    const beers = BeersData.data.find((beer => beer.food_pairing.some(food =>
      return food.includes("chicken");
    )));
    return res.status(200).send(beers);
  });
};
