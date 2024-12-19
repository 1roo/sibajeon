"use strict";

const Sequelize = require("sequelize");

let config = require(__dirname + "/../config/config.js");
config = config["development"];

const db = {};

let sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  config
);

const UserModel = require("./User")(sequelize, Sequelize);
const MainModel = require("./Post")(sequelize, Sequelize);

db.User = require("./User")(sequelize, Sequelize);
db.Post = require("./Post")(sequelize, Sequelize);

db.User = UserModel;
db.Post = MainModel;
db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
