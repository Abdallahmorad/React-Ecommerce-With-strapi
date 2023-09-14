import { Container } from "@mui/material";
import Typography from "@mui/material/Typography";

const Footer = () => {
  return (
    <div
      style={{
        backgroundColor: "#2b3445",
        marginTop: "160px",
        textAlign: "center",
        padding: "20px",
        marginBottom: "-20px",
        color:'white',
        borderTopRightRadius:'5px',
        borderTopLeftRadius:'5px',
      }}
    >
      <Container>
        <Typography variant="h5">
          Designed And Developed By{" "}
          <span style={{color:"#d23f57"}}>
            Abdallah Morad
          </span>{" "}
          ©2023
        </Typography>
      </Container>
    </div>
  );
};

export default Footer;
