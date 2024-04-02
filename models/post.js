const mongoose = require("mongoose");
const { DateTime } = require("luxon");
const Schema = mongoose.Schema;

const PostSchema = new Schema({
  // ref: "collection name"
  user: { type: Schema.Types.ObjectId, ref: "users", required: true },
  message: { type: String, required: true },
  date_posted: { type: Date, default: Date.now }
});

PostSchema.virtual("date_posted_formatted").get(function () {
  return DateTime.fromJSDate(this.date_posted).toLocaleString(DateTime.DATE_MED);
});

module.exports = mongoose.model("posts", PostSchema);
