const bcrypt = require("bcryptjs");
const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: [true, "Your Email address is required"],
    unique: true,
  },
  username: {
    type: String,
    required: [true, "Your Username is required"],
  },
  password: {
    type: String,
    required: [true, "Your password is required"],
  },

  createdAt: {
    type: Date,
    default: new Date(),
  },
});
userSchema.pre("save", async function () {
  this.password = await bcrypt.hash(this.password, 12);
});
module.exports = mongoose.model("User", userSchema);
