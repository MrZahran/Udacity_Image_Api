import express from "express";
import routes from "../routes/index";

it("Home Page Status 200 OK", () => {
  routes.get("/", (req: express.Request, res: express.Response) => {
    expect(res.status).toBe(200);
  });
});

it("Convert Page Status 200 OK", () => {
  routes.get("/convert", (req: express.Request, res: express.Response) => {
    expect(res.status).toBe(200);
  });
});

it("Check Convert With Parameters", () => {
  routes.get(
    "/convert?name=5&width=500&height=100",
    (req: express.Request, res: express.Response) => {
      expect(res.status).toBe(200);
    }
  );
});
