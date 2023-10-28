import React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { CardActionArea } from "@mui/material";
import { theme } from "../../data";
import cardBg from "../assets/images/cardbg1.png";
import { Link } from "react-router-dom";
import { Typography } from "@mui/material";
const CommunicationItem = ({ item }) => {
  return (
    <Card sx={{ maxWidth: 350 }}>
      <CardActionArea href={`/communications/${item.id}`}>
        <CardMedia
          component="img"
          height="75"
          image={cardBg}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {item.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {item.description}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default CommunicationItem;
