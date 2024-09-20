import { Router } from "express";
import { findAll, findOne } from "../controllers/countries.controller.js";


const countriesRouter = Router();

countriesRouter
    .get("/", findAll)
    .get("/:code", findOne)



export { countriesRouter }