import request from "supertest";

import app from "../src/app";
import json from "./expected.json";

const uri = "/api/beers";

describe(`GET ${uri}`, () => {
  it("should return 200 OK", () => {
    return request(app).get(uri).expect(200);
  });

  it("should return expected body", () => {
    return request(app).get(uri).expect(200).then((response) => {
      expect(response.body).toStrictEqual(json);
    });
  });
});
