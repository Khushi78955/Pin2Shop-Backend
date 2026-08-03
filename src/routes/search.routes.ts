import { Router } from "express";
import { searchProducts } from "../controllers/search.controller.js";

const router = Router();

router.post("/", searchProducts);

export default router;