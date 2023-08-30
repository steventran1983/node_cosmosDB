import React from "react";
import {
  Avatar,
  Box,
  Button,
  Container,
  ListItemAvatar,
  Typography,
} from "@mui/material";

import { ThemeProvider } from "@emotion/react";
import { theme, teamContact } from "../../data";
import { CardActionArea, CardActions } from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import EmailIcon from "@mui/icons-material/Email";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CloudIcon from "@mui/icons-material/Cloud";
import { useState, useEffect } from "react";
import Modal from "@mui/material/Modal";
import Photo from "../../src/assets/teamavartars/man.png";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
};

const flexStyle = {
  display: "flex",
  justifyContent: "flex-start",
  alignItems: "center",
};

const MeetOurTeam = () => {
  const [modal, setModal] = useState(false);
  const handleClose = () => {
    setModal(false);
  };

  return (
    <Container
      maxWidth="xl"
      sx={{
        marginTop: "4rem",
      }}
    >
      <ThemeProvider theme={theme}>
        <Box
          sx={{
            paddingTop: "2rem",
          }}
        >
          <Typography
            variant="h3"
            color="primary"
            sx={{
              marginBottom: "2rem",
              fontWeight: "bold",
            }}
          >
            Meet Our Team
          </Typography>
        </Box>
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
          {teamContact.map((item) => {
            const { id, name, role, email, phone, image } = item;
            return (
              <Card
                key={id}
                sx={{
                  minWidth: 300,
                  border: `1px solid ${theme.palette.primary.main}`,
                  // bgcolor: "rgba(255,255,255,0.1)",
                }}
              >
                <CardActionArea
                  sx={{
                    color: theme.palette.primary.main,
                  }}
                >
                  <CardContent>
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "center",
                        // bgcolor: "rgba(0, 0, 0, 0.2)",
                        // padding: "1rem 0",
                      }}
                    >
                      <Avatar
                        src={Photo}
                        sx={{
                          width: 100,
                          height: 100,
                          border: `1px solid ${theme.palette.primary.main}`,
                        }}
                      />
                    </Box>
                    <Typography
                      gutterBottom
                      variant="h6"
                      color="primary"
                      sx={{ marginTop: "0.5rem" }}
                    >
                      {name}
                    </Typography>
                    <Typography variant="body1" color="text.secondary">
                      {role}
                    </Typography>
                    <Box
                      sx={{
                        marginTop: "1rem",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        columnGap: "1rem",
                      }}
                    >
                      <LinkedInIcon color="primary" />
                      <TwitterIcon color="primary" />
                      <FacebookIcon color="primary" />
                    </Box>
                  </CardContent>
                </CardActionArea>
                <CardActions>
                  <Button
                    onClick={() => setModal(true)}
                    onClose={() => setModal(false)}
                    variant="contained"
                    size="small"
                    endIcon={<ArrowForwardIosIcon />}
                    href="#contained-buttons"
                    color="primary"
                    sx={{
                      marginTop: "2rem",
                    }}
                  >
                    More
                  </Button>
                </CardActions>
              </Card>
            );
          })}
        </Box>
        <Modal
          open={modal}
          onClose={() => setModal(false)}
          aria-labelledby="child-modal-title"
          aria-describedby="child-modal-description"
        >
          <Box
            sx={{
              ...style,
              width: 800,
              display: "flex",
              justifyContent: "cente",
              alignItems: "center",
              columnGap: "2rem",
            }}
          >
            <Box>
              <img
                src={Photo}
                alt={teamContact[1].image}
                width={200}
                height={200}
                style={{
                  borderRadius: "50%",
                  border: `1px solid ${theme.palette.primary.main}`,
                  boxShadow: "0 0 10px #E10174",
                }}
              />
            </Box>
            <Box>
              <Typography
                variant="h3"
                align="center"
                sx={{
                  color: theme.palette.primary.main,
                }}
              >
                {teamContact[1].name}
              </Typography>
              <Typography pb="1rem" align="center">
                {teamContact[1].role}
              </Typography>
              <Typography pb="1rem">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
                corporis harum recusandae dolor in obcaecati, vero quam tempore
                natus amet earum consequuntur maiores libero porro rerum, illo
                nostrum iure veritatis?
              </Typography>
              <Typography variant="h6">Works on:</Typography>
              <Box
                sx={{
                  paddingLeft: "2rem",
                }}
              >
                <Box
                  sx={{
                    ...flexStyle,
                    columnGap: "1rem",
                    color: `${theme.palette.primary.main}`,
                  }}
                >
                  <CloudIcon />
                  <Typography>Location Session Record</Typography>
                </Box>
                <Box
                  sx={{
                    ...flexStyle,
                    columnGap: "1rem",
                    color: `${theme.palette.primary.main}`,
                  }}
                >
                  <CloudIcon />
                  <Typography>Location Session Record</Typography>
                </Box>
                <Box
                  sx={{
                    ...flexStyle,
                    columnGap: "1rem",
                    color: `${theme.palette.primary.main}`,
                  }}
                >
                  <CloudIcon />
                  <Typography>Location Session Record</Typography>
                </Box>
                <Box
                  sx={{
                    ...flexStyle,
                    columnGap: "1rem",
                    color: `${theme.palette.primary.main}`,
                  }}
                >
                  <CloudIcon />
                  <Typography>Location Session Record</Typography>
                </Box>
              </Box>
              <Typography pt="1rem" variant="h6">
                Contact:
              </Typography>
              <Box
                sx={{
                  paddingLeft: "2rem",
                }}
              >
                <Box
                  sx={{
                    ...flexStyle,
                    columnGap: "1rem",
                    color: `${theme.palette.primary.main}`,
                  }}
                >
                  <EmailIcon />
                  <Typography>{teamContact[1].email}</Typography>
                </Box>
                <Box
                  sx={{
                    ...flexStyle,
                    columnGap: "1rem",
                    color: `${theme.palette.primary.main}`,
                  }}
                >
                  <LinkedInIcon />
                  <Typography>Location Session Record</Typography>
                </Box>
              </Box>
            </Box>
          </Box>
        </Modal>
      </ThemeProvider>
    </Container>
  );
};
export default MeetOurTeam;
