const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const projectSchema = new mongoose.Schema({
  name: {type: String, required:true},
  description:{type: String, required:true},
  users:[{
    type: Schema.Types.ObjectId,
    ref:'user'
  }],
  issues:[{
    type: Schema.Types.ObjectId,
    ref:'issue'
  }],


});
let Project;
module.exports = Project = mongoose.model("project", projectSchema);
