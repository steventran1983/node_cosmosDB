import React from "react";
import { useState } from "react";
import ProductModal from "../../ProductModal";
import { ThemeProvider } from "@emotion/react";
import { theme, teamContact, products } from "../../../../data";
import SettingsSuggestIcon from "@mui/icons-material/SettingsSuggest";
import CloudIcon from "@mui/icons-material/Cloud";
import {
  Avatar,
  Box,
  Button,
  Container,
  ListItemAvatar,
  Typography,
  AvatarGroup,
  Card,
  CardActionArea,
  CardContent,
  CardActions,
} from "@mui/material";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";

import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import Collapse from "@mui/material/Collapse";
import { platforms_collapse } from "../../../../data";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
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
  const { productname } = data;
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
          <Box>
            <Typography
              variant="h3"
              align="center"
              sx={{
                color: theme.palette.primary.main,
              }}
            >
              {productname}
            </Typography>
            <Typography pb="1rem">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
              corporis harum recusandae dolor in obcaecati, vero quam tempore
              natus amet earum consequuntur maiores libero porro rerum, illo
              nostrum iure veritatis?
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
                <Typography>Use - What do we use this product for? </Typography>
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
                  Goals - What do we hope to achieve / what is this product
                  already achieving?
                </Typography>
              </Box>
              <Box
                sx={{
                  ...flexStyle,
                  columnGap: "1rem",
                  color: `${theme.palette.primary.main}`,
                }}
              >
                <CloudIcon />
                <Typography>Owner - Who owns this product?</Typography>
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
              <Avatar
                alt="Remy Sharp"
                src="../../src/assets/teamavartars/man.png"
                style={{
                  border: `1px solid ${theme.palette.primary.main} `,
                }}
                sx={{
                  bgcolor: "black",
                }}
              />
              <Avatar
                alt="Travis Howard"
                src="../../src/assets/teamavartars/man.png"
                style={{ border: `1px solid ${theme.palette.primary.main}` }}
                sx={{
                  bgcolor: "black",
                }}
              />
              <Avatar
                alt="Agnes Walker"
                src="../../src/assets/teamavartars/man.png"
                style={{ border: `1px solid ${theme.palette.primary.main}` }}
                sx={{
                  bgcolor: "black",
                }}
              />
              <Avatar
                alt="Trevor Henderson"
                src={teamContact[3].image}
                style={{
                  border: `1px solid ${theme.palette.primary.main}`,
                  bgcolor: "black",
                }}
              />
            </AvatarGroup>
          </Box>
        </Box>
      </ThemeProvider>
    </Container>
  );
};
