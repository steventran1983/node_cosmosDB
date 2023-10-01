import { Box, Button, Container, Typography } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import SendIcon from "@mui/icons-material/Send";
import React, { useEffect } from "react";
import bgImage from "../assets/images/bgimage.png";
import { ThemeProvider } from "@emotion/react";
import { theme } from "../../data";

import { useCallback } from "react";
import Particles from "react-tsparticles";
//import { loadFull } from "tsparticles"; // if you are going to use `loadFull`, install the "tsparticles" package too.
import { loadSlim } from "tsparticles-slim";
import "./heroStyle.css";

const Hero = () => {
  const particlesInit = useCallback(async (engine) => {
    console.log(engine);
    await loadSlim(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    await console.log(container);
  }, []);
  return (
    <ThemeProvider theme={theme}>
      <Container
        data-aos="fade-up"
        maxWidth="xl"
        disableGutters
        style={{
          backgroundImage: `url(${bgImage})`,
          backgroundSize: "cover",
          minHeight: "768px",
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-start",
          marginBottom: "2rem",
        }}
      >
        <Box
          sx={{
            textAlign: "left",
            // display: "flex",
            // flexDirection: "column",
            width: "50%",
            bgcolor: "rgba(0,0,0,0.3)",
            marginLeft: "5rem",
            padding: "2rem",
            borderRadius: "10px",
            // paddingLeft: "5rem",
            // paddingTop: "2rem",
          }}
        >
          <Typography
            variant="h2"
            color="secondary"
            sx={{
              // marginTop: "20px",
              fontWeight: "bold",
            }}
          >
            Data Intelligence
          </Typography>
          <Typography
            variant="h2"
            color="secondary"
            sx={{
              marginTop: "20px",
              fontWeight: "bold",
            }}
          >
            And Innovation
          </Typography>
          <Typography
            variant="h6"
            color="secondary"
            sx={{
              marginTop: "2rem",
            }}
          >
            Data engineering is the heart of our expertise. With our data
            wizards, we create and optimize efficient data pipelines, ensuring
            the highest quality of data for accurate real-time analytics.
          </Typography>
          <Button
            variant="contained"
            size="large"
            endIcon={<SendIcon />}
            href="mailto:EIADIntelligence&Innovation@T-Mobile.com"
            color="primary"
            sx={{
              marginTop: "2rem",
            }}
          >
            Contact Us
          </Button>
        </Box>
      </Container>
    </ThemeProvider>
  );
};

export default Hero;

//partical.js
