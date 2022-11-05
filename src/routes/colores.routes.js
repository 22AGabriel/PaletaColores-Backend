import { Router } from "express";
import { borrarColor, crearColor, listarColores } from "../controllers/colores.controllers";

const router = Router();

router
  .route("/colores")
    .get(listarColores)
    .post(crearColor);

router
  .route("/colores/:id")
    .delete(borrarColor);

export default router;