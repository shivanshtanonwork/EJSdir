const express = require('express');
const app = express();
const path = require("path")
const port = 3000;

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"))

app.get("/", (req, res) => {
    res.render("home.ejs")
})

app.get("/hello", (req, res) => {
    res.send("Hello")
})

app.get("/rolldice", (req, res) => {
    let diceVal = Math.floor(Math.random() * 6) + 1
    res.render("rollDice.ejs", { diceVal })
})

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
})