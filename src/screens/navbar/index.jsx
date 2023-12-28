import { useState } from "react";
import {
  Box,
  IconButton,
  InputBase,
  Select,
  MenuItem,
  Typography,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import {
  Search,
  Message,
  DarkMode,
  LightMode,
  Notifications,
  Help,
  Menu,
  Close,
} from "@mui/icons-material";
import { useDispatch, useSelector } from "react-redux";
import { setMode, setLogout } from "state";
import { useNavigate } from "react-router-dom";
import FlexBetween from "components/FlexBetween";

const NavBar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const theme = useTheme();
  const isNonMobileScreen = useMediaQuery("(min-width: 1000px)");
  const [searchValue, setSearchValue] = useState("");
  const [isMobileMenuToggled, setIsMobileMenuToggled] = useState(false);
  const user = useSelector((state) => state.user);
  const neutralLight = theme.palette.neutral.light;
  const dark = theme.palette.neutral.dark;
  const background = theme.palette.neutral.background.default;
  const primaryLight = theme.palette.neutral.primary.light;
  const alt = theme.palette.background.alt;

  const fullName = `${user.firstName} ${user.lastName}`;

  return <div>NavBar</div>;
};
export default NavBar;
