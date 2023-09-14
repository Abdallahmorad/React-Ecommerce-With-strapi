import {
  ExpandMore,
  Person2Outlined,
  ShoppingCartOutlined,
} from "@mui/icons-material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";

import {
  Container,
  InputBase,
  Stack,
  Typography,
  styled,
  IconButton,
  Badge,
  useMediaQuery,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { useState } from "react";
const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: "0 4px",
  },
}));

const Search = styled("div")(({ theme }) => ({
  flexGrow: 0.4,
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  display: "flex",
  justifyContent: "space-between",

  overflow: "hidden",
  border: "1px solid #eee",
  marginRight: theme.spacing(2),
  marginLeft: 0,
  "&:hover": { border: "1px solid #d23f57" },

  minWidth: "300px",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const Header2 = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const open = Boolean(anchorEl);
  const handleClickListItem = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuItemClick = (event, index) => {
    setSelectedIndex(index);
    setAnchorEl(null);
  };

  const options = ["All Categories", "CAR", "Clothes", "Electronics"];

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Container
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        py: 2,
      }}
    >
      <Stack alignItems={"center"}>
        <ShoppingCartOutlined />
        <Typography variant="p" fontWeight={"bold"}>
          E-commerce
        </Typography>
      </Stack>

      {useMediaQuery("(min-width:700px)") && (
        <Search sx={{ borderRadius: "22px" }}>
          <SearchIconWrapper>
            <SearchIcon />
          </SearchIconWrapper>
          <StyledInputBase
            placeholder="Search…"
            inputProps={{ "aria-label": "search" }}
            sx={{ width: "100%" }}
          />
          <div>
            <List
              component="nav"
              aria-label="Device settings"
              sx={{ bgcolor: "background.paper" }}
            >
              <ListItem
                sx={{
                  borderLeft: "1px solid #eee ",
                  "&:hover": { cursor: "pointer" },
                  py: "3px",
                  px: "6px",
                  width: "130px",
                  textAlign: "center",
                }}
                id="lock-button"
                aria-haspopup="listbox"
                aria-controls="lock-menu"
                aria-label="when device is locked"
                aria-expanded={open ? "true" : undefined}
                onClick={handleClickListItem}
              >
                <ListItemText
                  // sx={{border:'1px solid red'}}
                  secondary={options[selectedIndex]}
                />
                <ExpandMore />
              </ListItem>
            </List>
            <Menu
              id="lock-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{
                "aria-labelledby": "lock-button",
                role: "listbox",
              }}
            >
              {options.map((option, index) => (
                <MenuItem
                  key={option}
                  selected={index === selectedIndex}
                  onClick={(event) => handleMenuItemClick(event, index)}
                >
                  {option}
                </MenuItem>
              ))}
            </Menu>
          </div>
        </Search>
      )}

      <Stack direction={"row"} gap={1}>
        <IconButton aria-label="cart">
          <StyledBadge badgeContent={4} color="secondary">
            <ShoppingCartIcon />
          </StyledBadge>
        </IconButton>
        <IconButton>
          <Person2Outlined />
        </IconButton>
      </Stack>
    </Container>
  );
};

export default Header2;
