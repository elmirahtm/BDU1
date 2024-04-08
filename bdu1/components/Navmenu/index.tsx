"use client";
import Link from "next/link";
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
import MenuItem from "@mui/material/MenuItem";

const Navmenu = () => {
  const basliq = [
    { id: 1, to: "/", title: "BDU Haqqında" },
    { id: 2, to: "/bduking", title: "Rəhbərlik" },
    { id: 3, to: "/bdustructur", title: "Strukturlar" },
    { id: 4, to: "/bduclass", title: "Fakültələr" },
    { id: 5, to: "/bduhigh", title: "İnsitutlar" },
    { id: 6, to: "/bdustudent", title: "Tələbə həyatı" },
    { id: 7, to: "/bdueducation", title: "Elmi kitabxana" },
    { id: 8, to: "/bdutv", title: "BDU TV" }
  ];

  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <nav>
      <div className="">
        <AppBar position="static" sx={{bgcolor:"white"}} >
          <Container maxWidth="lg">
            <Toolbar disableGutters>
              <Box
                sx={{
                  flexGrow: 1,
                  display: {
                    xs: "flex",
                    md: "none",
                    alignItems: "end",
                    justifyContent: "end",
                  },
                }}
              >
                <IconButton
                  size="large"
                  aria-label="account of current user"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  onClick={handleOpenNavMenu}
                  color="inherit"
                  sx={{color:"black"}}
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
                  }}
                >
                  {basliq.map(({ id, title, to }) => (
                    <MenuItem key={id} onClick={handleCloseNavMenu}>
                      <Link href={to}>
                        <Typography textAlign="center">{title}</Typography>
                      </Link>
                    </MenuItem>
                  ))}
                </Menu>
              </Box>

              <Box
                sx={{
                  flexGrow: 1,
                  display: {
                    xs: "none",
                    md: "flex",
                    alignItems: "center",
                    justifyContent: "space-evenly",
                  },
                }}
              >
                {basliq.map(({ id, title, to }) => (
                  <Link href={to}>
                    <Button
                      key={id}
                      onClick={handleCloseNavMenu}
                      sx={{ my: 2 , color:"black",  display: "block" }}
                    >
                      {title}
                    </Button>
                  </Link>
                ))}
              </Box>
            </Toolbar>
          </Container>
        </AppBar>

    
      </div>
    </nav>
  );
};

export default Navmenu;
