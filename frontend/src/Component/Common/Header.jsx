import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Tooltip from "@mui/material/Tooltip";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Badge from "@mui/material/Badge";
import Container from "@mui/material/Container";
import { Link, useNavigate } from "react-router-dom";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { styled } from "@mui/system";
import Typography from "@mui/material/Typography";

//adding T-Mobile Logo
import TmobileLogo from "../../assets/images/tmobile_logo.png";
import { Avatar } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const pages = ["home", "products"];

const magetanColor = "#E10174";

const theme = createTheme({
  palette: {
    primary: {
      main: "#E10174",
      // light: will be calculated from palette.primary.main,
      // dark: will be calculated from palette.primary.main,
      // contrastText: will be calculated to contrast with palette.primary.main
    },
    secondary: {
      main: "#00000",
      light: "#00000",
      // dark: will be calculated from palette.secondary.main,
      contrastText: "#47008F",
    },
  },
});

const settings = ["Profile", "Account", "Dashboard", "Logout"];

function ResponsiveAppBar() {
  const navigate = useNavigate();
  const [tab, setTab] = React.useState("home");
  const handleChange = (event, newValue) => {
    // setTab(newValue);
    console.log("test");
  };

  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleNavMenu = (e) => {
    console.log(e.target.innerText);
    setTab(e.target.innerText.toLowerCase());
    if (e.target.innerText === "TEAM") {
      // dispatch(incrementAsync());
      navigate("/team");
    }
    if (e.target.innerText === "PRODUCTS") {
      navigate("/products");
      // dispatch(GetPosts());
    }
    if (e.target.innerText === "PLATFORMS") {
      navigate("/platforms");
    }
    if (e.target.innerText === "ACHIEVEMENTS") {
      navigate("/achievements");
    }
    if (e.target.innerText === "HOME") {
      navigate("/");
    }
  };
  return (
    <ThemeProvider theme={theme}>
      <Box>
        <AppBar
          sx={{
            width: "100%",
            padding: "0",
            position: "fixed",
            color: "#1976d2",
            background: "black",
            boxShadow: "none",
            alignItems: "center",
            paddingTop: "1rem",
            paddingBottom: "1rem",
          }}
        >
          <Container maxWidth="xl">
            <Toolbar disableGutters>
              {/* <FitbitIcon sx={{ display: { md: "flex" }, mr: 1 }} /> */}
              <img
                src={TmobileLogo}
                alt="tmobile logo"
                height="54px"
                width="54px"
              />
              <Box sx={{ width: "100%" }}>
                <Tabs
                  value={tab}
                  onChange={handleChange}
                  // textColor="primary"
                  // indicatorColor="primary"
                  aria-label="secondary tabs example"
                  centered
                >
                  {pages.map((page, i) => (
                    <Tab
                      key={i}
                      onClick={handleNavMenu}
                      value={page}
                      label={page}
                      sx={{
                        fontSize: "16px",
                        fontWeight: "600",
                        color: `${magetanColor}`,
                      }}
                    />
                  ))}
                </Tabs>
              </Box>
              {/* <Box sx={{ flexGrow: 0 }}>
                <Avatar sx={{ bgcolor: `${magetanColor}` }}>T</Avatar>
              </Box> */}
              <Box sx={{ flexGrow: 0 }}>
                <Tooltip title="Open settings">
                  <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                    <Avatar
                      sx={{
                        bgcolor: `${magetanColor}`,
                        boxShadow: "0 0 10px #E10174",
                      }}
                    >
                      DII
                    </Avatar>
                  </IconButton>
                </Tooltip>
                <Menu
                  sx={{ mt: "45px" }}
                  id="menu-appbar"
                  anchorEl={anchorElUser}
                  anchorOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  open={Boolean(anchorElUser)}
                  onClose={handleCloseUserMenu}
                >
                  <Box
                    sx={{
                      padding: "1rem",
                    }}
                  >
                    <img
                      src="https://thangtranweek5.blob.core.windows.net/teamphoto/Vikas.png"
                      alt="Vikas"
                      width={100}
                      height={100}
                      style={{
                        borderRadius: "50%",
                        border: `1px solid ${theme.palette.primary.main}`,
                        boxShadow: "0 0 10px #E10174",
                        marginBottom: "1rem",
                      }}
                    />
                    <Typography variant="h6">
                      Contact me for further support
                    </Typography>
                    <Typography>
                      <a
                        href="mailto:Vikas.Ranjan@T-Mobile.com"
                        target="_top"
                        style={{
                          color: `${theme.palette.primary.main}`,
                          textDecoration: "none",
                        }}
                      >
                        Vikas.Ranjan@T-Mobile.com
                      </a>
                    </Typography>
                  </Box>
                </Menu>
              </Box>
            </Toolbar>
          </Container>
        </AppBar>
      </Box>
    </ThemeProvider>
  );
}
export default ResponsiveAppBar;
