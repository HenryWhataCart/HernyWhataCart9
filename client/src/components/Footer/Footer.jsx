import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import { Box } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { styled } from "@mui/system";
import { useNavigate } from "react-router-dom";

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

  const handleSupportClick = () => {
    navigate("/support");
  };

  return (
    <ThemeProvider theme={theme}>
      <ResponsiveFooter
        component="footer"
        sx={{
          backgroundColor: "transparent",
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
              <Typography variant="body2" color="text.primary">
                {"Copyright © "}
                <Link color="inherit" href="https://whatacart.ai/">
                  Whatacart
                </Link>{" "}
                {new Date().getFullYear()}
              </Typography>
            </Grid>
          </Grid>
        </Container>
      </ResponsiveFooter>
    </ThemeProvider>
  );
}
