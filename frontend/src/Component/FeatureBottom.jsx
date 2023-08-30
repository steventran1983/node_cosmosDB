import { Container } from "@mui/system";
import React from "react";
import { theme } from "../../data";
import { ThemeProvider } from "@emotion/react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
import azure from "../assets/images/techicon/azure.png";
import databrick from "../assets/images/techicon/databrick.png";
import react from "../assets/images/techicon/react.png";
import snowflake01 from "../assets/images/techicon/snowflake01.png";
import scala from "../assets/images/techicon/scala.png";
import python from "../assets/images/techicon/python.png";
import Tableau from "../assets/images/techicon/Tableau.png";
import nodejs from "../assets/images/techicon/nodejs.png";
import hadoop from "../assets/images/techicon/hadoop.png";
import Image from "mui-image";
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
                }}
              >
                Data engineering lies at the heart of our mission
              </h1>
            </Box>

            <Typography align="left" style={{ color: "white" }}>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam
              natus delectus, nam, possimus sapiente quos accusantium ipsam
              tenetur minus aliquid, error quibusdam. Optio magni inventore ab
              earum sapiente alias repellat!
            </Typography>
          </Box>
        </Box>
      </ThemeProvider>
    </Container>
  );
};

export default FeatureBottom;
