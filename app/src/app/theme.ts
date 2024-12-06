"use client";

import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#ffffff", // White color for primary elements
      contrastText: "#1e1e1e", // Dark text on primary elements
    },
    secondary: {
      main: "#1e1e1e", // Dark background color
    },
    background: {
      default: "#0d1117", // Dark background color
      paper: "#161b22", // Slightly lighter background for paper elements
    },
    text: {
      primary: "#c9d1d9", // Light gray text
      secondary: "#8b949e", // Dark gray text
    },
  },
  typography: {
    fontFamily: "Dank Mono, Arial, sans-serif",
    h1: {
      fontFamily: "Dank Mono",
      fontSize: "2rem",
      fontWeight: "bold",
      color: "#ffffff", // White text for headings
    },
    h2: {
      fontFamily: "Dank Mono",
      fontSize: "1.75rem",
      fontWeight: "bold",
      color: "#ffffff",
    },
    h3: {
      fontFamily: "Dank Mono",
      fontSize: "1.5rem",
      fontWeight: "bold",
      color: "#ffffff",
    },
    h4: {
      fontFamily: "Dank Mono",
      fontSize: "1.25rem",
      fontWeight: "bold",
      color: "#ffffff",
    },
    h5: {
      fontFamily: "Dank Mono",
      fontSize: "1.15rem",
      fontWeight: 400,
      color: "#ffffff",
    },
    h6: {
      fontFamily: "Dank Mono",
      fontSize: "1.05rem",
      fontWeight: 400,
      color: "#ffffff",
    },
    body1: {
      fontSize: "1rem",
      fontWeight: 400,
      color: "#c9d1d9",
    },
    body2: {
      fontSize: "0.875rem",
      fontWeight: 400,
      color: "#c9d1d9",
    },
    subtitle1: {
      fontFamily: "Dank Mono Italic",
      fontStyle: "italic",
      fontSize: "1rem",
      color: "#8b949e",
    },
    subtitle2: {
      fontFamily: "Dank Mono Italic",
      fontStyle: "italic",
      fontSize: "1.25rem",
      fontWeight: "bold",
      color: "#8b949e",
    },
    caption: {
      fontFamily: "Dank Mono Italic",
      fontStyle: "italic",
      fontSize: ".85rem",
      color: "#8b949e",
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          backgroundColor: "#161b22",
          color: "#c9d1d9",
          "&:hover": {
            backgroundColor: "#0d1117", // Darker background for hover state
          },
          "&:focus": {
            outline: "none",
            boxShadow: "0 0 0 2px #ffffff", // White focus ring
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          backgroundColor: "#161b22", // Card background color
          color: "#c9d1d9", // Card text color
        },
      },
    },
    MuiInputBase: {
      styleOverrides: {
        root: {
          backgroundColor: "#0d1117", // Input background color
          color: "#c9d1d9", // Input text color
        },
      },
    },
  },
});

export default theme;
