const Book = require("../model/bookModel");

const getBooks = async (req, res) => {
  try {
    const book = await Book.find();

    //console.log(book);

    res.status(200).json({ book });
  } catch (err) {
    res.status(500).json({ message: "Internal Server Error!" });
  }
};

module.exports = getBooks;
