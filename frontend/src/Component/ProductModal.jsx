import React from "react";
import {
  Avatar,
  Box,
  Button,
  Container,
  ListItemAvatar,
  Typography,
  AvatarGroup,
} from "@mui/material";

import { ThemeProvider } from "@emotion/react";
import { theme } from "../../data";
import CloudIcon from "@mui/icons-material/Cloud";
import SettingsSuggestIcon from "@mui/icons-material/SettingsSuggest";

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

const ProductModal = ({ data }) => {
  const { id, productname, description, goal, use, owner, contributors } = data;
  return (
    <Container>
      <ThemeProvider theme={theme}>
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
          <Box>
            <Typography
              variant="h4"
              align="center"
              sx={{
                color: theme.palette.primary.main,
              }}
            >
              {productname}
            </Typography>
            <Typography pb="1rem">
              {description?.length > 0 ? description : "No description"}
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
                <Typography>{use} </Typography>
              </Box>
              <Box
                sx={{
                  ...flexStyle,
                  columnGap: "1rem",
                  color: `${theme.palette.primary.main}`,
                }}
              >
                <CloudIcon />
                <Typography>Goals - {goal}</Typography>
              </Box>
              <Box
                sx={{
                  ...flexStyle,
                  columnGap: "1rem",
                  color: `${theme.palette.primary.main}`,
                }}
              >
                <CloudIcon />
                <Typography>Owner - {owner}</Typography>
              </Box>
              <Box
                sx={{
                  ...flexStyle,
                  columnGap: "1rem",
                  color: `${theme.palette.primary.main}`,
                }}
              >
                <CloudIcon />
                <Typography>
                  Main Contacts - Who can I contact to learn more?
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
                      alt="Travis Howard"
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

export default ProductModal;
