import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import Tabs from "../../components/Tabs";
import Spinner from "../../components/Spinner";


import Books from "../Dashboard/Books/index";
import Members from "../Dashboard/Members/index";

import { setBooks } from "../../store/booksSlice";
import { setMembers } from "../../store/membersSlice";

import { getBooks } from "../../api/bookAPI";
import { getMembers } from "../../api/memberAPI";



const Dashboard = () => {
  const [isLoading, setIslaoding] = useState(false);

  const books = useSelector((state) => state.books.value);
  const members = useSelector((state) => state.members.value);
  const dispatch = useDispatch();

  useEffect(() => {
    setIslaoding(true);
    getBooks()
      .then((response) => {
        if (!response.error) {
          dispatch(setBooks(response.data));
        }
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setIslaoding(false);
      });
      getMembers()
      .then((response) => {
        if (!response.error) {
          dispatch(setMembers(response.data));
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
    { title: "Books", elements: <Books catalog={books} /> },

    { title: "Members", elements: <Members catalog={members}/> },
  ];

  

   return isLoading ? <Spinner /> : <Tabs contents={contents} />;
};

export default Dashboard;
