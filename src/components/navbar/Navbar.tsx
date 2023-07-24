import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Box, Button, Link, Typography } from "@mui/material";

import MenuSharpIcon from "@mui/icons-material/MenuSharp";
import CloseIcon from "@mui/icons-material/Close";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const handleMenu = () => {
    setOpen(!open);
  };

  useEffect(() => {
    const handleScroll = () => {
      setOpen(false);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const linkIconStyles = {
    display: { xs: "block", md: "none" },
    color: "primary.main",
  };
  const linkTypoStyles = {
    fontSize: { xs: "1em", md: "1.1em" },
    fontWeight: "600",
    textTransform: "uppercase",
    width: { xs: "auto", md: "7em" },
    textAlign: "center",
  };
  const linkStyles = {
    mx: { xs: "1.7em", md: "1em" },
    color: "white",
    my: { xs: "1.1em", md: "0" },
    textDecoration: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  };
  const menuStyles = {
    fontSize: "2.5em",
    color: "white",
    cursor: "pointer",
    m: ".2em",
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        borderBottom: "1px solid white",
        zIndex: 1,
        bgcolor: { xs: "white", md: "transparent" },
      }}
    >
      {/* logo */}
      <Box
        sx={{
          position: "relative",
          width: { xs: "115px", md: "150px" },
          height: { xs: "60px", md: "75px" },
          ml: { xs: "1em", md: "2em" },
          mb: { xs: ".2em", md: ".5em" },
          zIndex: 1,
        }}
      >
        <Link href="">
          <Image
            src="https://i.postimg.cc/Yqx6zwr8/logo.png"
            alt="Hyge Export"
            priority
            fill={true}
          />
        </Link>
      </Box>
      <Box
        sx={{
          display: {
            xs: open ? "flex" : "none",
            sm: open ? "flex" : "none",
            lg: "flex",
          },
          alignItems: "center",
          flexDirection: { xs: "column", md: "row" },
          position: { xs: "absolute", md: "initial" },
          top: { xs: "4.4em", md: "auto" },
          bgcolor: { xs: "black", md: "transparent" },
          width: { xs: "100%", md: "auto" },
          py: { xs: "2em", md: "0" },
          zIndex: 1,
        }}
      >
        {/* links */}
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            width: "100%",
            zIndex: 1,
          }}
        >
          <Link href="" sx={linkStyles}>
            <Typography sx={linkTypoStyles}>home</Typography>
            <ArrowForwardIosIcon sx={linkIconStyles} />
          </Link>
          <Link href="" sx={linkStyles}>
            <Typography sx={linkTypoStyles}>about us</Typography>
            <ArrowForwardIosIcon sx={linkIconStyles} />
          </Link>
          <Link href="" sx={linkStyles}>
            <Typography sx={linkTypoStyles}>services</Typography>
            <ArrowForwardIosIcon sx={linkIconStyles} />
          </Link>
          <Link href="" sx={linkStyles}>
            <Typography sx={linkTypoStyles}>process</Typography>
            <ArrowForwardIosIcon sx={linkIconStyles} />
          </Link>
          <Link href="" sx={linkStyles}>
            <Typography sx={linkTypoStyles}>locations</Typography>
            <ArrowForwardIosIcon sx={linkIconStyles} />
          </Link>
          <Link
            href=""
            sx={{ ...linkStyles, display: { xs: "flex", md: "none" } }}
          >
            <Typography sx={linkTypoStyles}>contact us</Typography>
            <ArrowForwardIosIcon sx={linkIconStyles} />
          </Link>
        </Box>
        {/* btn */}
        <Box
          sx={{
            display: { xs: "none", md: "flex" },
            alignItems: "center",
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          <Button
            disableRipple
            href=""
            sx={{
              ...linkStyles,
              mx: { xs: "1.7em", md: 0 },
              fontSize: { xs: "1em", md: "1.1em" },
              fontWeight: "600",
              textTransform: "uppercase",
              border: "1px solid white",
              borderWidth: "0 1px 0 1px",
              borderRadius: "0",
              ":hover": { bgcolor: "transparent" },
              px: { xs: "0", md: "2em" },
            }}
          >
            <Box
              sx={{
                position: "relative",
                width: { xs: "1em", md: "1.5em" },
                height: { xs: "1em", md: "1.5em" },
                mr: ".5em",
              }}
            >
              <Image
                src="https://i.postimg.cc/6pKTp7Cp/Man-On-Phone.png"
                alt=""
                fill={true}
              />
            </Box>
            contact us
          </Button>
          <MenuSharpIcon
            sx={{
              fontSize: "2.4em",
              color: "white",
              cursor: "pointer",
              mx: ".5em",
            }}
          />
        </Box>
      </Box>
      {/* mobile menu */}
      <Button
        onClick={handleMenu}
        disableRipple
        sx={{
          display: { xs: "block", md: "none" },
          bgcolor: "black !important",
          zIndex: 1,
          borderRadius: "0",
        }}
      >
        {" "}
        {open ? (
          <CloseIcon sx={menuStyles} />
        ) : (
          <MenuSharpIcon sx={menuStyles} />
        )}
      </Button>
    </Box>
  );
};

export default Navbar;