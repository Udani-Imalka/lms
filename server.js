const express = require("express");
const mongoose = require("mongoose");

const Book = require("./models/book");

const server = express();

const databaseURL =
  "mongodb+srv://testUser:test%23123@cluster0.jcm5l.mongodb.net/lms?retryWrites=true&w=majority";

const PORT = process.env.PORT || 3000;

mongoose
  .connect(databaseURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((result) => {
    console.log("Connected to DB");
    server.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.log(err);
  });

server.use(express.json());
server.use(express.urlencoded({ extended: true }));

let books = [
  {
    id: "1",
    title: "Harry Porter",
    author: "J.K.Rowling",
    isAvailable: true,
    burrowMemberId: "",
    burrowDate: "",
  },
  {
    id: "2",
    title: "Charlie and the Chocolate Factory",
    author: "Roald Dahl",
    isAvailable: true,
    burrowMemberId: "",
    burrowDate: "",
  },
];

//book:View all books
server.get("/book", async (req, res) => {
  // res.send(books);
  const books = await Book.find();
  res.send(books);
});

//book/1: Vew book 1
//book/:id
server.get("/book/:id", async (req, res) => {
  const id = req.params.id;
  // const book = books.find((book) => book.id === id);
  // res.send(book);
  const book = await Book.findById(id);
  res.send(book);
});

//book : create book details
//author,title
server.post("/book", async (req, res) => {
  const { title, author } = req.body;

  // const book = {
  //   id: Math.random().toString(16).slice(2),
  //   title,
  //   author,
  //   isAvailable: true,
  //   burrowMemberId: "",
  //   burrowDate: "",
  // };
  // books.push(book);
  // res.send(book);

  const book = new Book({ title, author });
  const response = await book.save();
  res.send(book);
});

// /book/:id put:Edit book
//author,title
server.put("/book/:id", async (req, res) => {
  const id = req.params.id;
  const { title, author } = req.body;

  // const bookIndex = books.findIndex((book) => book.id === id);
  // books[bookIndex] = {
  //   ...books[bookIndex],
  //   title,
  //   author,
  // };
  //  res.send(books[bookIndex]);

  const book = await Book.findByIdAndUpdate(id, {
    title,
    author,
  });
  res.send(book);
});

// /book/:id/burrow: Burrow Book
// /book/1/burrow
// burrowMemberId,burrowDate
server.put("/book/:id/burrow", async (req, res) => {
  const id = req.params.id;
  const { burrowMemberId, burrowDate } = req.body;

  // const bookIndex = books.findIndex((book) => book.id === id);
  // books[bookIndex] = {
  //   ...books[bookIndex],
  //   isAvailable: false,
  //   burrowMemberId,
  //   burrowDate,
  // };

  // res.send(books[bookIndex]);
  const book = await Book.findByIdAndUpdate(id, {
    isAvailable: false,
    burrowMemberId,
    burrowDate,
  });

  res.send(book);
});

// /book/:id/return : return book
// /book/1/return
server.put("/book/:id/return", async (req, res) => {
  const id = req.params.id;

  // const bookIndex = books.findIndex((book) => book.id === id);
  // books[bookIndex] = {
  //   ...books[bookIndex],
  //   isAvailable: true,
  //   burrowMemberId: "",
  //   burrowDate: "",
  // };

  // res.send(books[bookIndex]);

  const book = await Book.findByIdAndUpdate(id, {
    isAvailable: true,
    burrowMemberId: "",
    burrowDate: "",
  });
  res.send(book);
});

// /book/:id/delete : Delete book
// /book/1

server.delete("/book/:id",  async(req, res) => {
  const id = req.params.id;

  // books = books.filter((book) => book.id !== id);
  // res.send(id);

  const book = await Book.findByIdAndDelete(id);
  res.send(book);
});
