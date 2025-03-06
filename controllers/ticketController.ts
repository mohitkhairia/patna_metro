import { Request, Response } from "express";
import Ticket from "../models/Ticket";
import StationConnection from "../models/StationConnection";

const calculateFare = (distance: number, isHoliday: boolean): number => {
  if (distance <= 5) return isHoliday ? 10 : 20;
  if (distance <= 12) return isHoliday ? 20 : 30;
  if (distance <= 21) return isHoliday ? 30 : 40;
  return 50;
};

export const bookTicket = async (req: Request, res: Response) => {
  const { guest_id, source_station, destination_station, travel_date } = req.body;

  try {
    const connection = await StationConnection.findOne({
      where: { station_id_1: source_station, station_id_2: destination_station },
    });

    if (!connection) return res.status(404).json({ error: "Route not found" });

    const isHoliday = [0, 6].includes(new Date(travel_date).getDay()); // Sunday (0) or Saturday (6)
    const fare = calculateFare(connection.distance_km, isHoliday);

    const ticket = await Ticket.create({
      guest_id,
      source_station,
      destination_station,
      fare,
      travel_date,
    });

    res.status(201).json(ticket);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};
