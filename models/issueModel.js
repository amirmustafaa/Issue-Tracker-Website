const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const issueSchema = new mongoose.Schema({
  name: {type: String, required:true},
  description:{type: String, required:true},
  severity:{type: String, required:true},
  status:{type: String, required:true}

});
let Issue;
module.exports = Issue = mongoose.model("issue", issueSchema);
