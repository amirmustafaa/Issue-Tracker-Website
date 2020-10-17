const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new mongoose.Schema({
  email: {type: String, required:true, unique: true},
  password: {type: String, required: true, minlength: 5},
  username: {type: String},
  project:[{
    type: Schema.Types.ObjectId,
    ref:'project'
  }]
});

let User;
module.exports = User = mongoose.model("user", userSchema);
