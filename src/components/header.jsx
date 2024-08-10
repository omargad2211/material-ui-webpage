import { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Container,
  Box,
  IconButton,
  Menu,
  MenuItem,
  useMediaQuery,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useTheme } from "@mui/material/styles";

function Header() {
  const [anchorEl, setAnchorEl] = useState(null);
  const theme = useTheme();
  const isMobileOrTablet = useMediaQuery(theme.breakpoints.down("md")); // Adjusted for both small and medium screens

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar
      position="fixed"
      color="transparent"
      elevation={0}
      sx={{ backgroundColor: "#fff", width: "100vw" }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            component="div"
            sx={{ mr: 5, color: "#ffbf00" }}
          >
            Marsh Travel Pro
          </Typography>

          {isMobileOrTablet ? (
            <Box sx={{ marginLeft: "auto" }}>
              <IconButton
                edge="start"
                color="inherit"
                aria-label="menu"
                onClick={handleMenuOpen}
              >
                <MenuIcon sx={{ color: "#000" }} />
              </IconButton>
              <Menu
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleMenuClose}
              >
                <MenuItem sx={{ color: "#FFC750" }} onClick={handleMenuClose}>
                  Home
                </MenuItem>
                <MenuItem onClick={handleMenuClose}>About</MenuItem>
                <MenuItem onClick={handleMenuClose}>Destinations</MenuItem>
                <MenuItem onClick={handleMenuClose}>Packages</MenuItem>
                <MenuItem onClick={handleMenuClose}>Blog</MenuItem>
                <MenuItem onClick={handleMenuClose}>
                  <Button
                    variant="contained"
                    color="warning"
                    sx={{
                      fontWeight: "bold",
                      color: "#fff",
                      backgroundColor: "#FFC750",
                    }}
                  >
                    Book Now
                  </Button>
                </MenuItem>
              </Menu>
            </Box>
          ) : (
            <>
              <Box sx={{ display: "flex", gap: 2 }}>
                <Button
                  color="inherit"
                  sx={{ color: "#FFC750", "&:hover": { color: "#ffbf00" } }}
                >
                  Home
                </Button>
                <Button
                  color="inherit"
                  sx={{ color: "#000", "&:hover": { color: "#ffbf00" } }}
                >
                  About
                </Button>
                <Button
                  color="inherit"
                  sx={{ color: "#000", "&:hover": { color: "#ffbf00" } }}
                >
                  Destinations
                </Button>
                <Button
                  color="inherit"
                  sx={{ color: "#000", "&:hover": { color: "#ffbf00" } }}
                >
                  Packages
                </Button>
                <Button
                  color="inherit"
                  sx={{ color: "#000", "&:hover": { color: "#ffbf00" } }}
                >
                  Blog
                </Button>
              </Box>
              <Box sx={{ marginLeft: "auto" }}>
                <Button
                  variant="contained"
                  sx={{
                    backgroundColor: "#FFC750",
                    color: "#fff",
                    fontWeight: "bold",
                    "&:hover": { backgroundColor: "#e6ac00" },
                  }}
                >
                  Book Now
                </Button>
              </Box>
            </>
          )}
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Header;
