const { Client } = require("pg");
var express = require("express");
var app = express();
app.use(express.json());
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, OPTIONS, PUT, POST, DELETE");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});
const port = process.env.PORT || 2410;
app.listen(port, () => console.log("Listening on Port : ", +port));
const client = new Client({
  user: "jfntuwknqbayyy",
  password: "c5179a1f8a4d3854a333cc5ed9b125f06811956207b855172f22fe5b5e2c09e9",
  database: "dbe1j284tqu1qe",
  port: 5432,
  host: "ec2-34-228-100-83.compute-1.amazonaws.com",
  ssl: { rejectUnauthorized: false },
});
client
  .connect()
  .then(() => console.log("Connected"))
  .catch((e) => console.log(e));

app.get("/users", function (req, res, next) {
  console.log("Inside /users get api");
  const query = ` SELECT * FROM users`;
  client.query(query, function (err, result) {
    if (err) {
      res.status(400).send(err);
    }
    res.send(result.rows);
    // client.end();
  });
});
app.post("/user", function (req, res, next) {
  console.log("Inside post of user");
  var values = Object.values(req.body);
  console.log(values);
  const query = `INSERT INTO users (name, error,date) VALUES ($1,$2,$3)`;
  client.query(query, values, function (err, result) {
    if (err) {
      console.log(err);
      res.sendStatus(404);
    }
    //console.log(result);
    //res.send(`${result.rowCount} insertion successful`);
    res.send(result);
  });
});