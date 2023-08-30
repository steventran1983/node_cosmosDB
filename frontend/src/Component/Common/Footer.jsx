import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";
import { theme } from "../../../data";
import "./styles.css";

const Copyright = () => {
  return (
    <Typography variant="body1" color="white">
      {"Copyright © "}
      Data Intelligent And Innovation Team {new Date().getFullYear()}
      {"."}
    </Typography>
  );
};

const Footer = () => {
  return (
    <Box
      className="footer"
      sx={{
        display: "flex",
        flexDirection: "column",
        paddingBottom: 0,
        background: "white",
        borderTop: `2px solid ${theme.palette.primary.main}`,
        // minHeight: "100vh",
      }}
    >
      <Box
        component="footer"
        sx={{
          py: 3,
          px: 2,
          mt: "auto",
        }}
      >
        <Container maxWidth="sm">
          <Typography variant="body1">T-Mobile Quantum NPPI EIA</Typography>
          <Copyright />
        </Container>
      </Box>
    </Box>
  );
};

export default Footer;
