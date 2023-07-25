"use client";
import React, { useState } from "react";
import Image from "next/image";
import { Box, Button, Typography } from "@mui/material";

import Title from "../Title/Title";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import RemoveIcon from "@mui/icons-material/Remove";

// paragraphy: what is [company name] ?

const About = () => {
  const info =
    "your trusted partner in import and export. With our extensive industry knowledge and global network, we simplify international trade for businesses of all sizes. From navigating customs procedures to sourcing quality products and expanding market reach, we provide tailored solutions that ensure compliance, efficiency, and growth. Our transparent approach, dedicated team, and commitment to sustainability make us the ideal choice for seamless import and export operations. Experience the power of global trade with [Company Name]. Contact us today to explore new horizons for your business.";

  const [readMore, setReadMore] = useState(false);
  const iconStyles = {
    color: "white",
    fontSize: { xs: "1.8em", md: "2em" },
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: { xs: "center", md: "space-between" },
        flexDirection: { xs: "column", md: "row" },
        px: { xs: "1.5em", md: "10em" },
        bgcolor: "black",
        color: "white",
        gap: { xs: "2.8em", md: "4em" },
        py: { xs: "3em", md: "10em" },
      }}
    >
      {/* first section */}
      <Box
        sx={{
          border: "1px solid",
          borderWidth: { xs: "0 0 1px 0", md: "0 1px  0 0" },
          borderColor: "primary.light",
          pr: { xs: "0", md: "3em" },
        }}
      >
        <Title
          color="white"
          deskWidth="7em"
          mobWidth="7em"
          title="About us"
          heading="Welcome to Hyge Exports"
        />
        <Typography
          sx={{
            fontSize: { xs: "1em", md: "1.1em" },
            lineHeight: "1.5em",
            fontWeight: "400",
            width: { xs: "100%", md: "45em" },
          }}
        >
          {readMore ? info : `${info.substring(0, 406)}...`}
        </Typography>
        <Box
          onClick={() => setReadMore(!readMore)}
          sx={{
            display: "flex",
            alignItems: "center",
            gap: "1em",
            border: "1px solid",
            borderWidth: "1px 0 0 0",
            borderColor: "primary.light",
            py: { xs: "1.5em", md: "3em" },
            mt: { xs: "2em", md: "2.5em" },
            cursor: "pointer",
            bgcolor: "transparent",
          }}
        >
          <Button
            disableRipple
            sx={{
              bgcolor: "secondary.main",
              borderRadius: "100%",
              p: { xs: "1.2em", md: "1.3em" },
              ":hover": { bgcolor: "secondary.main" },
            }}
          >
            {readMore ? (
              <RemoveIcon sx={iconStyles} />
            ) : (
              <AddOutlinedIcon sx={iconStyles} />
            )}
          </Button>
          <Typography
            sx={{
              fontSize: { xs: "1em", md: "1.1em" },
              fontWeight: "400",
              textTransform: "capitalize",
            }}
          >
            {readMore ? "view less" : "view all"}
          </Typography>
        </Box>
      </Box>
      {/* image */}
      <Box
        sx={{
          position: "relative",
          width: { xs: "100%", md: "100%" },
          height: { xs: "300px", md: "600px" },
        }}
      >
        <Image
          src="https://i.postimg.cc/qgVVp9Kv/About-img-desktop.png"
          alt="About"
          fill={true}
        />
      </Box>
    </Box>
  );
};

export default About;
