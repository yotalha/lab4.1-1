const express = require("express");
const path = require("path");

const app = express();

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "hbs");

app.use(express.static(path.join(__dirname, "public")));

app.get("/me", (req, res) => {
  res.render("me");
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
