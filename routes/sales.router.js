import { Router } from "express";
import {
  getAllSales,
  getSale,
  deleteSale,
  putSale,
  createSale,
} from "../controllers/sales.controllers.js";

const router = Router();

router.get("/", getAllSales);
router.get("/:id", getSale);
router.delete("/:id", deleteSale);
router.put("/:id", putSale);
router.post("/", createSale);

export default router;
