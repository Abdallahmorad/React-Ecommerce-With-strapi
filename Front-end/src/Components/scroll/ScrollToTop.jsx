import { KeyboardArrowUp } from "@mui/icons-material";
import { Fab, Zoom, useScrollTrigger } from "@mui/material";

const ScrollToTop = () => {
  return (
    <Zoom in={useScrollTrigger()}>
      <Fab
        onClick={() => {
          window.scrollTo({ top: 0, behavior: "smooth" });
        }}
        variant="extended"
        size="small"
        sx={{
          position: "fixed",
          bottom: "30px",
          right: "30px",
          bgcolor: "#d23f57",
          color: "white",
          ":hover": { color: "#000" },
        }}
      >
        <KeyboardArrowUp />
      </Fab>
    </Zoom>
  );
};

export default ScrollToTop;
