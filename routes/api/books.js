const router = require("express").Router();
const booksController = require("../../controllers/booksController");

// Matches with "/api/books"  to get all saved books and save a new book
router.route("/")
  .get(booksController.findAll)
  .post(booksController.create);

// Matches with "/api/books/:id" to delete a saved book
router
  .route("/:id")
  .delete(booksController.remove);

module.exports = router;
