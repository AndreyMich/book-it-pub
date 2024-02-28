import express from "express";
import {loadUser, verify} from "../middlewares/users.middleware";

const router = express.Router();

router.use(loadUser);
router.use("/auth/me",verify)
router.use("/api/*",verify);

export default router;