import { Box, Container, Grid, Paper, Typography } from "@mui/material";
import ElectricBoltIcon from "@mui/icons-material/ElectricBolt";
import AccessAlarmsIcon from "@mui/icons-material/AccessAlarms";
import PaymentIcon from "@mui/icons-material/Payment";
import CardMembershipIcon from "@mui/icons-material/CardMembership";

const items = [
  {
    title: "Fast Delivery",
    subTitle: "Start From 10$",
    icon: <ElectricBoltIcon fontSize="large" />,
  },
  {
    title: "Money Guarantee",
    subTitle: " 7 Days Back",
    icon: <CardMembershipIcon fontSize="large" />,
  },
  {
    title: "365 Days",
    subTitle: "For Free Return",
    icon: <AccessAlarmsIcon fontSize="large" />,
  },
  {
    title: "payment",
    subTitle: "Secure System",
    icon: <PaymentIcon fontSize="large" />,
  },
];
const IconsSection = () => {
  return (
    <Container sx={{ mt: 4 }}>
      <Grid container spacing={1} >
        {items.map((item) => (
          <Grid key={item.title} item xs={12} sm={6} md={3} > 
            <Paper
              elevation={2}
              sx={{ p: 2, display: "flex", alignItems: "center", gap: 2 }}
            >
              {item.icon}
              <Box>
                <Typography component="h5">{item.title}</Typography>
                <Typography variant="p" color={"GrayText"}>
                  {item.subTitle}
                </Typography>
              </Box>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default IconsSection;
