import { Container } from "@mui/system";
import React from "react";
import { theme } from "../../data";
import { ThemeProvider } from "@emotion/react";
import Box from "@mui/material/Box";
import { Divider, Typography } from "@mui/material";
import featureImage from "../assets/images/techicon/7.png";
const FeatureBottom = () => {
  return (
    <Container
      maxWidth="xl"
      sx={{
        marginTop: "4rem",
        marginBottom: "2rem",
      }}
    >
      <ThemeProvider theme={theme}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            columnGap: "4rem",
            flexWrap: "wrap",
            // maxWidth: 300,
          }}
        >
          <Box
            width={{ xs: "100%", sm: "100%", md: "40%" }}
            sx={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <img src={featureImage} className="feautre-Image" />
          </Box>
          <Box
            width={{ xs: "100%", sm: "100%", md: "50%" }}
            sx={{
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
              rowGap: "2rem",
              paddingLeft: "2rem",
            }}
          >
            <Box align="left">
              <h1
                style={{
                  background:
                    "linear-gradient(90deg, #FB0087 0%, #FFFFFF 100%)",
                  fontWeight: "bold",
                  WebkitBackgroundClip: "text",
                  webkitTextFillColor: "transparent",
                  fontSize: "3rem",
                  padding: 0,
                  margin: 0,
                }}
              >
                Data engineering and Cloud Computing lie at the heart of our
                mission
              </h1>
            </Box>
            <Divider sx={{ bgcolor: "secondary.light" }} />
            <Typography
              align="left"
              style={{ color: "white", lineHeight: "2rem" }}
            >
              At the Data Engineering & Cloud Computing Team, we believe that
              data is the foundation of innovation and the cloud is the future
              of computing. Our team is dedicated to helping organizations
              harness the full potential of their data by providing cutting-edge
              data engineering and cloud computing solutions.
            </Typography>
          </Box>
        </Box>
      </ThemeProvider>
    </Container>
  );
};

export default FeatureBottom;
