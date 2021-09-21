import React, { useEffect, useState } from "react";

import Tabs from "../../components/Tabs";
import Spinner from "../../components/Spinner";

import Books from "./Books";

import { getBooks } from "../../api/bookAPI";

const Dashboard = () => {
  const [isLoading, setIslaoding] = useState(false);
  const [books, setBooks] = useState([]);

  useEffect(() => {
    setIslaoding(true);
    getBooks()
      .then((response) => {
        if (!response.error) {
          console.log(response.data);
          setBooks(response.data);
        }
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setIslaoding(false);
      });
  }, []);

  const contents = [
    { title: "Books", elements: <Books catalog={books} /> },
    { title: "Members", elements: <h1>Contents of memebers go here</h1> },
  ];

  return isLoading ? (
    <Spinner />
  ) : (
    books.length > 0 && <Tabs contents={contents} />
  );
};

export default Dashboard;