import React from "react";
import { Box, Typography } from "@mui/material";

type TitleProps = {
  color: string;
  mobWidth: string;
  deskWidth: string;
  title: string;
  heading: string;
};

const Title: React.FC<TitleProps> = ({
  color,
  mobWidth,
  deskWidth,
  title,
  heading,
}) => {
  return (
    <Box>
      <Typography
        sx={{
          fontSize: { xs: "1.2em", md: "1.3em" },
          fontWeight: "400",
          color: color,
        }}
      >
        {title}
      </Typography>
      <Typography
        variant="h2"
        sx={{
          fontSize: { xs: "2.3em", md: "3em" },
          lineHeight: "1.3em",
          fontWeight: "600",
          my: { xs: ".4em", md: ".6em" },
          width: { xs: mobWidth, md: deskWidth },
          color: color,
        }}
      >
        {heading}
      </Typography>
    </Box>
  );
};

export default Title;
