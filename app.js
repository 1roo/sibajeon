const express = require("express");
const app = express();
const db = require("./models");
const UserController = require("./controller/CUser");
require("dotenv").config();
const PORT = process.env.PORT;

app.set("view engine", "ejs");
app.set("views", "./views");
app.use("/static", express.static(__dirname + "/static"));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

const indexRouter = require("./routes");

app.use("/", indexRouter);

db.sequelize.sync({ force: false }).then((result) => {
  console.log("DB연결 성공");
  console.log("------------------------------");
  app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
  });
});
