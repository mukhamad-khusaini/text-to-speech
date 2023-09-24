const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const voiceRoutes = require("./routes/voice");

app.set("views", "./views");
app.set("view engine", "ejs");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/voice", voiceRoutes);
app.get("/", (req, res) => {
    res.render("main");
});

app.listen(3000, () => {
    console.log("App listening on http://localhost:3000");
});
