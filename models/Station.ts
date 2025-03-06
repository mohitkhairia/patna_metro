import { DataTypes, Model } from "sequelize";
import sequelize from "./index";

class Station extends Model {
  public id!: number;
  public name_en!: string;
  public name_local!: string;
  public line_colors!: string[];
  public latitude!: number;
  public longitude!: number;
}

Station.init(
  {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name_en: { type: DataTypes.STRING, allowNull: false },
    name_local: { type: DataTypes.STRING, allowNull: false },
    line_colors: { type: DataTypes.ARRAY(DataTypes.STRING), allowNull: false },
    latitude: { type: DataTypes.DECIMAL(9, 6), allowNull: false },
    longitude: { type: DataTypes.DECIMAL(9, 6), allowNull: false },
  },
  { sequelize, modelName: "station" }
);


export default Station;
