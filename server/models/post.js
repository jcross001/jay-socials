import { DataTypes } from "sequelize";
import sequelize from "../connect.js";

const Post = sequelize.define(
  "posts",
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
      allowNull: false,
      unique: "id",
    },
    desc: {
      type: DataTypes.STRING(200),
    },
    img: {
      type: DataTypes.STRING(200),
    },
  },
  {
    freezeTableName: true,
  }
);

export default Post;
