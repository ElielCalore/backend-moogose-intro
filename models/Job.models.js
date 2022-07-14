const { Schema, model, Types } = require("mongoose");

const userJob = new Schema({
  vagas: { type: Types.ObjectId, ref: "User" },
  name: { type: String, required: true, trim: true },
  office: { type: String, required: true, trim: true },
  description: { type: String, required: true, trim: true },
  candidacies: [{ type: Types.ObjectId, ref: "User" }],
});

const jobModel = model("jobs", userJob);

module.exports = jobModel;
