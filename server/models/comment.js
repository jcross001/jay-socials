import { DataTypes } from "sequelize";
import sequelize from "../connect.js";

const Comment = sequelize.define(
  "comments",
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
      allowNull: false,
      unique: true,
    },
    desc: {
      type: DataTypes.STRING(200),
      allowNull: false
    },
  },
  {
    freezeTableName: true,
  }
);

export default Comment;
