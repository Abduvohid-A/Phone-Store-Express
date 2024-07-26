import { Router } from "express";
import {
  getAllemployee,
  createEmployee,
  deleteEmployee,
  getEmployee,
  putEmployee,
} from "../controllers/employees.controller.js";

const router = Router();

router.get("/", getAllemployee);
router.get("/:id", getEmployee);
router.delete("/:id", deleteEmployee);
router.put("/:id", putEmployee);
router.post("/", createEmployee);

export default router;
