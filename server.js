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
mongoose.connect("mongodb+srv://admin-amir:"+process.env.MONGO_SECRET+"@giantbugtracker.yjujx.mongodb.net/trackerDB", {
  useUnifiedTopology: true,
  useFindAndModify: false,
  useNewUrlParser: true,
  useCreateIndex: true
});

// set up routes
app.use("/users", require("./routes/userRoutes"));

app.listen(5000, function() {
  console.log("Server started on port 5000");
});
