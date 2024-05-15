import React from 'react';
import { Link } from 'react-router-dom'; // Assuming you're using react-router for navigation
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/authContext';
import { useContext } from 'react';

const Header = () => {
    const navigate = useNavigate();
    const { logout } = useContext(AuthContext);

  const handleLogout = () => {
    logout("/authPage");
  };
                        
    const goToHome = () => {
        navigate("/");
    };
                        
    const goToAddProduct = () => {
        navigate("/addProduct");
    };
                        
    return (
        <>
            <Box sx={{ flexGrow: 1 }}>
                <AppBar position="static">
                <Toolbar>
                <Typography
                    variant="h6"
                    component="div"
                    sx={{
                        flexGrow: 1,
                    }}
                >
                E-COM
                </Typography>
                <Button color="inherit" onClick={goToHome}>
                Home
                </Button>
                <Button color="inherit" onClick={goToAddProduct}>
                   Add product
                </Button>
                <Button color="inherit" onClick={handleLogout}>
                Log Out 
                </Button>
                </Toolbar>
                </AppBar>
            </Box>
        </>
    );
};

export default Header;