const router = require("express").Router();

const jobModel = require("../models/Job.models");
const userModel = require("../models/User.model");

//Edited candidacies e o vagas
router.post("/apply-job-user/:userId/:jobId", async (req, res) => {
  try {
    const { userId, jobId } = req.params;
    const editedJob = await jobModel.findOneAndUpdate(
      { _id: jobId },
      { $push: { candidacies: userId } },
      { new: true }
    );
    const editedUser = await userModel.findOneAndUpdate(
      { _id: userId },
      { $push: { vagas: jobId } },
      { new: true }
    );
    return res.status(201).json({ editedUser, editedJob });
  } catch (err) {
    console.log(err);
    return res.status(500).json(err);
  }
});

//READ candidacies e o vagas
router.get("/read-populate/:idJob", async (req, res) => {
  try {
    const { idJob } = req.params;
    const job = await jobModel.findOne({ _id: idJob }).populate("candidacies");
    return res.status(200).json(job);
  } catch (err) {
    console.log(err);
    return res.status(500).json(err);
  }
});

//Delete candidacie e a vagas

router.delete("/delete-apply-job-user/:jobId/:userId", async (req, res) => {
  try {
    const { userId, jobId } = req.params;

    const deleteCandidacies = await jobModel.findOneAndUpdate(
      { _id: jobId },
      { $pull: { candidacies: userId } },
      { new: true }
    );

    const deleteVagas = await userModel.findOneAndUpdate(
      { _id: userId },
      { $pull: { vagas: jobId } },
      { new: true }
    );

    return res.status(201).json({ deleteCandidacies, deleteVagas });
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
});

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
