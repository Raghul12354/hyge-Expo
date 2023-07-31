"use client";
import React from "react";
import Image from "next/image";
import {
  Box,
  Button,
  TextField,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import Title from "../Title/Title";

const Contact = () => {
  const theme = useTheme();
  const SmallerDevice = useMediaQuery(theme.breakpoints.down("md"));

  const rows = SmallerDevice ? 5 : 6;
  const titleStyles = {
    fontSize: { xs: "1.1em", md: "1.3em" },
  };
  const descStyles = {
    fontSize: { xs: "1.1em", md: "1.3em" },
    fontWeight: "600",
    lineHeight: "1.7em",
  };
  const inputStyles = {
    "& .MuiInputLabel-root": {
      color: "black !important",
    },
    "& .MuiInput-root::after": {
      borderColor: "black !important",
    },
  };
  return (
    <Box sx={{ px: { xs: "1.5em", md: "10em" }, py: { xs: "3em", md: "2em" } }}>
      <Title
        color="black"
        title="Contact us"
        heading="Get in touch with us"
        deskWidth="100%"
        mobWidth="7em"
      />
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          flexDirection: { xs: "column", md: "row" },
          gap: { xs: "3em", md: "6em" },
        }}
      >
        <Box sx={{ width: { xs: "100%", md: "50%" }, order: { xs: 2, md: 1 } }}>
          <Box
            sx={{
              position: "relative",
              width: "100%",
              height: { xs: "200px", md: "300px" },
            }}
          >
            <Image
              src="https://i.postimg.cc/SQ7nQrYW/Contact-desktop.png"
              alt="contactus"
              fill={true}
              style={{ objectFit: "cover" }}
            />
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              flexDirection: { xs: "column", md: "row" },
              textAlign: { xs: "center", md: "left" },
              mt: "1.8em",
            }}
          >
            <Box>
              <Typography sx={titleStyles}>Our Location</Typography>
              <Typography
                sx={{ ...descStyles, width: { xs: "100%", md: "10em" } }}
              >
                Dot Cowork - Tidel Park, Chennai
              </Typography>
            </Box>
            <Box>
              <Typography sx={titleStyles}>Write to us</Typography>
              <Typography sx={descStyles}>support@hygeinfotech.com</Typography>
            </Box>
          </Box>
        </Box>
        <Box
          sx={{
            width: { xs: "100%", md: "50%" },
            display: "flex",
            flexDirection: "column",
            gap: "2em",
            order: { xs: 1, md: 2 },
          }}
        >
          <TextField sx={inputStyles} label="Your Name" variant="standard" />
          <TextField sx={inputStyles} label="Your E-mail" variant="standard" />
          <TextField sx={inputStyles} label="Your  Phone" variant="standard" />
          <TextField
            sx={inputStyles}
            multiline
            rows={rows}
            label="Message"
            variant="standard"
          />
          <Button
            variant="contained"
            sx={{
              bgcolor: "secondary.main",
              fontSize: { xs: "1em", md: "1.1em" },
              fontWeight: "600",
              py: { xs: ".8em", md: "1em" },
              px: { xs: "2em", md: "3em" },
              width: "fit-content",
              color: "white",
              ":hover": { bgcolor: "secondary.main" },
            }}
          >
            Send Message
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default Contact;