import { BrowserRouter, Navigate, Routes, Route } from "react-router-dom";
import HomePage from "screens/home";
import ProfilePage from "screens/profile";
import NavBar from "screens/navbar";
import LoginPage from "screens/login";
import { useMemo } from "react";
import { useSelector } from "react-redux";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/material";
import { themeSettings } from "../state/theme.js";

const RouteNavigation = () => {
  const mode = useSelector((state) => state.mode);
  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);

  return (
    <BrowserRouter>
      {/* <NavBar /> */}
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/profile/:userId" element={<ProfilePage />} />
        </Routes>
      </ThemeProvider>
    </BrowserRouter>
  );
};
export default RouteNavigation;
