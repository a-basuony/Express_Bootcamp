const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
  //   console.log(__dirname);
  // __dirname => this is directory name or current path
});

app.post("/", function (req, res) {
  let { num1, num2 } = req.body;
  //   console.log(num1, num2);
  var result = Number(num1) + Number(num2);
  res.send("the result of this calculation is " + result);
});

app.get("/bmiCalculator", (req, res) => {
  res.sendFile(__dirname + "/bmiCalculator.html");
});

app.post("/bmiCalculator", (req, res) => {
  const { height, weight } = req.body;
  console.log(height, weight);

  var bmi = parseFloat(weight) / (parseFloat(height) * parseFloat(height));

  console.log(bmi);
  res.send("the result of BMI Calculation" + bmi);
});

app.listen(3000, function () {
  console.log("Server is running on port 3000");
});
