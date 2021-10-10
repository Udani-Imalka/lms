import React, { useEffect, useState } from "react";
import { useSelector,useDispatch } from "react-redux";

import Tabs from "../../components/Tabs";
import Spinner from "../../components/Spinner";

import Books from "./Books/index";

import { setBooks } from "../../store/booksSlice";
import { getBooks } from "../../api/bookAPI";

const Dashboard = () => {
  const [isLoading, setIslaoding] = useState(false);
 
  const booksFromRedux = useSelector((state) => state.books.value);
  const dispatch = useDispatch();

  useEffect(() => {
    setIslaoding(true);
    getBooks()
      .then((response) => {
        if (!response.error) {
          console.log(response.data);
          dispatch(setBooks(response.data));
        }
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setIslaoding(false);
      });
  }, [dispatch]);

  const contents = [
    { title: "Books", elements: <Books catalog={booksFromRedux} /> },
    { title: "Members", elements: <h1>Contents of memebers go here</h1> },
  ];

  return isLoading ? <Spinner /> : <Tabs contents={contents} />;
};

export default Dashboard;
