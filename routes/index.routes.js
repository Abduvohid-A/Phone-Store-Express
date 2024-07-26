import { Router } from "express";
import usersRouter from "./users.routes.js";
import saleRouter from "./sales.router.js";
import phoneRouter from "./phones.routes.js";
import employeesRouter from "./employees.routes.js";

const router = Router();

router.use("/users", usersRouter);
router.use("/sales", saleRouter);
router.use("/phones", phoneRouter);
router.use("/employees", employeesRouter);

export default router;
