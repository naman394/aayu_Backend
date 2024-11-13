// routes/auth.js
import express from "express";
import { signup, login } from "../../controllers/auth.js";

const authRoutes = express.Router();
authRoutes.post("/login", login);
authRoutes.post("/signup", signup);

export default authRoutes;




