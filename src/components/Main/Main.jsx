import {
  Avatar,
  Box,
  Divider,
  InputBase,
  Paper,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import { assets } from "../../assets/assets";
import Navbar from "../Navbar/Navbar";
import { grey } from "@mui/material/colors";

import ExploreOutlinedIcon from "@mui/icons-material/ExploreOutlined";
import LightbulbOutlinedIcon from "@mui/icons-material/LightbulbOutlined";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import CodeOutlinedIcon from "@mui/icons-material/CodeOutlined";
import IconButton from "@mui/material/IconButton";
import AddPhotoAlternateOutlinedIcon from "@mui/icons-material/AddPhotoAlternateOutlined";
import KeyboardVoiceOutlinedIcon from "@mui/icons-material/KeyboardVoiceOutlined";
import SendOutlinedIcon from "@mui/icons-material/SendOutlined";

import Card from "../Card/Card";
import { Add } from "@mui/icons-material";

const Main = () => {
  const size = 200;
  const padding = 4;
  return (
    <Box>
      <Navbar />
      <Box id="midComp" flex={1} sx={{ p: 8 }}>
        <Typography
          variant="h2"
          sx={{
            background:
              "linear-gradient(90deg, rgba(61, 101, 229, 1) 0%, rgba(223, 64, 84, 1) 50%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}>
          Hello, Naveen
        </Typography>
        <Typography variant="h2" sx={{ color: grey[400] }}>
          How can I help you today?
        </Typography>
        <Stack
          direction={"row"}
          spacing={4}
          sx={{
            mt: 4,
            pl: 8,
            pr: 8,

            justifyContent: "center",
          }}>
          <Card
            size={size}
            padding={padding}
            text={"Suggest beautiful places to see on an upcoming road trip"}
            icon={<ExploreOutlinedIcon />}
          />
          <Card
            size={size}
            padding={padding}
            text={"Suggest beautiful places to see on an upcoming road trip"}
            icon={<LightbulbOutlinedIcon />}
          />
          <Card
            size={size}
            padding={padding}
            text={"Suggest beautiful places to see on an upcoming road trip"}
            icon={<ChatBubbleOutlineOutlinedIcon />}
          />
          <Card
            size={size}
            padding={padding}
            text={"Suggest beautiful places to see on an upcoming road trip"}
            icon={<CodeOutlinedIcon />}
          />
        </Stack>
      </Box>
      <Box id="searchComp" sx={{ mt: 3, pl: 8, pr: 8 }}>
        <Paper
          component="form"
          sx={{
            borderRadius: 5,
            p: "2px 4px",
            display: "flex",
            alignItems: "center",
          }}>
          <InputBase
            sx={{ ml: 1, flex: 1 }}
            placeholder="Enter a prompt here"
            //   inputProps={{ "aria-label": "search google maps" }}
          />
          <IconButton type="button" sx={{ p: "10px" }} aria-label="AddImage">
            <AddPhotoAlternateOutlinedIcon />
          </IconButton>
          <IconButton type="button" sx={{ p: "10px" }} aria-label="AddImage">
            <KeyboardVoiceOutlinedIcon />
          </IconButton>
          {/* <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" /> */}
          <IconButton sx={{ p: "10px" }} aria-label="directions">
            <SendOutlinedIcon />
          </IconButton>
        </Paper>
      </Box>
    </Box>
  );
};

export default Main;

{
  /* <Avatar alt="Remy Sharp" src={assets.user_icon} /> */
}
