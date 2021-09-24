import React, { useEffect, useState } from "react";
import Tabs from "../components/Tabs";

import { getBooks } from "../api/bookAPI";
import Spinner from "../components/Spinner";

const Dashboard = () => {
  const [isLoading, setIslaoding] = useState(false);

  useEffect(() => {
    setIslaoding(true);
    getBooks()
      .then((response) => {
        if (!response.error) {
          console.log(response.data);
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
    { title: "Books", elements: <h1>Contents of books go here</h1> },
    { title: "Members", elements: <h1>Contents of memebers go here</h1> },
  ];

  return isLoading ? <Spinner /> : <Tabs contents={contents} />;
};

export default Dashboard;
