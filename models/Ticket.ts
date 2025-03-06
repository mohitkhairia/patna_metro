import { DataTypes, Model } from "sequelize";
import sequelize from "./index";
import Station from "./Station";

class Ticket extends Model {
  public id!: number;
  public guest_id!: string;
  public source_station!: number;
  public destination_station!: number;
  public fare!: number;
  public travel_date!: Date;
}

Ticket.init(
  {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    guest_id: { type: DataTypes.UUID, allowNull: false },
    source_station: {
      type: DataTypes.INTEGER,
      references: { model: Station, key: "id" },
    },
    destination_station: {
      type: DataTypes.INTEGER,
      references: { model: Station, key: "id" },
    },
    fare: { type: DataTypes.INTEGER, allowNull: false },
    travel_date: { type: DataTypes.DATE, allowNull: false },
  },
  { sequelize, modelName: "ticket" }
);

export default Ticket;
