import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { styled } from "@mui/system";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const theme = createTheme({
  palette: {
    customGreen: {
      main: "#09e6a7",
    },
  },
});

const ResponsiveFooter = styled(Box)(({ theme }) => ({
  [theme.breakpoints.down("sm")]: {
    flexDirection: "column-reverse",
    alignItems: "center",
    textAlign: "center",
  },
}));

export default function Footer() {
  const navigate = useNavigate();
  const darkMode = useSelector((state) => state?.darkMode);

  const handleSupportClick = () => {
    navigate("/support");
  };

  const currentYear = new Date().getFullYear();

  return (
    <ThemeProvider theme={theme}>
      <ResponsiveFooter
        component="footer"
        sx={{
          backgroundColor: darkMode ? "#292F2D" : "transparent",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Container maxWidth="lg">
          <Grid container spacing={2}>
            <Grid
              item
              xs={12}
              sm={6}
              sx={{
                display: "flex",
                justifyContent: "flex-end",
                alignItems: "center",
                paddingRight: 1,
                [theme.breakpoints.down("sm")]: {
                  justifyContent: "center",
                  marginTop: 2,
                },
              }}
            >
              <Button
                variant="contained"
                color="customGreen"
                onClick={handleSupportClick}
                sx={{
                  "&:hover": {
                    animation: "buttonHover 0.2s ease-in-out",
                    background: "#09e6a77b",
                    color: "#0000007b",
                  },
                }}
              >
                Support
              </Button>
            </Grid>
            <Grid
              item
              xs={12}
              sm={6}
              sx={{
                display: "flex",
                alignItems: "center",
                [theme.breakpoints.down("sm")]: {
                  justifyContent: "center",
                },
              }}
            >
              <Typography variant="body2" color={darkMode ? "whiteSmoke" : "text.primary"}>
                {" © "}
                <Link color="inherit" href="https://whatacart.ai/">
                  WhataCart
                </Link>{" "}
                {currentYear}
              </Typography>
            </Grid>
          </Grid>
        </Container>
      </ResponsiveFooter>
    </ThemeProvider>
  );
}