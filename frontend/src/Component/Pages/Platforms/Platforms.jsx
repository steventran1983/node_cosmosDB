import React from "react";
import { theme } from "../../../../data";
import { useSelector } from "react-redux";
import { platformSelector } from "../../../Redux/selector";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getPlatforms } from "./platformSlice";

import { Avatar, Box, Container, Typography } from "@mui/material";

import bgImage from "../../../assets/images/bg2.png";

import Product from "../Products/Product";
import Platform from "./Platform";

const Platforms = () => {
  const dispatch = useDispatch();
  const { platforms } = useSelector(platformSelector);
  useEffect(() => {
    dispatch(getPlatforms());
  }, []);
  platforms ? console.log(platforms) : console.log("no platfomrs");
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
              Platforms
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
            {platforms ? (
              platforms.map((platform, index) => {
                const { platformname } = platform;
                console.log(platformname);
                return <Platform key={index} platform={platform} />;
              })
            ) : (
              <Box
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
export default Platforms;
