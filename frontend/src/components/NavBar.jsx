import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Badge from "@mui/material/Badge";
import { IconButton } from "@mui/material";
import { useSelector } from "react-redux";
import logo from "../img/Logo.png";
import ButtonBase from "@mui/material/ButtonBase";
import { AuthContext } from "../context/authContext";

const NavBar = () => {
  const navigate = useNavigate();
  const authContext = React.useContext(AuthContext);
  const items = useSelector((state) => state.cartStore.addedItems);
  const [token, setToken] = useState();
  const [isAdmin, setIsAdmin] = useState();

  useEffect(() => {
    setToken(localStorage.getItem("token"));
    setIsAdmin(localStorage.getItem("isAdmin"));
  }, [token]);

  const goToHome = () => {
    navigate("/");
  };

  const goToAddProduct = () => {
    navigate("/addProduct");
  };

  const goToLogin = () => {
    navigate("/login");
  };

  const logOut = () => {
    localStorage.clear();
    setIsAdmin();
    setToken();
    authContext.logout();
    navigate("/");
  };

  const goToCart = () => {
    navigate("/cart");
  };

  const goToOrders = () => {
    navigate("/orders");
  };

  return (
    <React.Fragment>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" sx={{ background: "#BACD92" }}>
          <Toolbar>
            <ButtonBase onClick={goToHome}>
            <img 
            src={logo} 
            alt="Home" 
            style={{ width: '5rem', height: '5rem', borderRadius: '50%', padding: '0.5rem'}} 
            />
            </ButtonBase>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} />
            {token && isAdmin === "false" && (
              <Button color="inherit" onClick={goToOrders}>
                Orders
              </Button>
            )}
            {isAdmin === "false" && (
              <IconButton onClick={goToCart}>
                <Badge badgeContent={items.length} color="secondary">
                  <ShoppingCartIcon />
                </Badge>
              </IconButton>
            )}
            {isAdmin === "true" && (
              <Button color="inherit" onClick={goToAddProduct}>
                Add product
              </Button>
            )}
            {!token ? (
              <Button color="inherit" onClick={goToLogin} 
              style={
                {
                  backgroundColor: '#FCFFE0',
                  borderRadius: '12px',
                  color: '#000000',
                }
              }>
                Login
              </Button>
            ) : (
              <Button color="inherit" onClick={logOut}>
                LogOut
              </Button>
            )}
          </Toolbar>
        </AppBar>
      </Box>
    </React.Fragment>
  );
};

export default NavBar;
