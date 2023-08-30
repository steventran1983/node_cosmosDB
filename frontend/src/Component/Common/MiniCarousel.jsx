import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import "./styles.css";
import { theme, teamContact, testimonials } from "../../../data";
import { ThemeProvider } from "@emotion/react";
import Divider from "@mui/material/Divider";
import Rating from "@mui/material/Rating";
import ManPhoto from "../../../src/assets/teamavartars/man.png";

const MiniCarousel = ({ category }) => {
  return (
    <Container
      maxWidth="md"
      height="5"
      sx={{
        marginBottom: "2rem",
      }}
    >
      <ThemeProvider theme={theme}>
        <Swiper
          style={{
            "--swiper-navigation-color": "#E10174",
            padding: "2rem 2rem 0 2rem",
          }}
          spaceBetween={20}
          slidesPerView={1}
          loop={true}
          centeredSlides={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >
          {testimonials.map((testimonial) => {
            const { id, name, role, description1, Description2 } = testimonial;
            return (
              <SwiperSlide key={id}>
                <Card
                  sx={{
                    // height: "500px",
                    // maxWidth: 400,
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    padding: "1rem",
                    margin: "1rem",
                    columnGap: "1rem",
                    // backgroundColor: `${theme.palette.primary.light}}`,
                  }}
                >
                  <Box>
                    <img
                      src={ManPhoto}
                      alt={teamContact[1].image}
                      width={100}
                      height={100}
                      style={{
                        borderRadius: "50%",
                        border: `1px solid ${theme.palette.primary.main}`,
                      }}
                    />
                  </Box>
                  <Box align="left">
                    <Typography variant="h6" color="primary">
                      {name}
                    </Typography>
                    <Typography pb="2rem">{role}</Typography>
                    <Typography variant="h5">{description1}</Typography>

                    <Rating name="size-medium" value={5} readOnly />

                    <Typography
                      variant="body2"
                      color="text.secondary"
                      pt="1rem"
                    >
                      {Description2}
                    </Typography>
                  </Box>
                </Card>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </ThemeProvider>
    </Container>
  );
};

export default MiniCarousel;
