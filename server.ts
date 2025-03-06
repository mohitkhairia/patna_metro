import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import sequelize from "./models";
import stationRoutes from "./routes/stationRoutes";
import ticketRoutes from "./routes/ticketRoutes";

dotenv.config();
const app = express();
app.use(express.json());
app.use(cors());

app.use("/api", stationRoutes);
app.use("/api", ticketRoutes);

const PORT = process.env.PORT || 5000;

sequelize.sync().then(() => {
  console.log("Database synced");
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
});
