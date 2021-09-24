import React from "react";

import Table from "../../components/Table";
import { FluidContainer } from "../../components/CommonComponents";

const Books = ({ catalog }) => {

const updatedCatalog = [
  ...catalog,
  {
    author: "Udani Imalka",
    burrowedDate: "",
    burrowedMemberId: "",
    id: "3",
    isAvailable: true,
    title: "React Develpoment in 2021",
  },
  {
    author: "Udani Imalka",
    burrowedDate: "",
    burrowedMemberId: "",
    id: "3",
    isAvailable: true,
    title: "React Develpoment in 2021",
  },
]

const handleTableRowClick = (id) => {
  console.log(id);
}

  return (
    <FluidContainer>
      <Table data={updatedCatalog} handleRowClick={handleTableRowClick} instruction="Click row the view"/>
    </FluidContainer>
  );
};

export default Books;
