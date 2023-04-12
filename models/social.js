const mongoose = require("mongoose");

const Schema = mongoose.Schema;

//Create schema object
const socialSchema = new Schema({
  title: { type: String, required: true },
  icon: { type: String, required: true },
  url: { type: String, required: true },
});

//Export the Constructor function created with mangoose,
//The first arg should be singular name with first uppercase letter
module.exports = mongoose.model("Social", socialSchema);
