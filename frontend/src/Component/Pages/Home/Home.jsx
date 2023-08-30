import React from "react";
import Hero from "../../Hero";
import MeetOurTeam from "../../MeetOurTeam";
import Carousel from "../../Common/Carousel";
import FeatureTop from "../../FeatureTop";
import "./homeStyles.css";
import Products from "../../Products";
import Platforms from "../../Platforms";
import Footer from "../../Common/Footer";
import CssBaseline from "@mui/material/CssBaseline";
import CountNumber from "../../CountNumber";
import FeatureBottom from "../../FeatureBottom";
import { homeSelector } from "../../../Redux/selector";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { getInfo } from "./homeSlice";
import { useEffect } from "react";
import { Box, Container } from "@mui/material";
import AOS from "aos";
import "aos/dist/aos.css";
const Home = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getInfo());
  }, []);

  const home = useSelector(homeSelector);
  // const { infos, status } = home;

  return (
    useEffect(() => {
      AOS.init({
        duration: 1000,
      });
    }, []),
    (
      <Container
        maxWidth="xl"
        style={{
          overflowY: "hidden",
        }}
      >
        <CssBaseline />
        <Box data-aos="fade-up">
          <Hero />
          <CountNumber />
        </Box>
        <Box data-aos="fade-up">
          <MeetOurTeam />
        </Box>
        <Box data-aos="fade-up">
          <FeatureTop />
        </Box>
        <Box data-aos="fade-up">
          <Platforms />
        </Box>
        <Box data-aos="fade-up">
          <FeatureBottom />
        </Box>
        <Box data-aos="fade-up">
          <Products />
        </Box>
        <Box data-aos="fade-up">
          <Carousel />
        </Box>
      </Container>
    )
  );
};

export default Home;
