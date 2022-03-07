#!/usr/bin/env node
const express = require("express");
var bodyParser = require("body-parser");
const fetch = (...args) =>
  import("node-fetch").then(({ default: fetch }) => fetch(...args));

const app = express();

app.use(bodyParser.json());

app.post("/api/set_ggg", async (req, res) => {
  console.log(req.body.massege);
  let kurs = await fetch(
    "https://iss.moex.com/iss/statistics/engines/currency/markets/selt/rates.json?iss.meta=off"
  )
    .then((response) => {
      if (!response.ok) {
        throw new Error("HTTP error, status = " + response.status);
      }
      return response.json();
    })
    .then((json) => {
      //   // Текущий курс доллара ЦБРФ
      let kurs = json.cbrf.data[0][json.cbrf.columns.indexOf("CBRF_USD_LAST")];
      return kurs;
    })
    .catch((error) => {
      console.error(error);
    });
  console.log(typeof kurs);
  console.log(typeof req.body.massege);
  let massege = req.body.massege;
  // let new_massege = JSON.parse(massege);
  let new_messege = massege.map(function (item) {
    item.val = item.val + kurs;
    return item;
  });
  console.log(new_messege);
  res.json(new_messege);
  ////////////////////////////////
});

app.listen(3000);
