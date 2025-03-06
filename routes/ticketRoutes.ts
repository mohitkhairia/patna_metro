import express from "express";
import { bookTicket } from "../controllers/ticketController";

const router = express.Router();
router.post("/tickets", (req, res, next) => {
  return bookTicket(req, res).then((result) => {
    if (result) {
      res.json(result);
    } else {
      res.status(404).json({ error: "Not Found" });
    }
  }).catch((error) => {
    next(error);
  });
});

export default router;