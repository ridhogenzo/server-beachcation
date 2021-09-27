const mongoose = require("mongoose");
const memberSchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: true,
  },
  Email: {
    type: String,
    required: true,
  },
  phoneNumber: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Member", memberSchema);
