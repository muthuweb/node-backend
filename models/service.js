const mongoose = require("mongoose");

const Schema = mongoose.Schema;

//Create schema object
const serviceSchema = new Schema({
  title: { type: String, required: true },
  icon: { type: String, required: true },
  image: { type: String, required: true },
  description: { type: String, required: true },
});

//Export the Constructor function created with mongoose,
//The first arg should be singular name with first uppercase letter
module.exports = mongoose.model("Service", serviceSchema);