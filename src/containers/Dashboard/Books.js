import React, { useState } from "react";

import Table from "../../components/Table";
import { FluidContainer } from "../../components/CommonComponents";

import Book from "./Book";

const Books = ({ catalog }) => {
  const [selectedBookId, setSelectedBookId] = useState(null);

  const handleTableRowClick = (id) => {
    setSelectedBookId(id);
  };

  const handleBookViewBackClick = () => {
    setSelectedBookId(null);
  };

  return selectedBookId === null ? (
    <FluidContainer>
      <Table
        data={catalog}
        handleRowClick={handleTableRowClick}
        instruction="Click row the view"
      />
    </FluidContainer>
  ) : (
    <Book id={selectedBookId} handleBackClick={handleBookViewBackClick} />
  );
};

export default Books;
