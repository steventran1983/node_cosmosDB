import React from "react";
import { Avatar, Box, Button, Container, Typography } from "@mui/material";

import { ThemeProvider } from "@emotion/react";
import { theme } from "../../data";
import { CardActionArea, CardActions } from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { useState } from "react";
import Modal from "@mui/material/Modal";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import Collapse from "@mui/material/Collapse";
import ProductModal from "./ProductModal";

const handleClick = () => {
  setOpen(!open);
};

const Products = ({ data }) => {
  const [modalData, setModalData] = useState({});

  const [open, setOpen] = useState(false);
  const handleClick = () => {
    setOpen(!open);
  };

  const [modal, setModal] = useState(false);
  const handleClose = () => {
    setModal(false);
  };

  const productUpPart = data.filter((product, index) => index < 4);
  const productBelowPart = data.filter((product, index) => index >= 4);

  // console.log(products);
  const handleOnclick = (id) => {
    setModal(true);
    setModalData(data[id - 1]);
  };
  return (
    <Container
      maxWidth="xl"
      sx={{
        marginBottom: "2rem",
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
            Products
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
          {data.length > 0
            ? productUpPart.map((product, index) => {
                const {
                  id,
                  productname,
                  description,
                  goal,
                  use,
                  owner,
                  contributors,
                } = product;

                let descShort = "";
                description.length > 100
                  ? (descShort = description.slice(0, 100) + "...")
                  : (descShort = description);
                return (
                  <Card
                    key={id}
                    sx={{
                      maxWidth: 300,
                      height: 370,
                      border: `1px solid ${theme.palette.primary.main}`,
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "space-between",
                    }}
                  >
                    <CardActionArea
                      onClick={() => handleOnclick(id)}
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
                            src="https://thangtranweek5.blob.core.windows.net/teamphoto/productlogo.png"
                            sx={{
                              width: 100,
                              height: 100,
                              border: `1px solid ${theme.palette.primary.main}`,
                              boxShadow: "0 0 10px #E10174",
                            }}
                          />
                        </Box>
                        <Typography
                          gutterBottom
                          variant="h6"
                          color="primary"
                          sx={{ marginTop: "0.5rem" }}
                        >
                          {productname}
                        </Typography>
                        <Typography variant="body1" color="text.secondary">
                          {descShort}
                        </Typography>
                      </CardContent>
                    </CardActionArea>
                    <CardActions>
                      <Button
                        onClick={() => handleOnclick(id)}
                        onClose={() => setModal(false)}
                        variant="contained"
                        size="small"
                        endIcon={<ArrowForwardIosIcon />}
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
              })
            : ""}
        </Box>

        <Box mt="2rem">
          <Collapse in={open} timeout="auto" unmountOnExit>
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
              {productBelowPart.map((product, index) => {
                const {
                  id,
                  productname,
                  description,
                  goal,
                  use,
                  owner,
                  contributors,
                } = product;
                let descShort = "";
                description.length > 100
                  ? (descShort = description.slice(0, 100) + "...")
                  : (descShort = description);
                return (
                  <Card
                    key={id}
                    sx={{
                      maxWidth: 300,
                      border: `1px solid ${theme.palette.primary.main}`,
                    }}
                  >
                    <CardActionArea
                      onClick={() => handleOnclick(id)}
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
                            src="https://thangtranweek5.blob.core.windows.net/teamphoto/productlogo.png"
                            sx={{
                              width: 100,
                              height: 100,
                              border: `1px solid ${theme.palette.primary.main}`,
                              boxShadow: "0 0 10px #E10174",
                            }}
                          />
                        </Box>
                        <Typography
                          gutterBottom
                          variant="h6"
                          color="primary"
                          sx={{ marginTop: "0.5rem" }}
                        >
                          {productname}
                        </Typography>
                        <Typography variant="body1" color="text.secondary">
                          {descShort}
                        </Typography>
                      </CardContent>
                    </CardActionArea>
                    <CardActions>
                      <Button
                        onClick={() => handleOnclick(id)}
                        onClose={() => setModal(false)}
                        variant="contained"
                        size="small"
                        endIcon={<ArrowForwardIosIcon />}
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
          </Collapse>
          <Button
            onClick={handleClick}
            sx={{
              marginTop: "1rem",
            }}
            // variant="contained"
            // size="small"
            // href="#contained-buttons"
            // // color="primary"
          >
            {open ? (
              <ExpandLess
                sx={{
                  fontSize: "2rem",
                }}
              />
            ) : (
              <ExpandMore />
            )}
          </Button>
        </Box>
        {/* Tis is Modal Part and will be moved to another file */}
        <Modal
          open={modal}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box>
            <ProductModal data={modalData} />
          </Box>
        </Modal>
      </ThemeProvider>
    </Container>
  );
};

export default Products;
