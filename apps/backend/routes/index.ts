import express from "express";
import auth from "./auth.routes"
import middleware from "./middleware.routes"
import place from "./place.routes";

const router = express.Router();

router.use(middleware);
router.use(auth);
router.use(place);

export default router;
