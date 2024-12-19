const { User } = require("../models");
const SECRET_KEY = process.env.SECRET_KEY;
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const SALT = 10;

/* '/' GET */
exports.login = (req, res) => {
  res.render("index");
};

/* '/signup' GET */
exports.signup = (req, res) => {
  res.render("signup");
};
