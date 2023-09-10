import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { Link } from "react-router-dom";
import { theme } from "../../../data";
import "./styles.css";
import quantumPhoto from "../../assets/images/quantum.png";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
const Copyright = () => {
  return (
    <Typography
      variant="body1"
      sx={{
        color: "white",
        marginBottom: "1rem",
      }}
    >
      {"Copyright © "}
      NSE EIA - Data Intelligence And Innovation Team {new Date().getFullYear()}
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
        // background: "white",
        borderTop: `1px solid grey`,
        // minHeight: "100vh",
      }}
    >
      <Box
        pt="2rem"
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          columnGap: "1rem",
        }}
      >
        <img
          src={quantumPhoto}
          alt="quantunphoto"
          style={{
            width: "50px",
            height: "50px",
            borderRadius: "50%",
            border: `2px solid ${theme.palette.primary.main}`,
          }}
        />
        <Typography
          variant="h6"
          sx={{
            color: theme.palette.primary.main,
          }}
        >
          QUANTUM
        </Typography>
      </Box>

      <Box
        sx={{
          marginTop: "1rem",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          columnGap: "2rem",
        }}
      >
        <EmailIcon
          sx={{
            color: theme.palette.primary.main,
            fontSize: "2rem",
          }}
        />
        <LinkedInIcon
          sx={{
            color: theme.palette.primary.main,
            fontSize: "2rem",
          }}
        />
        <TwitterIcon
          sx={{
            color: theme.palette.primary.main,
            fontSize: "2rem",
          }}
        />
        <FacebookIcon
          sx={{
            color: theme.palette.primary.main,
            fontSize: "2rem",
          }}
        />
      </Box>
      <Box
        component="footer"
        sx={{
          py: 3,
          px: 2,
          mt: "auto",
        }}
      >
        <Copyright />
      </Box>
    </Box>
  );
};

export default Footer;
