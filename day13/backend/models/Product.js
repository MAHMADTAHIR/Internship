const mongoose = require("mongoose");
const categorySchema = new mongoose.Schema({
  name: String,
  description: String,
});

const subCategorySchema = new mongoose.Schema({
  category_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Category",
  },
  name: String,
  price: Number,
});

const addonsSchema = new mongoose.Schema({
  subcategory_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "SubCategory",
  },
  name: String,
  price: Number,
});

module.exports = {
  Category: mongoose.model("Category", categorySchema),
  SubCategory: mongoose.model("SubCategory", subCategorySchema),
  Addons: mongoose.model("Addons", addonsSchema),
};
