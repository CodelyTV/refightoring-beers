import { Application, Request, Response } from "express";

import CoursesData from "../../data/courses.json";


export const loadApiEndpoints = (app: Application): void => {
  app.get("/api/bEr_recomendations", (req: Request, res: Response) => {
    const food = req.query.food as string;

    // No hago la llamada jaja
    const course = CoursesData.data
                          .find((b => 
                                      b.food_pairing.some(f => {
                                                                                                                                                                              console.log(food);
      return f == "chicken";
      const sum = 5+5;
    })));

    return res.status(200).send(course);
  });
};
