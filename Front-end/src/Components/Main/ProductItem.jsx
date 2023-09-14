import { Box, Dialog, Grid, Stack } from "@mui/material";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import productImg1 from "../../assets/ProductsImages/images.jpg";
import { AddShoppingCart } from "@mui/icons-material";
import Rating from "@mui/material/Rating";
import { useState } from "react";
import ProductDetails from "./ProductDetails";
const ProductItem = ({ item }) => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Grid item>
        <Card
          sx={{
            maxWidth: 345,
            ":hover .card-img": { scale: "1.1 ", rotate: "2deg" },
          }}
        >
          <Box sx={{ overflow: "hidden" }}>
            <CardMedia
              className="card-img"
              sx={{ height: 340, transition: "all .2s linear" }}
              image={`${item.attributes.image.data[0].attributes.url}`}
              title="green iguana"
            />
          </Box>
          <CardContent>
            <Stack
              direction={"row"}
              alignItems={"center"}
              justifyContent={"space-between"}
            >
              <Typography gutterBottom variant="h5" component="div">
                {item.attributes.title}
              </Typography>
              <Typography
                gutterBottom
                variant="div"
                fontSize={"15px"}
                component="h6"
              >
                ${item.attributes.price}
              </Typography>
            </Stack>

            <Typography
              variant="body2"
              color="text.secondary"
              minHeight={"50px"}
            >
              {item.attributes.desc}
            </Typography>
          </CardContent>

          <CardActions
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Button
              sx={{ textTransform: "capitalize", color: "#d23f57" }}
              onClick={handleClickOpen}
            >
              <AddShoppingCart sx={{ mr: 1 }} />
              Add to Cart
            </Button>

            <Rating
              name="simple-controlled"
              precision={0.5}
              value={item.attributes.rating}
              readOnly
            />
          </CardActions>
        </Card>
      </Grid>

      <Dialog
        open={open}
        onClose={handleClose}
        sx={{ ".MuiPaper-root": { minWidth: { xs: "100%", md: "800px" } } }}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <ProductDetails handleClose={handleClose} item={item} />
      </Dialog>
    </>
  );
};

export default ProductItem;
