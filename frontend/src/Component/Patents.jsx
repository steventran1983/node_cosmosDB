import { Container } from "@mui/system";
import React from "react";
import { theme, avaratMap } from "../../data";
import { ThemeProvider } from "@emotion/react";
import { Divider, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import AvatarGroup from "@mui/material/AvatarGroup";
import TipsAndUpdatesIcon from "@mui/icons-material/TipsAndUpdates";
import Tooltip from "@mui/material/Tooltip";

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
                <>
                  <Box
                    key={index}
                    sx={{
                      display: "flex",
                      // justifyContent: "center",
                      alignItems: "center",
                      columnGap: "2rem",
                      color: "#fff",
                      padding: "1rem 0 1rem 5rem",
                    }}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <TipsAndUpdatesIcon
                        sx={{
                          marginRight: "1rem",
                          color: "#FB0087",
                          fontSize: "2rem",
                        }}
                      />
                      <Typography variant="h6">{patentname}</Typography>
                    </Box>
                    <Box>
                      <AvatarGroup max={4}>
                        {inventor.map((member, index) => (
                          <Tooltip title={member}>
                            <Avatar
                              key={index}
                              alt={member}
                              src={avaratMap[member]}
                              // style={{
                              //   border: "2px solid #FB0087",
                              // }}
                            />
                          </Tooltip>
                        ))}
                      </AvatarGroup>
                    </Box>
                  </Box>
                  {/* <Divider sx={{ bgcolor: "secondary.light" }} /> */}
                </>
              );
            })
          : ""}
        <Box
          sx={{
            position: "absolute",
            zIndex: "-1",
            width: "600px",
            height: "600px",
            right: "0",
            bottom: "100px",
            background: "linear-gradient(90deg, #FB0087 0%, #FFFFFF 100%)",
            // background: "FB0087",
            filter: "blur(200px)",
            // opacity: "0.9",
            borderRadius: "50%",
          }}
        ></Box>
      </ThemeProvider>
    </Container>
  );
};

export default Patents;
