import { Router } from "express";
import { proprietarioCreate, proprietarioIndex } from "./controllers/proprietarioController.js";
import { imovelIndex, imovelCreate } from "./controllers/ImovelController.js";
import { aluguelIndex, aluguelCreate, aluguelUpdateFinaliza } from "./controllers/AluguelController.js";
import { inquilinoIndex } from "./controllers/inquilinoController.js"

const router = Router();

router.get("/proprietario", proprietarioIndex)
router.post("/proprietario", proprietarioCreate);

router.get("/imovel", imovelIndex)
      .post("/imovel", imovelCreate);

router.get("/aluguel", aluguelIndex)
      .post("/aluguel", aluguelCreate)
      .put("/aluguel/:id", aluguelUpdateFinaliza);

router.get("/inquilino", inquilinoIndex)

export default router;