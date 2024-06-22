import { Box, Paper, Typography } from "@mui/material";
import React from "react";

import ExploreOutlinedIcon from "@mui/icons-material/ExploreOutlined";

const Card = ({ size, padding, text, icon }) => {
  return (
    <Paper
      flex={1}
      sx={{
        width: size,
        height: size,
        position: "relative",
        p: padding,
      }}>
      <Typography>{text}</Typography>
      <Box
        sx={{
          position: "absolute",
          bottom: 0,
          right: 0,
          padding: 1,
          background: "white",
        }}>
        {icon}
      </Box>
    </Paper>
  );
};

export default Card;
