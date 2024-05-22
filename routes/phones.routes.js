import { Router } from "express";
import {
    getAllphones, getPhone,
    deletePhone, putPhone, createPhone
} from "../controllers/phones.controllers.js";

const router = Router();

router.get("/", getAllphones);
router.get("/:id", getPhone);
router.delete("/:id", deletePhone);
router.put("/:id", putPhone);
router.post("/", createPhone);

export default router