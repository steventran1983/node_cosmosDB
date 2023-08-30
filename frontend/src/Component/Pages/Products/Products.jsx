import React from "react";
import Header from "../../Common/Header";
import { useState } from "react";
import { theme } from "../../../../data";
import { useSelector } from "react-redux";
import { productSelector } from "../../../Redux/selector";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getProducts } from "./productSlice";
import Footer from "../../Common/Footer";

import { Avatar, Box, Container, Typography } from "@mui/material";

import bgImage from "../../../assets/images/bg2.png";
import Product from "./Product";

const Products = () => {
  const dispatch = useDispatch();
  const { products } = useSelector(productSelector);
  useEffect(() => {
    dispatch(getProducts());
  }, []);
  products ? console.log(products) : console.log("no products");
  return (
    <>
      <Container maxWidth="xl">
        <Box
          maxWidth="xl"
          disableGutters
          style={{
            backgroundImage: `url(${bgImage})`,
            backgroundSize: "cover",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            marginTop: "2rem",
          }}
        >
          <Box
            sx={{
              backgroundColor: "rgba(0,0,0,0.5)",
              margin: "2rem auto",
              padding: "2rem 2rem",
              borderRadius: "1rem",
            }}
          >
            <Typography
              variant="h3"
              sx={{
                color: "white",
              }}
            >
              Data Intelligent & Innovation
            </Typography>
            <Typography
              variant="h2"
              sx={{
                color: "white",
              }}
            >
              Products
            </Typography>
          </Box>
        </Box>
        <Container
          maxWidth="xl"
          disableGutters
          sx={{
            marginTop: "5rem",
          }}
        >
          <Box
            sx={{
              width: "100%",
              display: "flex",
              flexWrap: "wrap",
              flexDirection: "column ",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {products ? (
              products.map((product, index) => {
                return <Product key={index} product={product} />;
              })
            ) : (
              <Box
                key={id}
                sx={{
                  bgcolor: "background.paper",
                  width: "100%",
                  margin: "2rem",
                }}
              >
                Thang
              </Box>
            )}
          </Box>
        </Container>
      </Container>
      {/* <Footer /> */}
    </>
  );
};
export default Products;
