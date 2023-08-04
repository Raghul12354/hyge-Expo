import { Box } from "@mui/material";
import React from "react";
import Title from "../Title/Title";
import BasicAccordion from "./Accordion";

const Locations = () => {
  return (
    <Box
      id="locations"
      sx={{
        px: { xs: "1.5em", md: "10em" },
        py: { xs: "3em", md: "5em" },
      }}
    >
      <Title
        color="black"
        title="Locations"
        heading="Export Locations"
        deskWidth="100%"
        mobWidth=""
      />
      <BasicAccordion />
    </Box>
  );
};

export default Locations;
