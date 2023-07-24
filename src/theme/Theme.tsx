"use client";

import { createTheme } from "@mui/material/styles";
import { green } from "@mui/material/colors";

const theme = createTheme({
  palette: {
    primary: {
      main: "#FFCC00",
    },
    secondary: {
      main: green[500],
    },
  },
});

export default theme;
