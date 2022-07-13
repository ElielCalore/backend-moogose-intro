const router = require("express").Router();

const jobModel = require("../models/Job.models");

// Create
router.post("/create-job", async (req, res) => {
  try {
    const newJob = await jobModel.create(req.body);

    return res.status(201).json(newJob);
  } catch (err) {
    console.log(err);
    return res.status(500).json(err);
  }
});

// Read todos
router.get("/all-job", async (req, res) => {
  try {
    const allJobs = await jobModel.find();

    return res.status(200).json(allJobs);
  } catch (err) {
    console.error(err);
    return res.status(500).json(err);
  }
});

// Read - Details

router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const job = await jobModel.findOne({ _id: id });

    return res.status(200).json(job);
  } catch (err) {
    console.error(err);
    return res.status(500).json(err);
  }
});

// Edit

router.patch("/edit/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const editedjob = await jobModel.findOneAndUpdate(
      { _id: id },
      { ...req.body },
      { new: true }
    );
    return res.status(200).json(editedjob);
  } catch (err) {
    console.error(err);
    return res.status(500).json(err);
  }
});

// Delete

router.delete("/delete/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const deletedjob = await jobModel.deleteOne({ _id: id });
    return res.status(200).json(deletedjob);
  } catch (err) {
    console.error(err);
    return res.status(500).json(err);
  }
});

module.exports = router;
