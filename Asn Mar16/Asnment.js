const express = require("express");
const app = express();
const path = require("path");
app.use(express.urlencoded({ extended: true }));
app.get("/", function (req, res) {
  res.send(
    "<style>body{background:lightblue}</style><h1>open addcar,showcars,login paths</h1>"
  );
});
app.get("/addcar", function (req, res) {
  console.log(__dirname);
  /*res.sendFile(__dirname + "/userform.html");*/
  const completePath = path.join(__dirname, "carrental.html");
  res.sendFile(completePath);
});
app.get("/showcars", function (req, res) {
  console.log(__dirname);
  /*res.sendFile(__dirname + "/userform.html");*/
  const completePath = path.join(__dirname, "cars.html");
  res.sendFile(completePath);
});
app.get("/login", function (req, res) {
  res.send(`<style>
    body {
      background: lightblue;
    }
    form {
      width: 60%;
      margin: 50px auto;
    }
    input {
      width: 80%;
      padding: 10px;
      margin: 10px auto;
  
      margin-left: 50px;
      border-radius: 10px;
    }
    h1 {
      text-align: center;
      color: blue;
      font-weight: bold;
    }
    .btn1 {
      width: 10%;
      padding: 10px;
      margin-bottom: 10px;
      border-radius: 10px;
      background: green;
      margin-left: 350px;
    }
    .reg1 {
      margin: 50px auto;
      padding-top:10px;
      border: 2px solid black;
      background: lightslategray;
      box-shadow: 10px 10px 10px black;
    }
  </style><h1>LoginForm</h1>
  <form action="/status" method="post">
    <div class="reg1">
      <input type="text" name="name" placeholder="username" /><br />
      <input type="password" name="password" placeholder="password" /><br />
      <button class="btn1">login</button>
    </div>
  </form>`);
});

app.post("/status", function (req, res) {
  console.log(req.body);
  const name = req.body.name;
  const password = req.body.password;
  if (name == "smith" && password == "abc") {
    res.send(
      "<style>body{background:lightblue} h1{text-align:center}</style><h1> Successfully logged in</h1>"
    );
  } else {
    res.send(
      "<style>body{background:lightblue} h1{text-align:center}</style><h1>Login Failed</h1>"
    );
  }
});

app.listen(3001);
console.log("Program started");
