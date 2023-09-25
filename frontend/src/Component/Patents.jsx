import { Container } from "@mui/system";
import React from "react";
import { theme, avaratMap } from "../../data";
import { ThemeProvider } from "@emotion/react";
import Grid from "@mui/material/Grid";
import { Divider, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import AvatarGroup from "@mui/material/AvatarGroup";
import featureImage from "../assets/images/techicon/7.png";

const Patents = ({ data }) => {
  console.log(data);
  return (
    <Container
      maxWidth="xl"
      sx={{
        marginTop: "4rem",
        marginBottom: "2rem",
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
          DII Patents Filled
        </Typography>
        {data
          ? data.map((patent, index) => {
              const { patentname, inventor } = patent;
              return (
                <Box
                  key={index}
                  sx={{
                    display: "flex",
                    justifyContent: "flex-end",
                    alignItems: "center",
                    columnGap: "4rem",
                    color: "#fff",
                    paddingTop: "1rem",
                  }}
                >
                  <Box
                    sx={{
                      textAlign: "left",
                    }}
                  >
                    <Typography variant="h6" align="left">
                      {patentname}
                    </Typography>
                  </Box>
                  <Box>
                    <AvatarGroup max={4}>
                      {inventor.map((member, index) => (
                        <Avatar
                          key={index}
                          alt={member}
                          src={avaratMap[member]}
                          sx={{ width: 50, height: 50 }}
                        />
                      ))}
                    </AvatarGroup>
                  </Box>
                </Box>
              );
            })
          : ""}
      </ThemeProvider>
    </Container>
  );
};

export default Patents;
