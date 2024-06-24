import {
  Box,
  Button,
  IconButton,
  Stack,
  Tooltip,
  Typography,
} from "@mui/material";
import React, { useContext, useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import AddIcon from "@mui/icons-material/Add";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import HistoryOutlinedIcon from "@mui/icons-material/HistoryOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import { grey } from "@mui/material/colors";
import { Context } from "../../contex/Context";

const Sidebar = () => {
  const [extend, setExtend] = useState(false);
  const { onSent, prevPrompts, setRecentPrompt, newChat } = useContext(Context);

  const loadPrompt = async (prompt) => {
    setRecentPrompt(prompt);
    await onSent(prompt);
  };

  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      sx={{ backgroundColor: grey[200], p: 2, minHeight: "100vh" }}>
      <Box flex={1} sx={{ mb: 6 }}>
        <Tooltip onClick={() => setExtend((prev) => !prev)}>
          <IconButton>
            <MenuIcon />
          </IconButton>
        </Tooltip>
      </Box>
      <Stack onClick={() => newChat()} direction={"row"} spacing={1}>
        {extend ? (
          <Button
            size="large"
            variant="contained"
            sx={{ borderRadius: 6 }}
            color="grey">
            <AddIcon /> New Chat
          </Button>
        ) : (
          <Tooltip>
            <IconButton>
              <AddIcon />
            </IconButton>
          </Tooltip>
        )}
      </Stack>
      {extend ? (
        <Typography flex={1} sx={{ mt: 4, mb: 2 }}>
          Recents
        </Typography>
      ) : null}
      {extend ? (
        <Stack flex={16} direction={"column"} spacing={1}>
          {prevPrompts.map((prompt, index) => {
            return (
              <Stack
                onClick={() => loadPrompt(prompt)}
                direction={"row"}
                spacing={1}
                sx={{ cursor: "pointer" }}>
                <ChatBubbleOutlineOutlinedIcon />
                <Typography>{prompt.slice(0, 15)}..</Typography>
              </Stack>
            );
          })}
        </Stack>
      ) : (
        <Box flex={16}></Box>
      )}

      <Stack flex={2} spacing={1}>
        <Stack direction={"row"} spacing={1}>
          <HelpOutlineOutlinedIcon />
          {extend ? <Typography>Help?</Typography> : null}
        </Stack>
        <Stack direction={"row"} spacing={1}>
          <HistoryOutlinedIcon />
          {extend ? <Typography>History</Typography> : null}
        </Stack>
        <Stack direction={"row"} spacing={1}>
          <SettingsOutlinedIcon />
          {extend ? <Typography>Setting</Typography> : null}
        </Stack>
      </Stack>
    </Box>
  );
};

export default Sidebar;
