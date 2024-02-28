import express from "express";
import {getPublicPlaces,getPrivatePlaces} from "../controllers/places.controller";

const router = express.Router();

router.get("/api/places/public",getPublicPlaces);
router.get("/api/places/private",getPrivatePlaces);

export default router;