import {
  Avatar,
  Box,
  Grid,
  InputBase,
  LinearProgress,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import React, { useContext } from "react";
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
import { Context } from "../../contex/Context";
import { assets } from "../../assets/assets";

const Main = () => {
  const {
    onSent,
    recentPrompt,
    showResult,
    loading,
    resultdata,
    input,
    setInput,
  } = useContext(Context);

  const padding = 4;
  return (
    <Box sx={{ height: "100vh", display: "flex", flexDirection: "column" }}>
      <Navbar />
      {!showResult ? (
        <>
          <Box sx={{ flex: 1, overflowY: "auto" }} id="midComp" p={8}>
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
            <Grid
              container
              spacing={2}
              sx={{ mt: 4, justifyContent: "center", pl: 8, pr: 8 }}>
              <Grid item xs={12} sm={6} md={3}>
                <Card
                  padding={padding}
                  text={
                    "Suggest beautiful places to see on an upcoming road trip"
                  }
                  icon={<ExploreOutlinedIcon />}
                />
              </Grid>
              <Grid item xs={12} sm={6} md={3}>
                <Card
                  padding={padding}
                  text={
                    "Brief me about the latest technology trends in the market"
                  }
                  icon={<LightbulbOutlinedIcon />}
                />
              </Grid>
              <Grid item xs={12} sm={6} md={3}>
                <Card
                  padding={padding}
                  text={
                    "Brainstorm ideas for a new project that I am working on"
                  }
                  icon={<ChatBubbleOutlineOutlinedIcon />}
                />
              </Grid>
              <Grid item xs={12} sm={6} md={3}>
                <Card
                  padding={padding}
                  text={
                    "Implement a code snippet for a project that I am working on"
                  }
                  icon={<CodeOutlinedIcon />}
                />
              </Grid>
            </Grid>

            {/* <Stack
              direction={"row"}
              spacing={4}
              sx={{
                mt: 4,
                pl: 8,
                pr: 8,
                justifyContent: "center",
              }}>
              <Card
                padding={padding}
                text={
                  "Suggest beautiful places to see on an upcoming road trip"
                }
                icon={<ExploreOutlinedIcon />}
              />
              <Card
                padding={padding}
                text={
                  "Suggest beautiful places to see on an upcoming road trip"
                }
                icon={<LightbulbOutlinedIcon />}
              />
              <Card
                padding={padding}
                text={
                  "Suggest beautiful places to see on an upcoming road trip"
                }
                icon={<ChatBubbleOutlineOutlinedIcon />}
              />
              <Card
                padding={padding}
                text={
                  "Suggest beautiful places to see on an upcoming road trip"
                }
                icon={<CodeOutlinedIcon />}
              />
            </Stack> */}
          </Box>
        </>
      ) : (
        <Box sx={{ flex: 1, overflowY: "auto" }} id="midComp" p={8}>
          <Stack direction={"row"} spacing={2}>
            <Avatar alt="UserIcon" src={assets.user_icon} />
            <Typography sx={{ textAlign: "justify" }}>
              {recentPrompt}
            </Typography>
          </Stack>
          <Box sx={{ mt: 4 }} />
          <Stack direction={"row"} spacing={2}>
            {/* <Typography>{resultdata}</Typography> */}
            <Avatar alt="UserIcon" src={assets.Cloud7_logo} />
            {loading ? (
              <Stack sx={{ width: "100%", color: "grey.500" }} spacing={2}>
                <LinearProgress color="secondary" />
                <LinearProgress color="secondary" />
                <LinearProgress color="secondary" />
              </Stack>
            ) : (
              <p
                style={{ textAlign: "justify" }}
                dangerouslySetInnerHTML={{ __html: resultdata }}></p>
            )}
          </Stack>
        </Box>
      )}

      <Box
        id="searchComp"
        display={"flex"}
        flexDirection={"column"}
        sx={{
          p: 4,
          alignItems: "center", // Center items horizontally
        }}>
        <Paper
          component="form"
          sx={{
            borderRadius: 5,
            p: "2px 4px",
            display: "flex",
            maxWidth: 800,
            width: "100%",
            alignItems: "center",
          }}>
          <InputBase
            value={input}
            onChange={(e) => setInput(e.target.value)}
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
          {input ? (
            <IconButton
              onClick={() => onSent()}
              sx={{ p: "10px" }}
              aria-label="directions">
              <SendOutlinedIcon />
            </IconButton>
          ) : null}
        </Paper>
        <Box
          display={"flex"}
          sx={{
            justifyContent: "center",
            pt: 1,
          }}>
          <Typography
            variant="body2"
            sx={{
              color: grey[500],
            }}>
            Cloud7-AI can make mistakes. Check important info.
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Main;
