const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
require("dotenv").config();

//set up express
const app = express();
app.use(express.json());
app.use(cors());

//set up mongoose
mongoose.connect("mongodb://localhost:27017/trackerDB", {
  useUnifiedTopology: true,
  useNewUrlParser: true,
  useCreateIndex: true
});

// set up routes
app.use("/users", require("./routes/userRoutes"));

app.listen(5000, function() {
  console.log("Server started on port 5000");
});
