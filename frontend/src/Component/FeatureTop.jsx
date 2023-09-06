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
import featureImage from "../assets/images/techicon/6.png";
const FeatureTop = () => {
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
                We harness cutting-edge technologies to adapt rapid changes
              </h1>
            </Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "flex-flex-end",
                columnGap: "1.5rem",
                flexWrap: "wrap",
                rowGap: "2rem",
              }}
            >
              <img src={azure} alt={azure} className="feature-icon" />
              <img src={databrick} alt="databrick" className="feature-icon" />
              <img src={react} alt="react" className="feature-icon" />
              <img className="feature-icon" src={snowflake01} alt="snowflake" />
              <img className="feature-icon" src={scala} alt="scala" />
              <img className="feature-icon" src={python} alt="python" />
              <img className="feature-icon" src={Tableau} alt="Tableau" />
              <img className="feature-icon" src={nodejs} alt="nodejs" />
              <img className="feature-icon" src={hadoop} alt="hadoop" />
            </Box>
            <Typography
              align="left"
              style={{ color: "white", lineHeight: "2rem" }}
            >
              We harness the power of technology to drive forward the pace of
              change in software development. This strategic utilization of
              technology equips us with a formidable arsenal of cutting-edge
              tools, innovative methodologies, and automation solutions that
              collectively bolster efficiency, foster collaboration, and fortify
              adaptability within our development processes.
            </Typography>
          </Box>

          <Box
            width={{ xs: "100%", sm: "100%", md: "40%" }}
            sx={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <img src={featureImage} className="feautre-Image" />
          </Box>
        </Box>
      </ThemeProvider>
    </Container>
  );
};

export default FeatureTop;
