const router = require("express").Router();

const userModel = require("../models/User.model");

// Create
router.post("/create-user", async (req, res) => {
  try {
    const newUser = await userModel.create(req.body);

    return res.status(201).json(newUser);
  } catch (err) {
    console.log(err);
    return res.status(500).json(err);
  }
});

// Read todos
router.get("/all-user", async (req, res) => {
  try {
    const allUser = await userModel.find();

    return res.status(200).json(allUser);
  } catch (err) {
    console.error(err);
    return res.status(500).json(err);
  }
});

// Read - Details

router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const user = await userModel.findOne({ _id: id });

    return res.status(200).json(user);
  } catch (err) {
    console.error(err);
    return res.status(500).json(err);
  }
});

// Edit

router.patch("/edit/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const editedUser = await userModel.findOneAndUpdate(
      { _id: id },
      { ...req.body },
      { new: true }
    );
    return res.status(200).json(editedUser);
  } catch (err) {
    console.error(err);
    return res.status(500).json(err);
  }
});

// Delete

router.delete("/delete/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const deletedUser = await userModel.deleteOne({ _id: id });
    return res.status(200).json(deletedUser);
  } catch (err) {
    console.error(err);
    return res.status(500).json(err);
  }
});

module.exports = router;
