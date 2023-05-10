import { Box, Typography, Button, Container } from "@mui/material";
import { motion } from "framer-motion";
import React from "react";
import { ComputersCanvas } from "./Computers";
export const Hero = () => {
  return (
    <Box
      sx={{
        //   backgroundImage: "url(/herobg.png)",
        //   width: "100%",
        //   height: "100vh",
        //   backgroundRepeat: "no-repeat",
        position: "relative",
        width: "100%",
        height: "100vh",
      }}
    >
      <Box
        sx={{
          display: "flex",
          position: "absolute",
          top: { xs: 100, md: 140 },
          left: { xs: 0, md: "20%" },
        }}
      >
        <Box sx={{ display: "block", pt: 1 }}>
          <Box
            sx={{
              width: 20,
              height: 20,
              borderRadius: "50%",
              backgroundColor: "#915EFF",
              mr: 2,
              mb: 0,
            }}
          />
          <Box
            sx={{
              width: "4px",
              height: { xs: "180px", md: "280px" },
              transform: "translate(7px, -2px)",
              background:
                "-webkit-linear-gradient( -90deg, #804dee 0%, rgba(60, 51, 80, 0) 100% )",
            }}
          />
        </Box>
        <Box sx={{ width: { md: "50%", sm: "80%" } }}>
          <Typography
            sx={{
              color: "white",
              fontWeight: 900,
              fontSize: { xs: "36px", md: "44px" },
            }}
          >
            Hi, I'm
            <span style={{ color: "#915EFF" }}> Ilya</span>
          </Typography>
          <br />
          <Typography
            sx={{
              color: "white",
              fontWeight: 700,
              fontSize: { xs: "24px", md: "36px" },
            }}
          >
            Motivated and passionate Frontend Developer with experience in
            JavaScript, TypeScript, ReactJS, Next.Js.
          </Typography>
        </Box>
      </Box>

      <ComputersCanvas />

      {/* <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
          <a href="#about">
            <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
              <motion.div
                animate={{
                  y: [0, 24, 0],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  repeatType: "loop",
                }}
                className="w-3 h-3 rounded-full bg-secondary mb-1"
              />
            </div>
          </a>
        </div> */}
    </Box>
  );
};
