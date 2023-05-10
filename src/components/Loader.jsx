import React from "react";
import { Box, Typography } from "@mui/material";

export const Loader = ({ loadingPercent }) => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        position: "absolute",
        top: "85%",
        left: "50%",
        transform: "translate(-50%, -50%)",
      }}
    >
      <Box
        sx={{
          backgroundColor: "#3b2e62",
          width: "320px",
          height: "8px",
          borderRadius: "10px",
        }}
      >
        <Box
          sx={{
            width: `${loadingPercent}%`,
            height: "100%",
            backgroundColor: "#821bb6",
            borderRadius: "10px",
          }}
        />
      </Box>
      <Typography sx={{ color: "white", ml: 2 }}>{loadingPercent}%</Typography>
    </Box>
  );
};
