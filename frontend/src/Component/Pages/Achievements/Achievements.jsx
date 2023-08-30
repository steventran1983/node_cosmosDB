import React from "react";

import { Avatar, Box, Container, Typography } from "@mui/material";

import bgImage from "../../../assets/images/bg3.png";
import cupPhoto from "../../../assets/images/cup.png";
import { ThemeProvider } from "@emotion/react";
import { theme } from "../../../../data";
import MiniCarousel from "../../Common/MiniCarousel";

const Achievements = () => {
  return (
    <>
      <Container maxWidth="xl">
        <Box
          maxWidth="xl"
          disableGutters
          style={{
            backgroundImage: `url(${bgImage})`,
            backgroundSize: "cover",
            minHeight: "768px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            // filter: "blur(1px)",
            marginBottom: "2rem",
          }}
        >
          <Box
            sx={{
              backgroundColor: "rgba(0,0,0,0.3)",
              // margin: "2rem auto",
              padding: "2rem 2rem",
              borderRadius: "1rem",
              maxWidth: "50%",
            }}
          >
            <Typography
              variant="h2"
              sx={{
                color: `${theme.palette.primary.main}`,
                fontWeight: "bold",
              }}
            >
              Success &
            </Typography>
            <Typography
              variant="h2"
              sx={{
                color: "white",
                fontWeight: "bold",
              }}
            >
              Achievements
            </Typography>
            <Typography variant="h6" color="white">
              At Data Intelligence & Innovation team, we are driven by the
              belief that data is the foundation of innovation. Our cloud data
              engineering expertise empowers us to sculpt insights from vast and
              intricate datasets, unveiling opportunities that drive businesses
              forward.
            </Typography>
          </Box>
        </Box>
      </Container>
      <Container
        maxWidth="xl"
        sx={{
          display: "flex",
          justifyContent: "space-between",
          flexWrap: "revert",
          alignItems: "center",
          marginBottom: "2rem",
        }}
      >
        <Box>
          <MiniCarousel />
        </Box>
        <Box>
          <img src={cupPhoto} alt="cup" width="500px" height="500px" />
        </Box>
      </Container>

      {/* <Footer /> */}
    </>
  );
};
export default Achievements;
