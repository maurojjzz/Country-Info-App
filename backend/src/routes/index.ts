import express, { Router } from "express";

import { countriesRouter } from "./countries.js";

const router = Router();

router
    .use("/countries", countriesRouter)

export { router }
