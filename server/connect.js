import { Sequelize } from "sequelize";

const sequelize = new Sequelize("jaysocials", "root", "0173794628", {
  dialect: "mysql",
  host: "localhost",
  logging: false
});

export default sequelize;