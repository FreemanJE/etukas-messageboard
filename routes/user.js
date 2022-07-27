import { Router } from "express";
import passport from 'passport'
import { getUserList, register, login, logout, getProfile } from "../controllers/userControllers.js";


const router = Router();

router.get("/list", getUserList);

router.post("/register", register);

router.post('/login', login);

router.get ('/logout', logout);

router.use(passport.authenticate('jwt',{session:false}));

router.get('/profile', getProfile)


export default router;
