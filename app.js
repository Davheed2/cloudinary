require("dotenv").config();
const express = require("express");
const logger = require("morgan");
const app = express();
const path = require("path");
const bodyParser = require("body-parser");

app.use(logger("dev"));
app.use(express.json());
app.use(express.json({ limit: "50mb" }));
app.use(bodyParser.json({ limit: "50mb" }));
app.use(express.static("./"));
app.use(
  bodyParser.urlencoded({
    limit: "200mb",
    extended: false,
    parameterLimit: 1000000,
  })
);

app.use("/api", require("./routes/upload.route"));

app.get("/", (req, res, next) => {
  res.status(200).json({ server: "It is up" });
});

const port = process.env.PORT || 4000;

app.listen(port, () => {
  console.log(`🚀 Server listening on port ${port}`);
});
