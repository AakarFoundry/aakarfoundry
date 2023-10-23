import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import logo from "../assets/img/Logo.png";
import styles from "../assets/styles/NavBar.module.css";
import AddIcon from "@mui/icons-material/Add";
import profile from "../assets/img/profie.png";
const pages = [];
const settings = ["Change Password", "Approval", "Logout"];
function NavBar() {
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };
  const handleCloseUserMenu = (selectedSetting) => () => {
    setAnchorElUser(null);
    if (selectedSetting === "Change Password") {
      window.location.href = "/change-password"; 
    } else if (selectedSetting === "Approval") {
      window.location.href = "/approval"; 
    } else if (selectedSetting === "Logout") {
      window.location.href = "/"; 
    }
  };
  return (
    <AppBar position="fixed">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <a href="/dash">
            <img src={logo} className={styles.logoImage} alt="Logo" />
          </a>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          ></Typography>
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          ></Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseUserMenu}
                sx={{ my: 2, color: "white", display: "block" }}
              >
                {page}
              </Button>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src={profile} />
              </IconButton>
            </Tooltip>
            {window.location.pathname === "/dash" ? (
              <IconButton
                sx={{
                  height: "2.5rem",
                  width: "2.5rem",
                  position: "absolute",
                  right: "4rem",
                  background: "#054470",
                  "&:hover": {
                    background: "#3f82b1",
                  },
                  "& svg": {
                    // mt: 0.7,
                    fontSize: "2rem",
                    color: "white",
                  },
                }}
                color="ffffff"
                aria-label="add"
                href="/details"
              >
                <AddIcon />
              </IconButton>
            ) : null}
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
              onClose={handleCloseUserMenu(null)}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu(setting)}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default NavBar;
