import { Container } from "@mui/system";
import React from "react";
import { theme, commuTest } from "../../../../data";
import { ThemeProvider } from "@emotion/react";
import { Divider, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import AvatarGroup from "@mui/material/AvatarGroup";
import TipsAndUpdatesIcon from "@mui/icons-material/TipsAndUpdates";
import Tooltip from "@mui/material/Tooltip";
import CheckIcon from "@mui/icons-material/Check";
import Paper from "@mui/material/Paper";
import { useParams } from "react-router-dom";

const Communications = () => {
  const { communicationId } = useParams();
  console.log(communicationId);
  const content = commuTest.find((item) => item.id === Number(communicationId));
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
            backgroundColor: `${theme.palette.primary.main}`,
            paddingTop: "1rem",
            paddingBottom: "1rem",
          }}
        >
          <Typography
            variant="h5"
            style={{
              color: "whitesmoke",
            }}
          >
            NSE/EIA Communications
          </Typography>
          <Typography variant="h3" color="secondary" sx={{}}>
            {content.title}
          </Typography>
        </Box>
        <Box
          sx={{
            paddingLeft: "2rem",
          }}
        >
          <Typography
            variant="h6"
            color="primary"
            sx={{ marginTop: "2rem", textAlign: "left" }}
          >
            Description:
          </Typography>
          <Typography
            color="secondary"
            variant="body1"
            sx={{
              textAlign: "left",
              marginLeft: "1rem",
            }}
          >
            {content.description}
          </Typography>
        </Box>
        // Impact ------------------------------
        <Box
          sx={{
            paddingLeft: "2rem",
          }}
        >
          <Typography
            variant="h6"
            color="primary"
            sx={{ marginTop: "1rem", textAlign: "left" }}
          >
            Impact:
          </Typography>

          {content.impact.map((item, index) => (
            <Typography
              color="secondary"
              variant="body1"
              key={index}
              sx={{
                textAlign: "left",
                marginLeft: "1rem",
              }}
            >
              - {item}
            </Typography>
          ))}
        </Box>
        // Detail ------------------------------
        <Box
          sx={{
            paddingLeft: "2rem",
          }}
        >
          <Typography
            variant="h6"
            color="primary"
            sx={{ marginTop: "1rem", textAlign: "left" }}
          >
            Detail:
          </Typography>

          {content.detail.map((item, index) => (
            <Typography
              color="secondary"
              variant="body1"
              key={index}
              sx={{
                textAlign: "left",
                marginLeft: "1rem",
              }}
            >
              - {item}
            </Typography>
          ))}
        </Box>
        // Next Step ------------------------------
        <Box
          sx={{
            paddingLeft: "2rem",
          }}
        >
          <Typography
            variant="h6"
            color="primary"
            sx={{ marginTop: "1rem", textAlign: "left" }}
          >
            Next Steps:
          </Typography>

          {content.nextstep.map((item, index) => (
            <Typography
              color="secondary"
              variant="body1"
              key={index}
              sx={{
                textAlign: "left",
                marginLeft: "1rem",
              }}
            >
              - {item}
            </Typography>
          ))}
        </Box>
        // Next Step ------------------------------
        <Box
          sx={{
            paddingLeft: "2rem",
          }}
        >
          <Typography
            variant="h6"
            color="primary"
            sx={{ marginTop: "1rem", textAlign: "left" }}
          >
            Release Contacts:
          </Typography>

          <Typography
            color="secondary"
            variant="body1"
            sx={{
              textAlign: "left",
              marginLeft: "1rem",
            }}
          >
            Engineers: {content.contact.engineers.join(", ")}
          </Typography>

          <Typography
            color="secondary"
            variant="body1"
            sx={{
              textAlign: "left",
              marginLeft: "1rem",
            }}
          >
            Development Manager: {content.contact.managers}
          </Typography>
          <Typography
            color="secondary"
            variant="body1"
            sx={{
              textAlign: "left",
              marginLeft: "1rem",
            }}
          >
            Development Dorector: {content.contact.director}
          </Typography>
          <Typography
            color="secondary"
            variant="body1"
            sx={{
              textAlign: "left",
              marginLeft: "1rem",
            }}
          >
            Development Team: {content.contact.team}
          </Typography>
        </Box>
      </ThemeProvider>
    </Container>
  );
};

export default Communications;
