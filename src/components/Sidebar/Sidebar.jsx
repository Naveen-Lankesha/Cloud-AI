import {
  Box,
  Button,
  IconButton,
  Stack,
  Tooltip,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import AddIcon from "@mui/icons-material/Add";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import HistoryOutlinedIcon from "@mui/icons-material/HistoryOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import { grey } from "@mui/material/colors";

const Sidebar = () => {
  const [extend, setExtend] = useState(false);

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
      <Stack direction={"row"} spacing={1}>
        {extend ? (
          <Button
            size="large"
            variant="contained"
            sx={{ borderRadius: 6 }}
            color="secondary">
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
        <Stack flex={16} direction={"row"} spacing={1}>
          <ChatBubbleOutlineOutlinedIcon />
          <Typography>What is Cloud7..</Typography>
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
