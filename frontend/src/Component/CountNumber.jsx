import { Container, Typography, Box } from "@mui/material";
import React from "react";
import { theme } from "../../data";
import { ThemeProvider } from "@emotion/react";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import ThumbUpAltIcon from "@mui/icons-material/ThumbUpAlt";
import WorkspacePremiumIcon from "@mui/icons-material/WorkspacePremium";
import BadgeIcon from "@mui/icons-material/Badge";
import Count from "./Count";
const CountNumber = () => {
  return (
    <Container
      sx={{
        marginTop: "4rem",
      }}
    >
      <ThemeProvider theme={theme}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
            flexWrap: "wrap",
          }}
        >
          <Count
            info={{
              icon: (
                <ThumbUpAltIcon sx={{ fontSize: "5rem", color: "#FB0087" }} />
              ),
              number: 500,
              letters: "Happy Clients",
            }}
          />
          <Count
            info={{
              icon: (
                <EmojiEventsIcon sx={{ fontSize: "5rem", color: "#FB0087" }} />
              ),
              number: 40,
              letters: "Project Completed",
            }}
          />
          <Count
            info={{
              icon: <BadgeIcon sx={{ fontSize: "5rem", color: "#FB0087" }} />,
              number: 25,
              letters: "Years of Experience",
            }}
          />
          <Count
            info={{
              icon: (
                <WorkspacePremiumIcon
                  sx={{ fontSize: "5rem", color: "#FB0087" }}
                />
              ),
              number: 35,
              letters: "Our Awards",
            }}
          />
        </Box>
      </ThemeProvider>
    </Container>
  );
};

export default CountNumber;
