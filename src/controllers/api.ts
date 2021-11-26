import { Application, Request, Response } from "express";

import BeersData from "../../data/courses.json";

export const loadApiEndpoints = (app: Application): void => {
  app.get("/api/beers", (req: Request, res: Response) => {
    const foundBeers = BeersData.data.find((beer) =>
      beer.food_pairing.some((food) => food.includes("chicken"))
    );

    return res.status(200).send(foundBeers);
  });
};
