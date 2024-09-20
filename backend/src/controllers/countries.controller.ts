import { Request, Response, NextFunction } from "express";
import axios from "axios";

const findAll = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const response = await axios.get(`${process.env.COUNTRIES_API}`);
        res.json(response.data);
    } catch (error) {
        res.status((error as any)?.status).json({error: (error as Error)?.message});
    }
};

const findOne = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const countryInfo = await axios.get(`${process.env.COUNTRY_INFO}/${req.params.code}`);

        const population = await axios.post(`${process.env.COUNTRY_POPULATION}`, {
            country: countryInfo.data.commonName
        })

        const flag = await axios.post(`${process.env.COUNTRY_FLAG}`, {
            country: countryInfo.data.commonName
        })

        res.json({
            country: countryInfo.data,
            population: population.data,
            flag: flag.data
        });
    } catch (error) {
        res.status((error as any)?.status).json({error: (error as Error)?.message});
    }
};


export { findAll, findOne }