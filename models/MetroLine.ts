import { DataTypes, Model } from "sequelize";
import sequelize from "./index";

class MetroLine extends Model {
  public id!: number;
  public name!: string;
  public color!: string;
}

MetroLine.init(
  {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name: { type: DataTypes.STRING, allowNull: false },
    color: { type: DataTypes.STRING, allowNull: false },
  },
  { sequelize, modelName: "metro_line" }
);

export default MetroLine;
