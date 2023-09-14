import { Box, Container, Stack, Typography, useTheme } from "@mui/material";
import { useState } from "react";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import Products from "./Products";
import { useDispatch } from "react-redux";
import { fetchProducts, getCategories } from "../../Features/productSlice";

const Main = () => {
  const [alignment, setAlignment] = useState("All Products");
  const dispatch = useDispatch("");

  const handleChange = (event, newAlignment) => {
    setAlignment(newAlignment);
  };

  const theme = useTheme();
  return (
    <Container sx={{ mt: 4 }}>
      <Stack
        sx={{
          [theme.breakpoints.down("md")]: {
            flexDirection: "column",
            gap: 2,
            textAlign: "center",
          },
        }}
        direction={"row"}
        alignItems={"center"}
        justifyContent={"space-between"}
      >
        <Box>
          <Typography variant="h5" component={"h5"}>
            Selected Products
          </Typography>
          <Typography variant="p" component={"p"}>
            All our new arrivals in a exclusive brand selection
          </Typography>
        </Box>

        <ToggleButtonGroup
          color="error"
          value={alignment}
          exclusive
          onChange={handleChange}
          aria-label="Platform"
          sx={{
            ".Mui-selected": {
              backgroundColor: "initial",
              border: "1px solid #d23f57",
            },
          }}
        >
          <ToggleButton
            sx={{
              width: "130px",
              fontSize: "small",
              textTransform: "capitalize",
            }}
            value="All Products"
            onClick={() => dispatch(fetchProducts())}
          >
            All Products
          </ToggleButton>
          <ToggleButton
            sx={{
              width: "130px",
              fontSize: "small",
              textTransform: "capitalize",
            }}
            value="Men"
            onClick={() => dispatch(getCategories("Men"))}
          >
            Men Category
          </ToggleButton>
          <ToggleButton
            sx={{
              width: "130px",
              fontSize: "small",
              textTransform: "capitalize",
            }}
            value="Women"
            onClick={() => dispatch(getCategories("Women"))}
          >
            Women Category
          </ToggleButton>
        </ToggleButtonGroup>
      </Stack>

      <Products />
    </Container>
  );
};

export default Main;
