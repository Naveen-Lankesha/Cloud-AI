import React from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Sidebar from "./components/Sidebar/Sidebar";
import { grey } from "@mui/material/colors";
import { Box, CssBaseline, Stack, Typography } from "@mui/material";
import Main from "./components/Main/Main";

// Create a custom theme
const theme = createTheme({
  palette: {
    primary: {
      main: "#FD7401",
    },
    secondary: {
      main: grey[300],
    },
  },
  typography: {
    fontFamily: "Outfit, Open Sans, sans-serif",
    h1: {
      fontWeight: 600,
    },
    h2: {
      fontWeight: 600,
    },
  },
});

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline /> {/* Applying baseline CSS to the entire application */}
      <Stack display={"flex"} direction={"row"}>
        <Sidebar />

        <Box flex={1}>
          <Main />
        </Box>
      </Stack>
    </ThemeProvider>
  );
};

export default App;
