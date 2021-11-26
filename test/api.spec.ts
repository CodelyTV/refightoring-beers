import request from "supertest";

import app from "../src/app";
import json from "./expected.json";

const uri = "GET /api/bEr_recomendations";
describe(uri, () => {
  it("should return 200 OK", () => {
    return request(app).get("/api/bEr_recomendations").expect(200);
  });

  it("should return expected body", () => {
    return request(app).get("/api/bEr_recomendations").expect(200).then((response) => {
      expect(response.body).toStrictEqual(json);
    });
  });
});
