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
import { theme } from "../../../data";
import { ThemeProvider } from "@emotion/react";
import Divider from "@mui/material/Divider";
import Rating from "@mui/material/Rating";
import ManPhoto from "../../../src/assets/teamavartars/man.png";

const Carousel = ({ data }) => {
  return (
    <Container
      maxWidth="xl"
      sx={{
        marginTop: "4rem",
        marginBottom: "2rem",
        // width: "768",
      }}
    >
      <ThemeProvider theme={theme}>
        <Typography
          align="left"
          variant="h3"
          color="primary"
          sx={{
            marginBottom: "2rem",
            fontWeight: "bold",
          }}
        >
          What Colleagues Say About Us ...
        </Typography>
        <Box>
          <Typography
            variant="h3"
            color="primary"
            sx={{
              marginBottom: "2rem",
              fontWeight: "bold",
            }}
          ></Typography>
        </Box>
        <Swiper
          style={{
            "--swiper-navigation-color": "#E10174",
            padding: "2rem 2rem 0 2rem",
          }}
          spaceBetween={24}
          slidesPerView={3}
          loop={true}
          // centeredSlides={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            576: {
              slidesPerView: 2,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 50,
            },
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >
          {data.map((testimonial) => {
            const { id, name, role, title, image, regconition } = testimonial;
            return (
              <SwiperSlide key={id}>
                <Card
                  sx={{
                    minWidth: 350,
                    height: "300px",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    padding: "1rem",
                    margin: "1rem",
                    columnGap: "1rem",
                    border: `2px solid ${theme.palette.primary.main}`,
                    borderRadius: "1rem",
                    // backgroundColor: `${theme.palette.primary.light}}`,
                  }}
                >
                  <Box>
                    <img
                      src={ManPhoto}
                      alt={name}
                      width={70}
                      height={70}
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
                    <Typography variant="h5">{title}</Typography>

                    <Rating name="size-medium" value={5} readOnly />

                    <Typography
                      variant="body2"
                      color="text.secondary"
                      pt="1rem"
                    >
                      {regconition}
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

export default Carousel;
