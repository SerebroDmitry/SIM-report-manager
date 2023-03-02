import express from "express";
import mysql from "mysql2/promise";
import config from "./config.js";
import bodyParser from "body-parser";

//https://docs.google.com/feeds/list/1FkVUWJ84USaxxwSkoaqxKu1ouY9O0c5nSM1vJo7khp4/2/public/values?alt=json
//simreportmanager-41dd7e9bb736.json
//id razv - AKfycbyfcEvLSna_NbO-FDPSuo_efg7tK2uVugGDGTBqpQ1mrFvNPnqEGUFbPLgD-buhj4kT
//web-app - https://script.google.com/macros/s/AKfycbyfcEvLSna_NbO-FDPSuo_efg7tK2uVugGDGTBqpQ1mrFvNPnqEGUFbPLgD-buhj4kT/exec

const googleUrl = "https://docs.google.com/feeds/list/1FkVUWJ84USaxxwSkoaqxKu1ouY9O0c5nSM1vJo7khp4/2/public/values?alt=json"
const key = "simreportmanager-41dd7e9bb736.json"



//задаем номер порта
const PORT = process.env.PORT || 3001;
//используем экспресс и бадипарсер
const app = express();
app.use(bodyParser.json());

let userDate = null;

app.listen(PORT, () => {
  console.log("Server started on port: " + PORT);
});

//забираем все данные о юзерах из БД в АПИ
async function getuserData() {
  const connection = await mysql.createConnection(config);
  const [rows, fields] = await connection.execute("SELECT * FROM `users`");
  connection.end();
  userDate = rows;
}

getuserData();

//отдаем записи о юзерах в АПИ из юзердейт
app.get("/api/users", (req, res) => {
  res.json({
    userDate,
  });
});
//добавляем запись о новом юзере в БД
app.post("/api/newusers", (req, response) => {
  async function postUserData() {
    const connection = await mysql.createConnection(config);
    connection.query(
      "INSERT INTO `users`(`id`, `phone_number`, `name`, `surname`, `dads_name`, `adress`, `email`, `company`, `password`)" +
        ` VALUES (null, ${req.body.phone_number}, ${req.body.name}, ${req.body.surname}, ${req.body.dads_name}, ${req.body.adress}, ${req.body.email}, ${req.body.company}, ${req.body.password})`,
      req.body,
      (error, res) => {
        if (error) throw error;
        response.status(201).send(`User added with ID: ${res.insertId}`);
      }
    );
    connection.end();
    getuserData();
  }
  postUserData();
});
