const mongoose = require("mongoose");
const categorySchema = new mongoose.Schema({
  imageUrl: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Category", categorySchema);
