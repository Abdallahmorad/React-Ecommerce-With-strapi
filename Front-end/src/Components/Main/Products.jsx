import { Alert, CircularProgress, Grid, useTheme } from "@mui/material";

import ProductItem from "./ProductItem";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchProducts } from "../../Features/productSlice";
const Products = () => {
  const theme = useTheme();
  const dispatch = useDispatch();
  const { products, loading, error } = useSelector((state) => state.product);
  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  console.log(products.data);
  return (
    <Grid
      container
      spacing={2}
      justifyContent={"space-between"}
      mt={4}
      sx={{
        [theme.breakpoints.down("md")]: {
          justifyContent: "center",
        },
      }}
    >
      {loading ? (
        <CircularProgress sx={{ mx: "auto", color: "#d23f57" }} />
      ) : (
        products.data?.map((item) => <ProductItem key={item.id} item={item} />)
      )}

      {!loading && error && (
        <Alert variant={"outlined"} color="danger">
          {error}
        </Alert>
      )}
      {/* {
        products.data?.map((item) => <ProductItem key={item.id} item={item} />)} */}
    </Grid>
  );
};

export default Products;
