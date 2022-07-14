const { Schema, model, Types } = require("mongoose");

const userSchema = new Schema({
  candidacies: { type: Types.ObjectId, ref: "Job" },
  vagas: [{ type: Types.ObjectId, ref: "Job" }],
  name: { type: String, required: true, trim: true },
  about: { type: String, required: true, trim: true },
  other: { type: String, required: true, trim: true },
  debug: { type: Boolean, required: true, trim: true },
  css: { type: Boolean, required: true, trim: true },
  bootstrap: { type: Boolean, required: true, trim: true },
  form: { type: Boolean, required: true, trim: true },
  mongo: { type: Boolean, required: true, trim: true },
  github: { type: Boolean, required: true, trim: true },
  humor: { type: Boolean, required: true, trim: true },
});

const userModel = model("User", userSchema);

module.exports = userModel;
