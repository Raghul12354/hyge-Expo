"use client";
import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";

import { Box, Button, Divider, useMediaQuery, Typography } from "@mui/material";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";

export default function BasicAccordion() {
  const AccordionData = [
    {
      id: 1,
      title: "Mahabalipuram to worldwide",
      desc: " Mahabalipuram to worldwide asd to asd asd asd asdasd asdads ad asd a to worldwide",
    },
    {
      id: 2,
      title: "Poultry to Malaysia",
      desc: " Mahabalipuram to worldwide asd to asd asd asd asdasd asdads ad asd a to worldwide",
    },
    {
      id: 3,
      title: "Onions to Philippines",
      desc: " Mahabalipuram to worldwide asd to asd asd asd asdasd asdads ad asd a to worldwide",
    },
    {
      id: 4,
      title: "Surat & Tirupur garments to worldwide",
      desc: " Mahabalipuram to worldwide asd to asd asd asd asdasd asdads ad asd a to worldwide",
    },
    {
      id: 5,
      title: "Leather goods exportations",
      desc: " Mahabalipuram to worldwide asd to asd asd asd asdasd asdads ad asd a to worldwide",
    },
    {
      id: 6,
      title: "Fertilizer exportation",
      desc: " Mahabalipuram to worldwide asd to asd asd asd asdasd asdads ad asd a to worldwide",
    },
    {
      id: 7,
      title: "Textile & Apparels exportation",
      desc: " Mahabalipuram to worldwide asd to asd asd asd asdasd asdads ad asd a to worldwide",
    },
    {
      id: 8,
      title: "Automobiles & Auto components",
      desc: " Mahabalipuram to worldwide asd to asd asd asd asdasd asdads ad asd a to worldwide",
    },
    {
      id: 9,
      title: "Ramanathapuram Marine products",
      desc: " Mahabalipuram to worldwide asd to asd asd asd asdasd asdads ad asd a to worldwide",
    },
    {
      id: 10,
      title: "Vellore Leather products exporting",
      desc: " Mahabalipuram to worldwide asd to asd asd asd asdasd asdads ad asd a to worldwide",
    },
    {
      id: 11,
      title: "Tiruvarur agriculture products",
      desc: " Mahabalipuram to worldwide asd to asd asd asd asdasd asdads ad asd a to worldwide",
    },
    {
      id: 12,
      title: "Handloom, powerloom and Hosiery products from Erode, Tirupur",
      desc: " Mahabalipuram to worldwide asd to asd asd asd asdasd asdads ad asd a to worldwide",
    },
    {
      id: 13,
      title: "Kanchipuram Silks export",
      desc: " Mahabalipuram to worldwide asd to asd asd asd asdasd asdads ad asd a to worldwide",
    },
  ];

  const [showAll, setShowAll] = React.useState(false);

  const handleShowBtn = () => {
    setShowAll(!showAll);
  };

  const mobBreakPoint = useMediaQuery((theme: any) =>
    theme.breakpoints.down("sm")
  );
  return (
    <Box>
      {AccordionData.slice(
        0,
        mobBreakPoint && !showAll ? 6 : AccordionData.length
      ).map((item) => {
        const { id, title, desc } = item;
        return (
          <Accordion
            key={id}
            sx={{
              bgcolor: "transparent",
              boxShadow: "none",
              border: "1px solid black",
              borderWidth: "1px 0 0  0",
              py: { xs: "1.3em", md: "1.5em" },
              borderRadius: "0px !important",
              "& .css-sh22l5-MuiButtonBase-root-MuiAccordionSummary-root": {
                p: "0",
              },
              "& .css-m98dz1-MuiButtonBase-root-MuiAccordionSummary-root": {
                p: "0",
              },
            }}
          >
            <AccordionSummary
              sx={{
                "& .css-yw020d-MuiAccordionSummary-expandIconWrapper": {
                  transition: "none",
                },
              }}
              expandIcon={
                <Button
                  sx={{
                    bgcolor: "secondary.main",
                    borderRadius: "100%",
                    p: { xs: "1em", md: "1.2em" },
                    ":hover": { bgcolor: "secondary.main" },
                  }}
                >
                  <AddOutlinedIcon
                    sx={{
                      fontSize: { xs: "2em", md: "2.2em" },
                      color: "white",
                    }}
                  />
                </Button>
              }
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography
                variant="h5"
                sx={{
                  fontSize: { xs: "1.1em", md: "1.3em" },
                  fontWeight: "600",
                  mr: "1em",
                }}
              >
                {title}
              </Typography>
            </AccordionSummary>
            <AccordionDetails sx={{ px: "0" }}>
              <Typography
                sx={{
                  fontSize: { xs: "1em", md: "1em" },
                  fontWeight: "400",
                  lineHeight: " 1.5em",
                }}
              >
                {desc}
              </Typography>
            </AccordionDetails>
          </Accordion>
        );
      })}
      <Divider sx={{ bgcolor: "black" }} />
      <Button
        onClick={handleShowBtn}
        sx={{
          display: { xs: "flex", md: "none" },
          alignItems: "center",
          bgcolor: "black",
          color: "white",
          mx: "auto",
          ":hover": { bgcolor: "black" },
          px: "1.5em",
          py: ".8em",
          my: "2em",
        }}
      >
        <AddOutlinedIcon sx={{ fontSize: "1.5em", mb: ".1em", mr: ".2em" }} />
        <Typography
          sx={{
            fontSize: "1.1em",
            fontWeight: "600",
            alignItems: "center",
            textTransform: "capitalize",
          }}
        >
          {showAll ? "View less" : "View All"}
        </Typography>
      </Button>
      <Divider
        sx={{ bgcolor: "black", display: { xs: "block", md: "none" } }}
      />
    </Box>
  );
}