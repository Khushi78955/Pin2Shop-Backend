import { Router } from "express";
import {search} from "../controllers/search.controller.js"
import { validate } from "../middlewares/validate.middleware.js";
import { searchSchema } from "../validations/search.validation.js";

const router = Router();

router.post("/", validate(searchSchema), search);

export default router;