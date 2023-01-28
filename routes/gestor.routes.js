import { Router } from "express";
import { GetViajes, GetViaje } from "../controllers/viajes.controller.js";
import {
  GetTestimonial,
  GetTestimoniales,
  DeleteTestimonial,
  CreateTestimonial,
} from "../controllers/testimoniales.controller.js";
const router = Router();

router.get("/viajes", GetViajes);
router.get("/viajes/:id", GetViaje);

//----------------------------//
router.get("/testimoniales", GetTestimoniales);
router.post("/testimoniales", CreateTestimonial);
router.get("/testimoniales/:id", GetTestimonial);
router.delete("/testimoniales/:id", DeleteTestimonial);

export default router;
