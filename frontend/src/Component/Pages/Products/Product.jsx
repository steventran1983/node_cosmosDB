import React from "react";
import { useState } from "react";
import { Avatar, Box, Button, Typography } from "@mui/material";

import Divider from "@mui/material/Divider";

import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import Collapse from "@mui/material/Collapse";
import { CollapseComponent } from "./CollapseComponent";
import DvrIcon from "@mui/icons-material/Dvr";

const Product = ({ product }) => {
  const { productname } = product;
  const [open, setOpen] = useState(false);
  const handleClick = () => {
    setOpen(!open);
  };
  return (
    <>
      <Box
        sx={{
          width: "80%",
          backgroundColor: "#fff",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between  ",
            alignItems: "center",
            padding: "0 1rem",
            backgroundImage: "linear-gradient(90deg, #FB0087 0%, #FFFFFF 100%)",
          }}
        >
          <DvrIcon
            sx={{
              fontSize: "3rem",
              color: "#fff",
              padding: "0.5rem 0",
            }}
          />
          <Typography variant="h5">{productname}</Typography>
          <Button onClick={handleClick}>
            {open ? (
              <ExpandLess
                sx={{
                  fontSize: "2rem",
                  color: "#FB0087",
                }}
              />
            ) : (
              <ExpandMore
                sx={{
                  fontSize: "2rem",
                  color: "#FB0087",
                }}
              />
            )}
          </Button>
        </Box>
        <Collapse in={open} timeout="auto" unmountOnExit>
          <CollapseComponent data={product} />
        </Collapse>
        <Divider />
      </Box>
    </>
  );
};

export default Product;
