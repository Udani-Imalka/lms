import React from "react";

import Table from "../../components/Table";
import { FluidContainer } from "../../components/CommonComponents";

const Books = ({ catalog }) => {
  return (
    <FluidContainer>
      <Table data={catalog} />
    </FluidContainer>
  );
};

export default Books;
