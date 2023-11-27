import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import Button from "@mui/material/Button"; // Ensure this is imported
import MenuIcon from "@mui/icons-material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import { useNavigate } from "react-router-dom";
import { styled } from '@mui/material/styles';
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

const Offset = styled('div')(({ theme }) => theme.mixins.toolbar);

const SiteHeader = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const navigate = useNavigate();


  const movieMenuOptions = [
    { label: "Home", path: "/" },
    { label: "Favourite Movies", path: "/movies/favorites" },
    { label: "Upcoming Movies", path: "/movies/upcoming" },
    { label: "Latest Movies", path: "/movies/latest" },
    { label: "Now Playing", path: "/movies/now_playing" },
    { label: "Popular Movies", path: "/movies/popular" },
    { label: "Trending Movies", path: "/movies/trending" },
    { label: "Top Rated Movies", path: "/movies/top_rated" },
  ];

  const handleMenuSelect = (pageURL) => {
    navigate(pageURL);
    setAnchorEl(null); 
  };

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  return (
    <>
      <AppBar position="fixed" style={{ backgroundColor: 'maroon' }}>/
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={handleMenu}
            size="large">
            <MenuIcon />
          </IconButton>
          <Menu
            id="menu-appbar"
            anchorEl={anchorEl}
            anchorOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            keepMounted
            transformOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            open={open}
            onClose={() => setAnchorEl(null)}
          >
            {movieMenuOptions.map((option) => (
              <MenuItem key={option.label} onClick={() => handleMenuSelect(option.path)}>
                {option.label}
              </MenuItem>
            ))}
          </Menu>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1, textAlign: 'center' }}>
            Mark's Movie Database
          </Typography>
        </Toolbar>
      </AppBar>
      <Offset />
    </>
  );
};

export default SiteHeader;