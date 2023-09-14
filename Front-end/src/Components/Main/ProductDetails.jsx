/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */

import { AddShoppingCart, Close } from "@mui/icons-material";
import { Box, Button, IconButton, Stack, Typography } from "@mui/material";

const ProductDetails = ({ handleClose }) => {
  return (
    <Stack
      sx={{
        flexDirection: { xs: "column", sm: "row" },
      }}
      gap={2.5}
      alignItems={"center"}
      width={"100%"}
      position={"relative"}
    >
      <Box>
        <img
          src="src/assets/ProductsImages/images.jpg"
          width={"300px"}
          height={"400px"}
          className="productImage"
          style={{ objectFit: "cover" ,display:'flex'}}
          alt=""
        />
      </Box>

      <Box sx={{ textAlign: { xs: "center", sm: "left" } }}>
        <IconButton
          sx={{
            position: "absolute",
            top: "10px",
            right: "10px",
            // marginLeft: "400px",
            ":hover": { rotate: "30deg", color: "#d23f57" },
            transition: "all .2s linear",
          }}
          onClick={handleClose}
        >
          <Close />
        </IconButton>

        <Typography variant="h5">Men's Fashion</Typography>
        <Typography variant="h6" color={"#d23f57"}>
          $12,99
        </Typography>
        <Typography variant="p">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore
          commodi, voluptatibus alias optio qui veritatis distinctio impedit,
          pariatur minus ducimus a eum magnam eligendi reiciendis dolorum?
          Possimus est sed molestias.
        </Typography>

        <Stack
          direction={"row"}
          gap={1}
          mt={2}
          sx={{ justifyContent: { xs: "center", sm: "flex-start" } }}
        >
          <img
            style={{ border: "1px solid #eee" }}
            width={"90px"}
            height={"100px"}
            src="src/assets/ProductsImages/images.jpg"
            alt=""
          />
          <img
            style={{ border: "1px solid #eee" }}
            width={"90px"}
            height={"100px"}
            src="src/assets/ProductsImages/final.png"
            alt=""
          />
        </Stack>

        <Button
          sx={{
            textTransform: "capitalize",
            backgroundColor: "#d23f57",
            ":hover": { bgcolor: "#d23f57" },
            color: "white",
            my: 2,
          }}
          variant="contained"
        >
          <AddShoppingCart sx={{ mr: 1 }} />
          Add to Cart
        </Button>
      </Box>
    </Stack>
  );
};

export default ProductDetails;
