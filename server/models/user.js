import { DataTypes } from "sequelize";
import sequelize from "../connect.js";

const User = sequelize.define(
  "users",
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
      allowNull: false,
      unique: "id",
    },
    username: {
      type: DataTypes.STRING(45),
      allowNull: false,
      unique: "username",
    },
    email: {
      type: DataTypes.STRING(45),
      allowNull: false,
      unique: "email",
    },
    password: {
      type: DataTypes.STRING(200),
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING(45),
      allowNull: false,
    },
    coverPic: {
      type: DataTypes.STRING(300),
    },
    profilePic: {
      type: DataTypes.STRING(300),
    },
    city: {
      type: DataTypes.STRING(45),
    },
    website: {
      type: DataTypes.STRING(45),
    },
  },
  {
    freezeTableName: true,
  }
);

export default User;
