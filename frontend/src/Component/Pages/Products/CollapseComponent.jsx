import React from "react";
import { useState } from "react";
import ProductModal from "../../ProductModal";
import { ThemeProvider } from "@emotion/react";
import { theme } from "../../../../data";
import SettingsSuggestIcon from "@mui/icons-material/SettingsSuggest";
import CloudIcon from "@mui/icons-material/Cloud";
import { Avatar, Box, Container, Typography, AvatarGroup } from "@mui/material";

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

export const CollapseComponent = ({ data }) => {
  const { id, productname, description, goal, use, owner, contributors } = data;
  return (
    <Container>
      <ThemeProvider theme={theme}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "cente",
            alignItems: "center",
            columnGap: "2rem",
            margin: "2rem 0",
          }}
        >
          <Box>
            <SettingsSuggestIcon
              color="primary"
              sx={{
                fontSize: "200px",
                borderRadius: "50%",
                border: `1px solid ${theme.palette.primary.main}`,
                boxShadow: "0 0 10px #E10174",
              }}
            />
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <Typography variant="h6" align="left" pb="1rem">
              {description}
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
                <CloudIcon />
                <Typography align="left">Use: {use}</Typography>
              </Box>
              <Box
                sx={{
                  ...flexStyle,
                  columnGap: "1rem",
                  color: `${theme.palette.primary.main}`,
                }}
              >
                <CloudIcon />
                <Typography align="left">Goals: {goal}</Typography>
              </Box>
              <Box
                sx={{
                  ...flexStyle,
                  columnGap: "1rem",
                  color: `${theme.palette.primary.main}`,
                }}
              >
                <CloudIcon />
                <Typography align="left">Owner: {owner}</Typography>
              </Box>
              <Box
                sx={{
                  ...flexStyle,
                  columnGap: "1rem",
                  color: `${theme.palette.primary.main}`,
                }}
              >
                <CloudIcon />
                <Typography align="left">
                  Main Contacts: {contributors[0].name}, {contributors[0].email}
                </Typography>
              </Box>
            </Box>
            <Typography p="1rem 0" variant="h6" align="right">
              Contributers:
            </Typography>

            <AvatarGroup>
              {contributors?.length > 0
                ? contributors.map((user, index) => (
                    <Avatar
                      alt={user.name}
                      src={user.image}
                      style={{
                        border: `1px solid ${theme.palette.primary.main}`,
                      }}
                      sx={{
                        bgcolor: "black",
                      }}
                    />
                  ))
                : ""}
            </AvatarGroup>
          </Box>
        </Box>
      </ThemeProvider>
    </Container>
  );
};
