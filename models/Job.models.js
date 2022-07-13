const { Schema, model } = require("mongoose");

const userJob = new Schema({
  name: { type: String, required: true, trim: true },
  office: { type: String, required: true, trim: true },
  description: { type: String, required: true, trim: true },
});

const jobModel = model("jobs", userJob);

module.exports = jobModel;

// candidacies: [],
