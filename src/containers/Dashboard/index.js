import React, { useEffect, useState } from "react";

import Tabs from "../../components/Tabs";
import Spinner from "../../components/Spinner";

import Books from "../Dashboard/Books/index";

import { getBooks } from "../../api/bookAPI";

export const Dashboard = () => {
  const [isLoading, setIslaoding] = useState(false);
  const [book, setBook] = useState([]);

  useEffect(() => {
    setIslaoding(true);
    getBooks()
      .then((response) => {
        if (!response.error) {
          setBook(response.data);
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
    { title: "Books", elements: <Books catalog={book} /> },
    { title: "Members", elements: <h1>Contents of memebers go here</h1> },
  ];

  return isLoading ? <Spinner /> : <Tabs contents={contents} />;
};

export default Dashboard;
