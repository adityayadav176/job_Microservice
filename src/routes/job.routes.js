import { Router } from "express";
import { createJob } from "../controllers/job.controller";

const router = Router()

router.post("/", createJob)

export default router