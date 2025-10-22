const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();
app.use(express.json());
app.use(cors());

// Schema
const TaskSchema = new mongoose.Schema({
  title: String,
});
const Task = mongoose.model("Task", TaskSchema);

// Connect MongoDB
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log(err));

// Get all tasks
app.get("/tasks", async (req, res) => {
  const tasks = await Task.find();
  res.json(tasks);
});


app.post("/tasks", async (req, res) => {
  const newTask = new Task({ title: req.body.title });
  await newTask.save();
  res.json(newTask);
});


app.delete("/tasks/:id", async (req, res) => {
  await Task.findByIdAndDelete(req.params.id);
  res.json({ message: "Task deleted" });
});




app.put("/tasks/:id", async (req, res) => {
  const updated = await Task.findByIdAndUpdate(
    req.params.id,
    { title: req.body.title },
    { new: true }
  );
  res.json(updated);
});

app.listen(5000, () => console.log("Server running on port 5000"));
