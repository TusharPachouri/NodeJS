const express = require("express");
const movieRoute = require("./routes/movie");
const seriesRoute = require("./routes/series");
require("./db/connection");

const app = express();

app.use(express.json());
app.use(movieRoute);
app.use(seriesRoute);

const PORT = 8080 ;

app.get("/", (req, res) => {
  res.send({
    message:
      "Welcome !!",
    test: "Working! Demo"
  });
});

app.listen(PORT, () => {
  console.log(`Server running on 8080`);
});
