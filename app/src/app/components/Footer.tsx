"use client";

import { Box } from "@mui/material";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <Box
      component="footer"
      sx={{
        position: "sticky", // Make the footer sticky
        bottom: 0, // Stick to the bottom
        zIndex: 1000, // Ensure it appears on top
        textAlign: "center",
        py: 2,
        mt: "auto",
        borderTop: "1px solid rgba(0,0,0,0.1)",
        backgroundColor: "rgba(255,255,255,0.1)",
      }}
    >
      <div>
        &copy; {currentYear} Site built by Justin Beall from Dev3loper AI |
        AI-XP |{" "}
        <a
          href="https://dev3loper.ai"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-300 hover:text-blue-100"
        >
          dev3loper.ai
        </a>
      </div>
    </Box>
  );
};

export default Footer;
