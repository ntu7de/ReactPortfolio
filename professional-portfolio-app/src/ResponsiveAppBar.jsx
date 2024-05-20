import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import { Link } from "react-router-dom";
import HomeIcon from '@mui/icons-material/Home';
import './styles/ResponsiveAppBar.css'

const pages = ['Projects', 'About', 'Contact'];

const ResponsiveAppBar = () => {
    
  return (
    <AppBar position="static" className='app-bar'>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button
                key={page}
                component={Link}
                to={`/${page.replace(/\s+/g, '').toLowerCase()}`}
                sx={{ my: 2, color: '#fffffe', display: 'block' }}
              >
                {page}
              </Button>
            ))}
          </Box>
          <Box sx={{ flexGrow: 0 }}>
            <Button
              component={Link}
              to="/"
              sx={{ color: 'white' }}
            >
              <HomeIcon />
            </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;