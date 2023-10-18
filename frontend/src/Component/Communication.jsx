import { Container } from "@mui/system";
import React from "react";
import { theme, avaratMap } from "../../data";
import { ThemeProvider } from "@emotion/react";
import { Divider, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";

import TipsAndUpdatesIcon from "@mui/icons-material/TipsAndUpdates";
import Tooltip from "@mui/material/Tooltip";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { CardActionArea } from "@mui/material";
import speaker from "../assets/images/speaker.png";
import sample from "../assets/images/sample.jpg";
import cardBg from "../assets/images/cardbg1.png";
const Communication = () => {
  return (
    <Container maxWidth="xl">
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
            rowGap: "2rem",
            columnGap: "2rem",
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
              rowGap: "2rem",
              width: "40%",
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
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              flexWrap: "wrap",
              rowGap: "2rem",
              columnGap: "2rem",
            }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                columnGap: "2rem",
                // flexWrap: "wrap",
              }}
            >
              <Card sx={{ maxWidth: 300 }}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="75"
                    image={cardBg}
                    alt="green iguana"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      Lizard
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Lizards are a widespread group of squamate reptiles, with
                      over 6,000 species, ranging across all continents except
                      Antarctica
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
              <Card sx={{ maxWidth: 300 }}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="75"
                    image={cardBg}
                    alt="green iguana"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      Lizard
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Lizards are a widespread group of squamate reptiles, with
                      over 6,000 species, ranging across all continents except
                      Antarctica
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                columnGap: "2rem",
                // flexWrap: "wrap",
              }}
            >
              <Card sx={{ maxWidth: 300 }}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="75"
                    image={cardBg}
                    alt="green iguana"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      Lizard
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Lizards are a widespread group of squamate reptiles, with
                      over 6,000 species, ranging across all continents except
                      Antarctica
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
              <Card sx={{ maxWidth: 300 }}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="75"
                    image={cardBg}
                    alt="green iguana"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      Lizard
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Lizards are a widespread group of squamate reptiles, with
                      over 6,000 species, ranging across all continents except
                      Antarctica
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Box>
          </Box>
        </Box>
      </ThemeProvider>
    </Container>
  );
};

export default Communication;
