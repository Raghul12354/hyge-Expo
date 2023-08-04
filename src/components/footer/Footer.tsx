import React from "react";
import Image from "next/image";

import { Box, Button, Link, Typography } from "@mui/material";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

const Footer = () => {
  const linkBoxStyles = {
    display: "flex",
    flexDirection: "column",
    gap: "1em",
  };
  const titleStyles = {
    fontSize: { xs: "1em", md: "1.4em" },
    fontWeight: "700",
    mb: ".5em",
  };
  const addressStyles = {
    fontSize: { xs: "1em", md: "1.2em" },
    fontWeight: "600",
  };
  const linkStyles = {
    fontSize: { xs: "1em", md: "1.2em" },
    color: "black",
    textDecoration: "none",
  };
  const boxStyles = { py: { xs: "1em", md: "5em" } };
  return (
    <Box
      id="footer"
      sx={{
        pt: { xs: "3em", md: "5em" },
        pb: { xs: ".5em", md: "1em" },
      }}
    >
      <Box
        sx={{
          border: "1px solid #8F8F8F",
          borderWidth: "1px 0",
          display: "flex",
          justifyContent: { xs: "center", md: "space-between" },
          flexDirection: { xs: "column", md: "row" },
          pt: { xs: "2em", md: "5em" },
          px: { xs: "1.5em", md: "10em" },
        }}
      >
        <Box sx={boxStyles}>
          <Box
            sx={{
              position: "relative",
              width: { xs: "115px", md: "150px" },
              height: { xs: "60px", md: "75px" },
            }}
          >
            <Image
              src="https://i.postimg.cc/Yqx6zwr8/logo.png"
              alt="Logo"
              fill={true}
              style={{ objectFit: "contain" }}
            />
          </Box>
          <Typography
            sx={{
              fontSize: { xs: "1em", md: "1.1em" },
              fontWeight: "600",
              width: "12em",
              mt: ".5em",
              ml: { xs: "2.5em", md: "3em" },
            }}
          >
            From Local to Global, We Ship Your Success!
          </Typography>
        </Box>
        <Box
          sx={{
            ...boxStyles,
            border: "1px solid #8F8F8F",
            borderWidth: "0 1px",
            px: { xs: "0", md: "12em" },
            display: { xs: "none", md: "block" },
          }}
        >
          <Typography sx={titleStyles}>Quick Links</Typography>
          <Box sx={{ display: "flex", gap: "2em" }}>
            <Box sx={linkBoxStyles}>
              <Link href="#home" sx={linkStyles}>
                Home
              </Link>
              <Link href="#about" sx={linkStyles}>
                About us
              </Link>
              <Link href="#services" sx={linkStyles}>
                Services
              </Link>
              <Link href="#contact" sx={linkStyles}>
                Contact us
              </Link>
            </Box>
            <Box sx={linkBoxStyles}>
              <Link href="#process" sx={linkStyles}>
                Process
              </Link>
              <Link href="#locations" sx={linkStyles}>
                Locations
              </Link>
            </Box>
          </Box>
        </Box>
        {/* address */}
        <Box sx={{ ...boxStyles, textAlign: { xs: "center", md: "left" } }}>
          <Typography sx={titleStyles}>Address</Typography>
          <Typography
            sx={{
              ...addressStyles,
              width: { xs: "100%", md: "15em" },
              mb: ".5em",
            }}
          >
            Dot Cowork - Tidel Park, 1st Floor D Block, Tharamani, Chennai -
            600113
          </Typography>
          <Typography
            sx={{
              fontSize: { xs: "1em", md: "1.2em" },
              textDecoration: "underline 1px solid #8F8F8F",
              textUnderlineOffset: "3px",
              fontWeight: "600",
              mb: ".4em",
            }}
          >
            support@hygeinfotech.com
          </Typography>
          <Typography sx={{ ...addressStyles }}>
            Mon - Friday, 8am : 5pm
          </Typography>
        </Box>
      </Box>
      {/* copyrights */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: { xs: "center", md: "space-between" },
          mt: "1em",
          px: { xs: "1.5em", md: "3em" },
        }}
      >
        <div></div>
        <Typography
          sx={{
            fontSize: { xs: ".8em", md: "1em" },
            fontWeight: "600",
            textAlign: "center",
          }}
        >
          © Copyright 2023{" "}
          <span style={{ color: "#FFCC00" }}>hyge Exports,</span> All Rights
          Reserved.{" "}
        </Typography>
        <Button
          href="#home"
          disableRipple
          sx={{
            fontSize: "1em",
            display: { xs: "none", md: "flex" },
            flexDirection: "column",
            textTransform: "capitalize",
            bgcolor: "transparent",
            color: "black",
            ":hover": { bgcolor: "transparent" },
            p: 0,
          }}
        >
          <KeyboardArrowUpIcon
            sx={{ color: "primary.main", fontSize: "3em", mb: "-.2em" }}
          />
          Go to Top
        </Button>
      </Box>
    </Box>
  );
};

export default Footer;
