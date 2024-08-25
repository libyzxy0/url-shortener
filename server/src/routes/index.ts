import { Router, Application, Request, Response } from "express";
import { API_VERSION } from "@/utils/version";
import urlController from "@/controllers/url.controller";

const router = Router();

router.route("/").get((req: Request, res: Response) => {
  res.json({ message: "Hello, World!!" });
});

router.route("/api/v1/generate").post(urlController.createURL);
router.route("/get-clicks/:id").get(urlController.getClicks);
router.route("/:id").get(urlController.redirect);
/* Initialize router */
export const initializeRoutes = (app: Application) =>
  app.use(API_VERSION, router);