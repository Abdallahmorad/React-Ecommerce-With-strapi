/* eslint-disable react/prop-types */
import {
  DarkModeOutlined,
  ExpandMore,
  Facebook,
  Instagram,
  Twitter,
  WbSunnyOutlined,
} from "@mui/icons-material";
import {

  Container,
  IconButton,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import { useState } from "react";

const options = ["EN", "AR"];

const Header1 = ({ setMode }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedIndex, setSelectedIndex] = useState(1);
  const open = Boolean(anchorEl);
  const handleClickListItem = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuItemClick = (event, index) => {
    setSelectedIndex(index);
    setAnchorEl(null);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const theme = useTheme();
  return (
    <div
      style={{
        backgroundColor: "#2b3445",
        fontSize: "small",
        color: "white",
      }}
    >
      <Container sx={{ display: "flex", justifyContent: "space-between" }}>
        {/* stack1 */}
        <Stack gap={2} direction={"row"} alignItems={"center"}>
          <Typography
            variant="p"
            sx={{ backgroundColor: "#d23f57" }}
            p={"5px 15px"}
            borderRadius={"10px"}
          >
            Hot
          </Typography>
          <Typography variant="p">Free Express Shopping</Typography>
        </Stack>

        {/* stack1 */}
        <Stack direction={"row"} alignItems={"center"} gap={0}>
          <IconButton
            size="small"
            color="inherit"
            onClick={() => {
              setMode((prev) => (prev === "dark" ? "light" : "dark"));
              localStorage.setItem(
                "mode",
                theme.palette.mode === "dark" ? "light" : "dark"
              );
            }}
          >
            {theme.palette.mode === "dark" ? (
              <DarkModeOutlined fontSize="small" />
            ) : (
              <WbSunnyOutlined fontSize="small" />
            )}
          </IconButton>

          <div>
            <List
              component="nav"
              aria-label="Device settings"
              sx={{ color: "#fff", p: 0, m: 0 }}
            >
              <ListItem
                id="lock-button"
                aria-haspopup="listbox"
                aria-controls="lock-menu"
                aria-label="when device is locked"
                aria-expanded={open ? "true" : undefined}
                onClick={handleClickListItem}
                sx={{
                  "&:hover": { cursor: "pointer" },
                  fontSize: "small",
                  p: 1,
                }}
              >
                <ListItemText
                  secondary={options[selectedIndex]}
                  sx={{
                    ".MuiTypography-root": { color: "#fff" },
                    fontSize: "small",
                  }}
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
                  sx={{ fontSize: "small" }}
                >
                  {option}
                </MenuItem>
              ))}
            </Menu>
          </div>

          <IconButton size="small" color="inherit">
            <Twitter fontSize="small" />
          </IconButton>
          <IconButton size="small" color="inherit">
            <Facebook fontSize="small" />
          </IconButton>
          <IconButton size="small" color="inherit">
            <Instagram fontSize="small" />
          </IconButton>
        </Stack>
      </Container>
    </div>
  );
};

export default Header1;
