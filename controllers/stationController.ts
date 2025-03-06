import { Request, Response } from "express";
import Station from "../models/Station";

export const getAllStations = async (req: Request, res: Response) => {
  try {
    const stations = await Station.findAll();
    res.json(stations);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};
