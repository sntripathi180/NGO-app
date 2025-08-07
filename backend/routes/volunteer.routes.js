import express from "express";
import { getVolunteers } from "../controllers/volunteer.controller.js";

const router = express.Router();

router.get("/", getVolunteers);

export default router;
