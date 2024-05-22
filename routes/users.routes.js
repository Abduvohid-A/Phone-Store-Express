import { Router } from "express";
import {
    getAllUsers, createUser,
    getUser, deleteUser, putUser
} from "../controllers/users.controllers.js";

const router = Router();


router.get("/", getAllUsers);
router.get("/:id", getUser);
router.delete("/:id", deleteUser);
router.put("/:id", putUser);
router.post("/", createUser);

export default router;