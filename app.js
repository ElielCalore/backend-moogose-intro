const express = require("express");
require("dotenv").config();

const dbConnect = require("./config/db.config");
dbConnect();

const app = express();

app.use(express.json());

const userRouter = require("./router/user.router");
app.use("/user", userRouter);

const jobRouter = require("./router/job.router");
app.use("/job", jobRouter);

app.listen(Number(process.env.PORT), () => {
  console.log(`Server up and running at port ${process.env.PORT}`);
});
