const express = require("express");
const router = express.Router();
const Blog = require("../models/data");

//Getting all
router.get("/", async (req, res) => {
  // res.send("Hello World")
  try {
    const blogs = await Blog.find();
    res.json(blogs);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});
//Getting one
router.get("/:id", getBlog, (req, res) => {
  res.json(res.blog);
});
//Creating One
router.post("/", async (req, res) => {
  const blog = new Blog({
    title: req.body.title,
    pages: req.body.pages,
  });

  try {
    const newBlog = await blog.save();
    res.status(201).json(newBlog);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});
//Updating One
router.patch("/:id", getBlog, async (req, res) => {
  if (req.body.title != null) {
    res.blog.title = req.body.title;
  }
  if (req.body.pages != null) {
    res.blog.pages = req.body.pages;
  }

  try {
    let updatedBlog = res.blog.save();
    res.json(res.blog);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});
//Deleting One
router.delete("/:id", getBlog, async (req, res) => {
  try {
    await res.blog.deleteOne();
    res.json({ message: `Removed the blog with ID ${req.params.id}` });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

//MiddleWare
async function getBlog(req, res, next) {
  let blog;
  try {
    blog = await Blog.findById(req.params.id);
    if (blog == null) {
      return res.status(404).json({
        message: err.message,
      });
    }
  } catch (err) {
    res.status(500).json({ message: err.message });
  }

  res.blog = blog;
  next();
}

module.exports = router;
