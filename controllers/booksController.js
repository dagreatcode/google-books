const express = require("express");
const router = express.Router();
const db = require("../models");

router.get("/", (req, res) => {
  db.Book.find({})
    .populate("author", "firstName lastName")
    .then((foundBooks) => {
      res.json(foundBooks);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({
        error: true,
        data: null,
        message: "Failed to retrieve all books.",
      });
    });
});

router.get("/:id", (req, res) => {
  db.Book.findOne({ _id: req.params.id })
    .populate("author")
    .then((foundBook) => {
      res.json(foundBook);
    });
});

router.post("/", (req, res) => {
  const newBook = {
    title: req.body.title,
    pages: req.body.pages,
    author: req.body.author,
  };
  db.Book.create(newBook).then((newBook) => {
    res.json(newBook);
  });
});

router.put("/:id", (req, res) => {
  const updatedBook = {
    title: req.body.title,
    pages: req.body.pages,
    author: req.body.author,
  };
  db.Book.findOneAndUpdate(
    { _id: req.params.id },
    updatedBook,
    { new: true }
  )
    .then((updatedBook) => {
      if (!updatedBook) {
        res.status(404).json({
          error: true,
          data: null,
          message: "Unable to find that book.",
        });
      } else {
        res.json({
          error: false,
          data: updatedBook,
          message: "Successfully updated book.",
        });
      }
    })
    .catch((err) => {
      res.status(500).json({
        error: true,
        data: null,
        message: "An error occurred updating your book.",
      });
    });
});

router.delete("/:id", (req, res) => {
  db.Book.findByIdAndDelete(req.params.id).then((result) => {
    res.json(result);
  });
});

module.exports = router;
