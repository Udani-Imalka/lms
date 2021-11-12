const express = require("express");
const mongoose = require("mongoose");

const Book = require("./models/book");
const Member = require("./models/member");

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

  const book = await Book.findById(id);
  res.send(book);
});

//book : create book details
//author,title
server.post("/book", async (req, res) => {
  const { title, author } = req.body;

  const book = new Book({ title, author });
  const response = await book.save();
  res.send(book);
});

// /book/:id put:Edit book
//author,title
server.put("/book/:id", async (req, res) => {
  const id = req.params.id;
  const { title, author } = req.body;

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

  const book = await Book.findByIdAndUpdate(id, {
    isAvailable: true,
    burrowMemberId: "",
    burrowDate: "",
  });
  res.send(book);
});

// /book/:id/delete : Delete book
// /book/1

server.delete("/book/:id", async (req, res) => {
  const id = req.params.id;

  // books = books.filter((book) => book.id !== id);
  // res.send(id);

  const book = await Book.findByIdAndDelete(id);
  res.send(book);
});

//  *****************   Member details    ********************

server.get("/member", async (req, res) => {
  const members = await Member.find();
  res.send(members);
});

server.get("/member/:id", async (req, res) => {
  const id = req.params.id;
  // const member = members.find((member) => member.id === id);
  const member = await Member.findById(id);
  res.send(member);
});

server.post("/member", async (req, res) => {
  const { firstName, lastName, nic, address, contactNumber, userType } =
    req.body;

  const member = new Member({
    firstName,
    lastName,
    nic,
    address,
    contactNumber,
    userType,
  });

  const response = await member.save();
  res.send(member);
});

server.put("/member/:id", async (req, res) => {
  const id = req.params.id;
  const { firstName, lastName, nic, address, contactNumber, userType } =
    req.body;

  const member = await Member.findByIdAndUpdate(id, {
    firstName,
    lastName,
    nic,
    address,
    contactNumber,
    userType,
  });
  res.send(member);
});

server.delete("/member/:id", async (req, res) => {
  const id = req.params.id;
  // const member = members.findIndex((member) => member.id === id);
  const member = await Member.findByIdAndDelete(id);
  //Member.splice(member, 1);
  res.send(member);
});
