import { Box } from "@mui/material";
import Header from "../../components/Header";
import BarChart from "../../components/BarChart";

import React from "react";

const Bar = () => {
  return (
    <Box m="9px">
      <Header title={"Bar Chart"} subtitle={"This is a bar chart."} />
      <Box height="75vh">
        <BarChart />
      </Box>
    </Box>
  );
};

export default Bar;
