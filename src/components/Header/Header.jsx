import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import "./header.css";
import { Avatar, Link, Tooltip } from "@mui/material";
import Login from "../Login/Login";
import { useLogout } from "../../hooks/useLogout";
import { useAuthContext } from "../../hooks/useAuthContext";
import useMediaQuery from "@mui/material/useMediaQuery";
import AddFeed from "../AddFeed/AddFeed";

const menuItem = [
  {
    to: "О КОМПАНИИ",
    id: "#about",
  },
  {
    to: "УСЛУГИ",
    id: "#services",
  },
  {
    to: "ОТЗЫВЫ",
    id: "#feeds",
  },
  {
    to: "ПРОЕКТЫ",
    id: "#projects",
  },
  {
    to: "КОНТАКТЫ",
    id: "#contacts",
  },
];
function stringToColor(string) {
  let hash = 0;
  let i;

  /* eslint-disable no-bitwise */
  for (i = 0; i < string.length; i += 1) {
    hash = string.charCodeAt(i) + ((hash << 5) - hash);
  }

  let color = "#";

  for (i = 0; i < 3; i += 1) {
    const value = (hash >> (i * 8)) & 0xff;
    color += `00${value.toString(16)}`.slice(-2);
  }
  /* eslint-enable no-bitwise */

  return color;
}
function stringAvatar(name) {
  return {
    sx: {
      bgcolor: stringToColor(name),
    },
    children: `${name.split(" ")[0][0]}${name.split(" ")[1][0]}`,
  };
}
function Header({ scrollTop }) {
  const { logout } = useLogout();
  const { user } = useAuthContext();
  const mw500 = useMediaQuery("(min-width:500px)");
  const mw350 = useMediaQuery("(min-width:350px)");
  const handleClick = () => {
    logout();
  };

  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  return (
    <AppBar
      position="fixed"
      color="transparent"
      elevation={scrollTop > 20 ? 5 : 0}
    >
      <Container
        id="header"
        maxWidth="xl"
        className={scrollTop > 20 ? "bgScroll" : "headerContainer"}
      >
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 100,
              letterSpacing: ".2rem",
              color: "white",
              textDecoration: "none",
            }}
          >
            АРМстройСЕРВИС
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "none" } }}>
            <IconButton
              style={{ color: "white" }}
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
                color: "white",
              }}
            ></Menu>
          </Box>
          <Box
            sx={{
              display: { xs: "flex", md: "none" },
              fontSize: "30px",
              color: "white",
            }}
          ></Box>
          <Box
            sx={{
              display: { xs: "flex", md: "none" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "white",
              textDecoration: "none",
              fontSize: "20px",
              width: "100%",
              height: "80px",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Typography
              sx={{
                pl: 6,
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "white",
                textDecoration: "none",
                fontSize: "20px",
              }}
              variant="h5"
              noWrap
              component="a"
              href=""
            >
              {mw500 ? (
                "АРМстройСЕРВИС"
              ) : (
                <div className="smLogo">
                  <span className="acc">ACC</span>
                  {mw350 ? (
                    <span className="accsmall">АРМстройСЕРВИС</span>
                  ) : null}
                </div>
              )}
            </Typography>
          </Box>

          <Box
            sx={{
              flexGrow: 1,
              justifyContent: "center",
              alignItems: "center",
              gap: "25px",
              display: { xs: "none", md: "flex" },
            }}
          >
            {menuItem.map((page) => (
              <Link href={page.id} underline="none" key={page.id}>
                <Button
                  key={page.id}
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: "white", display: "block" }}
                >
                  {page.to}
                </Button>
              </Link>
            ))}
          </Box>
          {user ? (
            <Box sx={{ flexGrow: 0 }}>
              <Tooltip title="Open settings">
                <IconButton sx={{ pt: 2 }} onClick={handleOpenUserMenu}>
                  <Avatar {...stringAvatar(user ? user.fullName : "")} />
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
                <Box className="avatar">
                  <AddFeed />
                  <Button
                    style={{ width: "200px" }}
                    variant="text"
                    color="error"
                    // startIcon={<LogoutIcon />}
                    onClick={handleClick}
                  >
                    Выйти
                  </Button>
                </Box>
                {/* {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleClick}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))} */}
              </Menu>
            </Box>
          ) : (
            <Login />
          )}
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Header;
