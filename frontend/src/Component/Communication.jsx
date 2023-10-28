import { Container } from "@mui/system";
import React from "react";
import { theme, avaratMap, commuTest } from "../../data";
import { ThemeProvider } from "@emotion/react";
import { Divider, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import { Link } from "react-router-dom";
import TipsAndUpdatesIcon from "@mui/icons-material/TipsAndUpdates";
import Tooltip from "@mui/material/Tooltip";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { CardActionArea } from "@mui/material";
import speaker from "../assets/images/speaker.png";
import sample from "../assets/images/sample.jpg";
import cardBg from "../assets/images/cardbg1.png";
import CommunicationItem from "./CommunicationItem";
const Communication = () => {
  return (
    <Container
      maxWidth="xl"
      sx={{
        marginTop: "4rem",
      }}
    >
      <ThemeProvider theme={theme}>
        <Typography
          variant="h3"
          color="primary"
          sx={{
            marginBottom: "2rem",
            fontWeight: "bold",
          }}
        >
          NSE EAI Communication
        </Typography>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexWrap: "wrap",
            columnGap: "2rem",
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
              rowGap: "1rem",
              width: "40%",
              flex: 1,
            }}
          >
            <img
              className="feautre-Image"
              src={speaker}
              alt="speaker"
              style={{
                width: "350px",
                height: "350px",
                borderRadius: "50%",
              }}
            />
            <Typography variant="h6" color="secondary">
              Effective communication is the cornerstone of success, serving as
              the foundation upon which relationships, understanding, and
              progress are built
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "flex-end",
              alignItems: "center",
              flexWrap: "wrap",
              rowGap: "2rem",
              columnGap: "2rem",
              flex: 2,
            }}
          >
            {commuTest.map((item, index) => (
              <CommunicationItem key={index} item={item} />
            ))}
          </Box>
        </Box>
      </ThemeProvider>
    </Container>
  );
};

export default Communication;
