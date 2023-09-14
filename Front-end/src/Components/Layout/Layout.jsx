/* eslint-disable react/prop-types */
import { Box, useTheme } from "@mui/material";
import Header1 from "../Header/Header1";
import Header2 from "../Header/Header2";
import Header3 from "../Header/Header3";
import Hero from "../Hero/Hero";
import IconsSection from "../Hero/IconsSection";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import ScrollToTop from "../scroll/ScrollToTop";

const Layout = ({ setMode }) => {
  const theme = useTheme();
  return (
    <div>
      <Header1 setMode={setMode} />
      <Header2 />
      <Header3 />
      <Box bgcolor={theme.palette.mode === "light" ? "#f6f6f6" : "#1d2021"} py={2}>
        <Hero />
        <IconsSection />
        <Main />
        <Footer />
        <ScrollToTop />
      </Box>
    </div>
  );
};

export default Layout;
