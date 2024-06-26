require("dotenv").config();
const express = require("express");
const app = express();
const mongoose = require("mongoose");

//Connecting to Mongoose
mongoose
  .connect(process.env.DATABASE_URL)
  .then(() => console.log("Connected"))
  .catch((err) => console.log(err));

//Middleware
app.use(express.json());
const blogsRouter = require("./routes/blogs");
app.use("/blogs", blogsRouter);

//Listem to server
app.listen(3000, () => console.log("Server connected"));
