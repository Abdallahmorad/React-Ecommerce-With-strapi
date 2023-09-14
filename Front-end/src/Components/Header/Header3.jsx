import {
  Close,
  Dashboard,
  ElectricBikeOutlined,
  KeyboardArrowRight,
  LaptopChromebookOutlined,
  MenuBookOutlined,
  SportsEsportsOutlined,
} from "@mui/icons-material";
import {
  Box,
  Container,
  Drawer,
  IconButton,
  ListItemIcon,
  ListItemText,
  Stack,
  Typography,
  useMediaQuery,
} from "@mui/material";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";

import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Links from "./Links";

const Header3 = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const [state, setState] = useState({
    top: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const links = [
    { mainLink: "Home", subLinks: ["Link 1", "Link 2", "Link 3"] },
    { mainLink: "Mega menu", subLinks: ["Link 1", "Link 2", "Link 3"] },
    {
      mainLink: "full screen menu",
      subLinks: ["Link 1", "Link 2", "Link 3"],
    },
    { mainLink: "pages", subLinks: ["Link 1", "Link 2", "Link 3"] },
    {
      mainLink: "user account",
      subLinks: ["Link 1", "Link 2", "Link 3"],
    },
    {
      mainLink: "vendor account",
      subLinks: ["Link 1", "Link 2", "Link 3"],
    },
  ];
  return (
    <Container
      sx={{
        py: 2,
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <div>
        <Button
          id="basic-button"
          variant="contained"
          aria-controls={open ? "basic-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
          onClick={handleClick}
          sx={{
            width: "200px",
            display: "flex",
            justifyContent: "space-between",
            backgroundColor: "#2b3445",
            "&:hover": { backgroundColor: "#2b3445" },
            color: "#fff",
          }}
        >
          <Stack direction={"row"} gap={"3px"}>
            <Dashboard />
            <Typography variant="body1" sx={{ textTransform: "capitalize" }}>
              Categories
            </Typography>
          </Stack>
          <KeyboardArrowRight color="inherit" />
        </Button>
        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            "aria-labelledby": "basic-button",
          }}
        >
          <MenuItem sx={{ width: "200px" }} onClick={handleClose}>
            <ListItemIcon>
              <ElectricBikeOutlined fontSize="small" />
            </ListItemIcon>

            <ListItemText>Bikes</ListItemText>
          </MenuItem>

          <MenuItem onClick={handleClose}>
            <ListItemIcon>
              <LaptopChromebookOutlined fontSize="small" />
            </ListItemIcon>

            <ListItemText>Electronics</ListItemText>
          </MenuItem>

          <MenuItem onClick={handleClose}>
            <ListItemIcon>
              <MenuBookOutlined fontSize="small" />
            </ListItemIcon>

            <ListItemText>Books</ListItemText>
          </MenuItem>

          <MenuItem onClick={handleClose}>
            <ListItemIcon>
              <SportsEsportsOutlined fontSize="small" />
            </ListItemIcon>

            <ListItemText>Games</ListItemText>
          </MenuItem>
        </Menu>
      </div>

      {useMediaQuery("(min-width:1200px)") && (
        <Stack gap={4} direction={"row"} alignItems={"center"}>
          <Links title={"Home"} />
          <Links title={"Mega Menu"} />
          <Links title={"Full Screen Menu"} />
          <Links title={"pages"} />
          <Links title={"User Account"} />
          <Links title={"Vendor Account"} />
        </Stack>
      )}

      {useMediaQuery("(max-width:1200px)") && (
        <IconButton onClick={toggleDrawer("top", true)}>
          <MenuIcon fontSize="large" />
        </IconButton>
      )}

      <Drawer
        anchor={"top"}
        open={state["top"]}
        onClose={toggleDrawer("top", false)}
        sx={{ ".MuiPaper-root.MuiPaper-elevation16": { height: "100%" } }}
      >
        <Box
          sx={{
            width: "444px",
            margin: "auto",
            mt: 10,
            py: 2,
          }}
        >
          <IconButton
            sx={{
              marginLeft: "395px",
              ":hover": { rotate: "30deg", color: "#d23f57" },
              transition: "all .2s linear",
            }}
            onClick={toggleDrawer("top", false)}
          >
            <Close />
          </IconButton>

          {links.map((item) => (
            <Accordion
              key={item.mainLink}
              elevation={0}
              sx={{ bgcolor: "initial" }}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography>{item.mainLink}</Typography>
              </AccordionSummary>
              <AccordionDetails sx={{ py: 0 }}>
                <List sx={{ py: 0 }}>
                  {item.subLinks.map((link) => (
                    <ListItem key={link} disablePadding>
                      <ListItemButton>
                        <ListItemText primary={link} />
                      </ListItemButton>
                    </ListItem>
                  ))}
                </List>
              </AccordionDetails>
            </Accordion>
          ))}
        </Box>
      </Drawer>
    </Container>
  );
};

export default Header3;
