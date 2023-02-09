import React from "react";
import { Box } from "@mui/material";
import Header from "../../components/Header";
import LineChart from "../../components/LineChart";

const Line = () => {
  return (
    <Box m="9px">
      <Header title={"Line Chart"} subtitle={"This is a Line chart."} />
      <Box height="75vh">
        <LineChart />
      </Box>
    </Box>
  );
};

export default Line;
