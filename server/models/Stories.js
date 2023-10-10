import { DataTypes } from "sequelize";
import sequelize from "../connect.js";

const Stories = sequelize.define(
  "stories",
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
      allowNull: false,
      unique: true,
    },
    img: {
      type: DataTypes.STRING(200),
      allowNull: false
    },
  },
  {
    freezeTableName: true,
  }
);

export default Stories;
