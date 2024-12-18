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

db.User = require("./User")(sequelize, Sequelize);

db.User = UserModel;
db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
