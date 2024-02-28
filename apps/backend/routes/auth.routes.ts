import express from "express";
import {register,login,getSession} from "../controllers/auth.controller"

const router = express.Router();

router.post('/auth/register',register)
router.post('/auth/login',login)
router.get('/auth/me',getSession)
export default router;