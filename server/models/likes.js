import { DataTypes } from "sequelize";
import sequelize from "../connect.js";

const Likes = sequelize.define(
  "likes",
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
      allowNull: false,
      unique: true,
    },
  },
  {
    freezeTableName: true,
  }
);

export default Likes;
