import { Box, Typography, Grid, Button, Container } from "@mui/material";
import PublicIcon from "@mui/icons-material/Public";
import DiamondIcon from "@mui/icons-material/Diamond";
import PeopleOutlineIcon from "@mui/icons-material/PeopleOutline";
function Landing() {
  return (
    <Box
      sx={{
        backgroundColor: "#F4FCFF",
        width: "100vw",
        minHeight: "100vh",
        display: "flex",
        marginTop: "50px",
        alignItems: "center",
        justifyContent: "center",
        overflowX: "hidden",
      }}
    >
      <Container>
        <Grid container spacing={4} alignItems="center">
          {/* Image Section */}
          <Grid
            item
            xs={12}
            md={6}
            sx={{
              textAlign: "center",
              marginTop: "60px",
              borderRadius: "8px",
              overflow: "visible",
              position: "relative", 
            }}
          >
            <Box
              sx={{
                display: "inline-block",
                padding: "20px",
                backgroundColor: "#F4FCFF",
                borderRadius: "8px",
                position: "relative", 
                zIndex: 1, 
              }}
            >
              <Typography
                variant="span"
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  position: "absolute",
                  backgroundColor: "#FFC750",
                  height: "120px",
                  width: "120px",
                  top: 180,
                  textAlign: "center",
                  left: "50%",
                  borderRadius: "20px",

                  transform: "translateX(-50%)",
                  zIndex: 2, 
                }}
              >
                <Typography variant="h3">15</Typography>
                years of travel business
              </Typography>

              <img
                border="20"
                src="src/assets/image7 (1).jpg"
                alt="Travel"
                width={350}
                style={{
                  borderColor: "#ffffff",
                  borderRadius: "8px",
                  transform: "rotate(-20deg)",
                  position: "relative", 
                  zIndex: 1, 
                }}
              />

              <img
                src="src/assets/image8.jpg"
                alt="Travel"
                border="20"
                height={250}
                style={{
                  borderColor: "#ffffff",
                  borderRadius: "8px",
                  transform: "rotate(20deg)",
                  marginTop: "20px",
                  position: "relative",
                  zIndex: 1,
                }}
              />
            </Box>
          </Grid>

          {/* Text and Stats Section */}
          <Grid
            item
            xs={12}
            md={6}
            sx={{
              borderRadius: "8px",
              position: "relative",
            }}
          >
            <Typography variant="div" gutterBottom sx={{ color: "#FFC750" }}>
              ABOUT OUR COMPANY
            </Typography>
            <Typography variant="h3" gutterBottom>
              Our Journey Begins With A Passion
            </Typography>
            <Typography variant="body1" color="textSecondary" paragraph>
              Quis ullam, ducimus nostrud sequi iste placeat dictumst, nec! Ante
              tincidunt nostra minima aliquip deleniti dui, tempora nunc. Ex
              nisi, non mus in non ad. Nihil volutpat aliquam laborio.
            </Typography>

            {/* Stats */}
            <Grid container gap={4} spacing={2} sx={{ mt: 4 }}>
              <Grid
                item
                sx={{
                  display: "flex",
                  width: "150px",
                  height: "120px",
                  justifyContent: "center",
                  alignItems: "center",
                  textAlign: "center",
                  border: "1px solid #ccc",
                  borderRadius: "8px",
                  position: "relative",
                }}
              >
                <Box
                  sx={{
                    position: "absolute",
                    top: -20,
                    left: 0,
                    p: 1,
                    backgroundColor: "white",
                    borderRadius: "50%",
                  }}
                >
                  <PeopleOutlineIcon fontSize="small" color="black" />
                </Box>
                <Box>
                  <Typography variant="h5">35k+</Typography>
                  <Typography variant="body2">Satisfied Clients</Typography>
                </Box>
              </Grid>
              <Grid
                item
                sx={{
                  display: "flex",
                  width: "150px",
                  height: "120px",
                  justifyContent: "center",
                  alignItems: "center",
                  textAlign: "center",
                  border: "1px solid #ccc",
                  borderRadius: "8px",
                  position: "relative",
                }}
              >
                <Box
                  sx={{
                    position: "absolute",
                    top: -20,
                    left: 0,
                    p: 1,
                    backgroundColor: "white",
                    borderRadius: "50%",
                  }}
                >
                  <PublicIcon fontSize="small" color="black" />
                </Box>
                <Box>
                  <Typography variant="h5">150+</Typography>
                  <Typography variant="body2">Tour Destinations</Typography>
                </Box>
              </Grid>
              <Grid
                item
                sx={{
                  display: "flex",
                  width: "150px",
                  height: "120px",
                  justifyContent: "center",
                  alignItems: "center",
                  textAlign: "center",
                  border: "1px solid #ccc",
                  borderRadius: "8px",
                  position: "relative",
                }}
              >
                <Box
                  sx={{
                    position: "absolute",
                    top: -20,
                    left: 0,
                    p: 1,
                    backgroundColor: "white",
                    borderRadius: "50%",
                  }}
                >
                  <DiamondIcon fontSize="small" color="black" />
                </Box>
                <Box>
                  <Typography variant="h5">22+</Typography>
                  <Typography variant="body2">Awards Achieved</Typography>
                </Box>
              </Grid>
            </Grid>

            {/* Learn More Button */}
            <Box sx={{ mt: 4 }}>
              <Button
                variant="contained"
                sx={{
                  backgroundColor: "#FFC750",
                  "&:hover": { backgroundColor: "orange" },
                }}
              >
                Learn More
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default Landing;
