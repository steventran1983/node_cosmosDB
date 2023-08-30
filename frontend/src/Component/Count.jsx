import React from "react";
import { Container, Typography, Box } from "@mui/material";
import { theme } from "../../data";
import { ThemeProvider } from "@emotion/react";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import ThumbUpAltIcon from "@mui/icons-material/ThumbUpAlt";
import WorkspacePremiumIcon from "@mui/icons-material/WorkspacePremium";
import BadgeIcon from "@mui/icons-material/Badge";
import CountUp, { useCountUp } from "react-countup";

const Count = ({ info }) => {
  const { icon, number, letters } = info;
  return (
    <Box
      sx={{
        color: "secondary.main",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        rowGap: "1rem",
      }}
    >
      {icon}
      <Typography variant="h5">{letters}</Typography>
      <Typography
        style={{
          background: "linear-gradient(90deg, #FB0087 0%, #FFFFFF 100%)",
          fontWeight: "bold",
          WebkitBackgroundClip: "text",
          webkitTextFillColor: "transparent",
          fontSize: "3rem",
        }}
      >
        <CountUp end={number} />+
      </Typography>
    </Box>
  );
};

export default Count;
