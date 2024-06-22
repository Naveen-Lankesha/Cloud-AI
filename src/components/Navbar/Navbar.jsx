import { Avatar, Box, Paper, Stack, Typography } from "@mui/material";
import { grey } from "@mui/material/colors";
import React from "react";
import { assets } from "../../assets/assets";

const Navbar = () => {
  return (
    <Paper elevation={0} sx={{ borderRadius: 0, pt: 2, pl: 3, pr: 4 }}>
      <Stack display={"flex"} flexDirection={"row"}>
        <Typography
          variant="h5"
          flex={1}
          sx={{ fontWeight: 600, color: grey[600] }}>
          Cloud7
        </Typography>
        <Box flex={1} display={"flex"} flexDirection={"row-reverse"}>
          <Avatar alt="UserIcon" src={assets.user_icon} />
        </Box>
      </Stack>
    </Paper>
  );
};

export default Navbar;
