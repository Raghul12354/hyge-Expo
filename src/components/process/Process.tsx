import React from "react";
import Title from "../Title/Title";
import { Box } from "@mui/material";
import BasicTabs from "./Tabs";

const Process = () => {
  return (
    <Box
      sx={{
        px: { xs: "1.5em", md: "10em" },
        pt: { xs: "3em", md: "5em" },
        pb: { xs: "3em", md: "0" },
      }}
    >
      <Title
        color="black"
        title="Process"
        heading="From Point A to B, 
        with Care."
        deskWidth="10em"
        mobWidth="100%"
      />
      <BasicTabs />
    </Box>
  );
};

export default Process;