import { Router } from "express";
import { borrarColor, crearColor, listarColores } from "../controllers/colores.controllers";
import { check } from "express-validator";

const router = Router();

router
  .route("/colores")
    .get(listarColores)
    .post(
        [
            check("nombreColor")
              .notEmpty()
              .withMessage("Este campo es obligatorio")
              .isLength({min: 3})
              .withMessage("El mínimo de caracteres es de 3")
        ],
        crearColor);

router
  .route("/colores/:id")
    .delete(borrarColor);

export default router;