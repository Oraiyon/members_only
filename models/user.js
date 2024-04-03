const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  first_name: { type: String, required: true, maxLength: 20 },
  last_name: { type: String, required: true, maxLength: 20 },
  username: { type: String, required: true },
  password: { type: String, required: true, minLength: 6 },
  member: { type: Boolean, required: true },
  admin: { type: Boolean, required: true }
});

UserSchema.virtual("full_name").get(function () {
  return `${this.first_name} ${this.last_name}`;
});

module.exports = mongoose.model("users", UserSchema);
