import React, { useEffect, useState } from "react";

import Tabs from "../../components/Tabs";
import Spinner from "../../components/Spinner";



import { getBooks } from "../../api/bookAPI";

const Dashboard = () => {
  const [isLoading, setIslaoding] = useState(false);

  useEffect(() => {
    setIslaoding(true);
    getBooks()
      .then((response) => {
        if (!response.error) {

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

  return isLoading ? <Spinner /> : <Tabs contents={contents} />;
};

export default Dashboard;
