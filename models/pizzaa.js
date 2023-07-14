var mongoose = require("mongoose");
var pizzaSchema = new mongoose.Schema({
  name: {
    type: String,
    default: "Pizza",
  },
  price: {
    type: Number,
    default: 0,
  },
});

module.exports = mongoose.model("Pizza", pizzaSchema);
