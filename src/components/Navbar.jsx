import React, { useEffect, useState } from "react";
import { Logo } from "../assets";
import { Box, ListItem, Typography } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

export const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const title = (
    <Box sx={{ display: "flex", alignItems: "center" }}>
      <Box sx={{ width: "18px", height: "18px" }}>
        <Logo />
      </Box>
      <Typography sx={{ ml: 2, color: "white" }}>
        Ilya Babikov | Web Developer
      </Typography>
    </Box>
  );

  return (
    <Box
      sx={{
        width: "100%",
        position: "fixed",
        top: 0,
        backgroundColor: scrolled ? "#050816" : "transparent",
      }}
    >
      <Box
        sx={{
          margin: "0 auto",
          display: { xs: "none", md: "flex" },
          justifyContent: "space-between",
          alignItems: "center",
          px: 4,
          fontSize: "18px",
        }}
      >
        {title}
        <Box component={"ul"} sx={{ display: "flex" }}>
          {navLinks.map((link) => (
            <ListItem
              href={`#${link.id}`}
              key={link.id}
              sx={{
                cursor: "pointer",
                color: active === link.title ? "white" : "#aaa6c3",
              }}
              onClick={() => setActive(link.title)}
            >
              {link.title}
            </ListItem>
          ))}
        </Box>
      </Box>

      <Box
        sx={{
          display: { md: "none", xs: "flex" },
          color: "white",
          height: "44px",
          alignItems: "center",
          justifyContent: "space-between",
          py: 2,
          px: 5,
        }}
      >
        <Box>{title}</Box>

        <Box
          sx={{ width: "33px", height: "33px" }}
          onClick={() => setToggle(!toggle)}
        >
          {!toggle ? (
            <MenuIcon sx={{ width: "100%", height: "100%" }} />
          ) : (
            <CloseIcon sx={{ width: "100%", height: "100%" }} />
          )}
        </Box>

        <Box
          component={"ul"}
          sx={{
            display: toggle ? "flex" : "none",
            flexDirection: "column",
            position: "absolute",
            top: "80px",
            right: "50px",
            background:
              "linear-gradient(109.6deg, rgb(36, 45, 57) 11.2%, rgb(16, 37, 60) 51.2%, rgb(0, 0, 0) 98.6%)",
            borderRadius: "10px",
            p: 2,
            fontSize: "18px",
          }}
        >
          {navLinks.map((link) => (
            <ListItem
              href={`#${link.id}`}
              key={link.id}
              sx={{
                cursor: "pointer",
                color: active === link.title ? "white" : "#aaa6c3",
              }}
              onClick={() => setActive(link.title)}
            >
              {link.title}
            </ListItem>
          ))}
        </Box>
      </Box>
    </Box>
  );
};
