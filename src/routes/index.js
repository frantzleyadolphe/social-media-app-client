import { BrowserRouter, Navigate, Routes, Route } from "react-router-dom";
import HomePage from "screens/home";
import ProfilePage from "screens/profile";
import NavBar from "screens/navbar";
import LoginPage from "screens/login";

const RouteNavigation = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/profile/:userId" element={<ProfilePage />} />
      </Routes>
    </BrowserRouter>
  );
};
export default RouteNavigation;
