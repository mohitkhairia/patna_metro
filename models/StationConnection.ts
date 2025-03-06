import { DataTypes, Model } from "sequelize";
import sequelize from "./index";
import Station from "./Station";

class StationConnection extends Model {
  public id!: number;
  public station_id_1!: number;
  public station_id_2!: number;
  public distance_km!: number;
}

StationConnection.init(
  {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    station_id_1: {
      type: DataTypes.INTEGER,
      references: { model: Station, key: "id" },
    },
    station_id_2: {
      type: DataTypes.INTEGER,
      references: { model: Station, key: "id" },
    },
    distance_km: { type: DataTypes.DECIMAL(5, 2), allowNull: false },
  },
  { sequelize, modelName: "station_connection" }
);


export default StationConnection;
