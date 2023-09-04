import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Badge from "@mui/material/Badge";
import Container from "@mui/material/Container";
import Tooltip from "@mui/material/Tooltip";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { styled } from "@mui/system";
import Image from "mui-image";
//adding T-Mobile Logo
import TmobileLogo from "../../assets/images/tmobile_logo.png";
import { Avatar } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const pages = ["home", "products", "achievements"];

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
function ResponsiveAppBar() {
  const navigate = useNavigate();
  const [tab, setTab] = React.useState("home");
  const handleChange = (event, newValue) => {
    // setTab(newValue);
    console.log("test");
  };

  const handleCloseNavMenu = (e) => {
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
                      onClick={handleCloseNavMenu}
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
              <Box sx={{ flexGrow: 0 }}>
                <Avatar sx={{ bgcolor: `${magetanColor}` }}>T</Avatar>
              </Box>
            </Toolbar>
          </Container>
        </AppBar>
      </Box>
    </ThemeProvider>
  );
}
export default ResponsiveAppBar;
