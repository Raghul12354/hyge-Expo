"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Box, Typography } from "@mui/material";
import Navbar from "../navbar/Navbar";

const Hero = () => {
  const data = [
    {
      id: 1,
      title: "Expand your Business to new Markets",
      description:
        "Unlock global opportunities with our comprehensive export solutions. Take your business to new heights.",
      img: "https://i.postimg.cc/vTsx6VbZ/carousel-1.png",
    },
    {
      id: 2,
      title: "Seamless Export Processes",
      description:
        "Streamline your export operations with our expertise. From documentation to logistics, we've got you covered.",
      img: "https://i.postimg.cc/1Xhy1nwc/carousel-2.png",
    },
    {
      id: 3,
      title: "Quality Assurance Guaranteed",
      description:
        "Deliver top-quality products to your customers. Our stringent measures ensure compliance with international standards.",
      img: "https://i.postimg.cc/q7FkQZ7F/carousel-3.png",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrevBtn = () => {
    setActiveIndex((val) => (val === 0 ? data.length - 1 : val - 1));
  };

  const handleNextBtn = () => {
    setActiveIndex((val) => (val === data.length - 1 ? 0 : val + 1));
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      setActiveIndex((prevIndex) =>
        prevIndex === data.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);
    return () => clearInterval(intervalId);
  }, [data.length]);

  const arrowStyles = {
    position: "relative",
    width: "3em",
    height: "3em",
    cursor: "pointer",
    display: { xs: "none", md: "block" },
  };
  return (
    <Box id="home">
      <Box
        sx={{
          position: "relative",
          height: "100vh",
          width: "100%",
          overflow: "hidden",
        }}
      >
        <Navbar />
        {data.map((item, slidesIndex) => {
          const { id, img, title, description } = item;
          return (
            <Box
              key={id}
              sx={{
                position: "absolute",
                width: "100%",
                top: "0",
                left: `${(slidesIndex - activeIndex) * 100}%`,
                transition: "left 0.5s ease",
                height: "100vh",
              }}
            >
              <Image
                src={img}
                alt=""
                fill={true}
                priority
                style={{ zIndex: -1, objectFit: "fill" }}
              />
              <Box
                sx={{
                  zIndex: 1,
                  px: { xs: "1.3em", md: "5em" },
                  color: "white",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: { xs: "center", md: "space-between" },
                  height: { xs: "100vh", md: "90vh" },
                  textAlign: { xs: "center", md: "initial" },
                }}
              >
                <Box sx={arrowStyles} onClick={handlePrevBtn}>
                  <Image
                    src="https://i.postimg.cc/L51Bh7qF/Vectorleft.png"
                    alt=""
                    fill={true}
                    style={{ objectFit: "contain" }}
                  />
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    ml: { xs: "0", md: "30%" },
                  }}
                >
                  <Typography
                    variant="h1"
                    sx={{
                      fontSize: {
                        xs: "2.5em",
                        md: "4em",
                      },
                      fontWeight: "600",
                      lineHeight: "1.3em",
                      width: { xs: "100%", md: "8em" },
                    }}
                  >
                    {title}
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: { xs: "1em", md: "1.3em" },
                      fontWeight: "400",
                      lineHeight: "1.5em",
                      width: { xs: "100%", md: "25em" },
                      mt: { xs: "1em", md: ".5em" },
                    }}
                  >
                    {description}
                  </Typography>
                </Box>
                <Box sx={arrowStyles} onClick={handleNextBtn}>
                  <Image
                    src="https://i.postimg.cc/Vkcrz2sc/Vector-Right.png"
                    alt=""
                    fill={true}
                    style={{ objectFit: "contain" }}
                  />
                </Box>
              </Box>
            </Box>
          );
        })}
      </Box>
    </Box>
  );
};

export default Hero;
