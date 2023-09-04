import React from "react";
import { useSelector } from "react-redux";
import { productSelector } from "../../../Redux/selector";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getProducts } from "./productSlice";
import { useCallback } from "react";
import { loadSlim } from "tsparticles-slim";
import { Avatar, Box, Container, Typography } from "@mui/material";
import Particles from "react-tsparticles";
import bgImage from "../../../assets/images/bg2.png";
import Product from "./Product";

const Products = () => {
  const particlesInit = useCallback(async (engine) => {
    console.log(engine);
    await loadSlim(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    await console.log(container);
  }, []);
  const dispatch = useDispatch();
  const { products } = useSelector(productSelector);
  useEffect(() => {
    dispatch(getProducts());
  }, []);
  return (
    <>
      <Container
        maxWidth="xl"
        sx={{
          zIndex: 1000,
          marginBottom: "2rem",
        }}
      >
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
                marginBottom: "1rem",
              }}
            >
              Data Intelligence & Innovation
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
      {/* <Particles
        className="particles"
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={{
          // fullScreen: {
          //   enable: false,
          //   zIndex: 0,
          // },
          background: {
            color: {
              value: "black",
            },
          },
          fpsLimit: 120,
          interactivity: {
            events: {
              onClick: {
                enable: true,
                mode: "push",
              },
              onHover: {
                enable: true,
                mode: "repulse",
              },
              resize: true,
            },
            modes: {
              push: {
                quantity: 4,
              },
              repulse: {
                distance: 200,
                duration: 0.4,
              },
            },
          },
          particles: {
            color: {
              value: "#ffffff",
            },
            links: {
              color: "#ffffff",
              distance: 150,
              enable: true,
              opacity: 0.5,
              width: 1,
            },
            move: {
              direction: "none",
              enable: true,
              outModes: {
                default: "bounce",
              },
              random: false,
              speed: 2,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                area: 800,
              },
              value: 80,
            },
            opacity: {
              value: 0.5,
            },
            shape: {
              type: "circle",
            },
            size: {
              value: { min: 1, max: 5 },
            },
          },
          detectRetina: true,
        }}
      /> */}
    </>
  );
};
export default Products;
