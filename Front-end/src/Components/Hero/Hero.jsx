import {
  Box,
  Button,
  Container,
  Link,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import img2 from "../../assets/Images/banner-16.jpg";
import img1 from "../../assets/Images/banner-17.jpg";
import img3 from "../../assets/Images/banner-15.jpg";
import img4 from "../../assets/Images/banner-25.jpg";

import { ArrowForward } from "@mui/icons-material";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "./styles.css";

const swiperSlides = [
  {
    text: "Men",
    img: img3,
  },
  {
    text: "Women",
    img: img4,
  },
];
const Hero = () => {
  const theme = useTheme();
  return (
    <Container
      sx={{
        display: "flex",
        alignItems: "center",
        maxWidth: "100%",
        gap: 2,
      }}
    >
      <Swiper
        pagination={{
          dynamicBullets: true,
          clickable: true,
        }}
        loop={true}
        modules={[Pagination]}
        className="mySwiper"
      
      >
        {swiperSlides.map((slide) => (
          <SwiperSlide
            key={slide.text}
            className="parent"
            style={{ position: "relative", color: "black" }}
          >
            <img src={slide.img} width={"100%"} alt="banner"  />
            <Box
              sx={{
                [theme.breakpoints.up("sm")]: {
                  position: "absolute",
                  textAlign: "left",
                  top: "50%",
                  transform: "translateY(-50%)",
                  left: "20px",
                },
                [theme.breakpoints.down("sm")]: {
                  textAlign: "center",
                  py: 4,
                },
              }}
            >
              <Typography variant="h6">Life Style Collection</Typography>
              <Typography variant="h2">{slide.text}</Typography>
              <Typography variant="h4" color={"#d23f57"}>
                Sale Up To 30% OFF
              </Typography>
              <Typography variant="p">
                Get Free Shopping iN Orders Over $99,00
              </Typography>
              <Button
                sx={{
                  [theme.breakpoints.down("sm")]: {
                    mx: "auto",
                  },
                  display: "block",
                  bgcolor: "#000",
                  ":hover": { bgcolor: "#000" },
                  my: 2,
                  width: "200px",
                  color: "white",
                }}
                variant="contained"
              >
                Shop Now
              </Button>
            </Box>
          </SwiperSlide>
        ))}
      </Swiper>

      {useMediaQuery("(min-width:1200px)") && (
        <Stack direction={"column"} minWidth={"26%"} gap={0.8}>
          <Box sx={{ position: "relative" }}>
            <img
              src={img1}
              alt=""
              width={"100%"}
              style={{ borderRadius: "3px" }}
            />
            <Stack
              sx={{
                position: "absolute",
                top: "50%",
                transform: "translateY(-50%)",
                left: 31,
              }}
            >
              <Typography
                variant="caption"
                sx={{
                  color: "#2B3445",
                  fontSize: "18px",
                }}
              >
                NEW ARRIVALS
              </Typography>
              <Typography
                variant="h6"
                sx={{
                  color: "#2B3445",
                  lineHeight: "16px",
                  mt: 1,
                }}
              >
                SUMMER
              </Typography>
              <Typography
                variant="h6"
                sx={{
                  color: "#2B3445",
                }}
              >
                SALE 20% OFF
              </Typography>

              <Link
                sx={{
                  color: "#2B3445",
                  display: "flex",
                  alignItems: "center",
                  gap: "5px",
                  transition: "0.2s",

                  "&:hover": {
                    color: "#D23F57",
                  },
                }}
                href="#"
                underline="none"
              >
                shop now
                <ArrowForward sx={{ fontSize: "13px" }} />
              </Link>
            </Stack>
          </Box>
          <Box sx={{ position: "relative" }}>
            <img
              src={img2}
              alt=""
              width={"100%"}
              style={{ borderRadius: "3px" }}
            />
            <Stack
              sx={{
                position: "absolute",
                top: "50%",
                transform: "translateY(-50%)",
                left: 31,
              }}
            >
              <Typography
                variant="caption"
                sx={{
                  color: "#2B3445",
                  fontSize: "18px",
                  fontWeight: 300,
                }}
              >
                GAMING 4K
              </Typography>
              <Typography
                variant="h6"
                sx={{
                  color: "#2B3445",
                  lineHeight: "16px",
                  mt: 1,
                }}
              >
                DESKTOPS &
              </Typography>

              <Typography
                variant="h6"
                sx={{
                  color: "#2B3445",
                }}
              >
                LAPTOPS
              </Typography>

              <Link
                sx={{
                  color: "#2B3445",
                  display: "flex",
                  alignItems: "center",
                  gap: "5px",
                  transition: "0.2s",

                  "&:hover": {
                    color: "#D23F57",
                  },
                }}
                href="#"
                underline="none"
              >
                shop now
                <ArrowForward sx={{ fontSize: "13px" }} />
              </Link>
            </Stack>
          </Box>
        </Stack>
      )}
    </Container>
  );
};

export default Hero;
