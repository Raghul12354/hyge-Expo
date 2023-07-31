import React from "react";
import Image from "next/image";
import Title from "@/components/Title/Title";
import { Box, Typography } from "@mui/material";

const Services = () => {
  const data = [
    {
      id: 1,
      img: "https://i.postimg.cc/dQ6j841f/Service-Plane.png",
      title: "Air freight",
      desc: "Need your goods delivered quickly and safely? Air freight is the perfect solution! We offer a wide range of air freight services to meet your needs",
    },
    {
      id: 2,
      img: "https://i.postimg.cc/d35RwtpF/Service-Water-Transportation.png",
      title: "Sea freight",
      desc: "Looking to transport your goods internationally? Sea freight is the most cost-effective way to do it! We offer a wide range of sea freight services to meet your needs",
    },
    {
      id: 3,
      img: "https://i.postimg.cc/BQvcNHPn/Service-Railway-Station.png",
      title: "Rail freight",
      desc: "Explore our tailored rail freight solutions for reliable and cost-effective shipping of your goods, ensuring dependable transportation options.",
    },
    {
      id: 4,
      img: "https://i.postimg.cc/sD0PLx59/Service-Courier-Lorry.png",
      title: "Road freight",
      desc: "Reliable road freight services for seamless transportation solutions. Trust us to deliver your goods on time, every time.",
    },
  ];
  return (
    <Box
      sx={{
        px: { xs: "1.5em", md: "10em" },
        py: { xs: "3em", md: "5em" },
        bgcolor: "black",
        color: "white",
      }}
    >
      <Title
        color="white"
        title="Services"
        heading="Bringing your goods 
        to the world"
        deskWidth="10em"
        mobWidth="100%"
      />
      <Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            flexDirection: { xs: "column", md: "row" },
            alignItems: "center",
            gap: "3em",
            my: "2em",
          }}
        >
          {data.map((item) => {
            const { id, img, title, desc } = item;
            return (
              <Box key={id}>
                <Box
                  sx={{
                    position: "relative",
                    width: { xs: "4em", md: "5em" },
                    height: { xs: "4em", md: "5em" },
                  }}
                >
                  <Image
                    src={img}
                    alt={title}
                    fill={true}
                    style={{ objectFit: "contain" }}
                  />
                </Box>
                <Typography
                  variant="h5"
                  sx={{
                    fontSize: { xs: "1.3em", md: "1.5em" },
                    fontWeight: "600",
                    my: "1em",
                  }}
                >
                  {title}
                </Typography>
                <Typography
                  sx={{
                    fontSize: { xs: ".9em", md: "1.2em" },
                    width: { xs: "100%", md: "15em" },
                  }}
                >
                  {desc}
                </Typography>
              </Box>
            );
          })}
        </Box>
      </Box>
    </Box>
  );
};

export default Services;