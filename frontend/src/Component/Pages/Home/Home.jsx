import React from "react";
import Hero from "../../Hero";
import MeetOurTeam from "../../MeetOurTeam";
import Carousel from "../../Common/Carousel";
import FeatureTop from "../../FeatureTop";
import Patents from "../../Patents";
import "./homeStyles.css";
import Products from "../../Products";
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
import MeetTeamSkeleton from "../../Skeleton/MeetTeamSkeleton";
import PatentSkeleton from "../../Skeleton/PatentSkeleton";
import TestinomialSkeleton from "../../Skeleton/TestinomialSkeleton";
const Home = () => {
  const dispatch = useDispatch();
  const home = useSelector(homeSelector);
  useEffect(() => {
    dispatch(getInfo());
  }, []);

  console.log(`This is Home page ${home}`);
  const { status } = home;
  const { teamMembers, products, testimonials, patents } = home.infos;

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
        {/* <SkeletonTeam /> */}

        {status == "loading" ? (
          <Box data-aos="fade-up">
            <MeetTeamSkeleton />
          </Box>
        ) : (
          <Box data-aos="fade-up">
            <MeetOurTeam data={teamMembers} />
          </Box>
        )}
        <Box data-aos="fade-up">
          <FeatureTop />
        </Box>

        {status == "loading" ? (
          <Box data-aos="fade-up">
            <PatentSkeleton />
          </Box>
        ) : (
          <Box data-aos="fade-up">
            <Patents data={patents} />
          </Box>
        )}

        {status == "loading" ? (
          <Box data-aos="fade-up">
            <MeetTeamSkeleton />
          </Box>
        ) : (
          <Box data-aos="fade-up">
            <Products data={products} />
          </Box>
        )}

        <Box data-aos="fade-up">
          <FeatureBottom />
        </Box>
        {/* <Box data-aos="fade-up">
          <Platforms />
        </Box> */}
        {status == "loading" ? (
          <Box data-aos="fade-up">
            <TestinomialSkeleton />
          </Box>
        ) : (
          <Box data-aos="fade-up">
            <Carousel data={testimonials} />
          </Box>
        )}
      </Container>
    )
  );
};

export default Home;
