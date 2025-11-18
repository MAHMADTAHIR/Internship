const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
const { Category, SubCategory, Addons } = require("./models/Product");

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("API is working");
});

app.post("/api/category", async (req, res) => {
  try {
    const data = await Category.create(req.body);
    res.json(data);
  } catch (err) {
    res.json({ error: err.message });
  }
});

app.get("/api/category", async (req, res) => {
  try {
    const data = await Category.find();
    res.json(data);
  } catch (err) {
    res.json({ error: err.message });
  }
});


app.post("/api/subcategory", async (req, res) => {
  try {
    const data = await SubCategory.create(req.body);
    res.json(data);
  } catch (err) {
    res.json({ error: err.message });
  }
});

app.get("/api/subcategory/:category_id", async (req, res) => {
  try {
    const data = await SubCategory.find({
      category_id: req.params.category_id,
    });
    res.json(data);
  } catch (err) {
    res.json({ error: err.message });
  }
});

app.post("/api/addons", async (req, res) => {
  try {
    const data = await Addons.create(req.body);
    res.json(data);
  } catch (err) {
    res.json({ error: err.message });
  }
});

app.get("/api/addons/:subcategory_id", async (req, res) => {
  try {
    const data = await Addons.find({
      subcategory_id: req.params.subcategory_id,
    });
    res.json(data);
  } catch (err) {
    res.json({ error: err.message });
  }
});


mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log("MongoDB Error:", err));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () =>
  console.log(`Server running on http://localhost:${PORT}`)
);
