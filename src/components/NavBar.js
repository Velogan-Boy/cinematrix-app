import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { styled } from '@mui/system';
import { Box } from '@mui/system';
import { makeStyles } from '@mui/styles';
import { AppBar, IconButton, Toolbar } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import Fab from '@mui/material/Fab';
import SearchIcon from '@mui/icons-material/Search';
import { CssBaseline } from '@mui/material';


import AppDrawer from './AppDrawer';
import SearchBar from './UI/SearchBar';
import LocationSelect from './UI/LocationSelect';
import SearchModal from './UI/SearchModal';
import MobileLocationSelect from './UI/MobileLocationSelect';
import theme from '../theme';

import logo from '../assets/Logo-Brands-CineMatrix.png';
import cinematrixLogo from '../assets/logoShort.png';

//////////////////////////////////////////////////////////////////////////

const useStyles = makeStyles(theme => ({
   root: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
   },

   flexBox: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '-3px',
   },

   menuIcon: {
      display: 'block',
      [theme.breakpoints.down('md')]: {
         display: 'none',
      },
   },

   navLogo: {
      marginLeft: '-8px',
      height: '3.5rem',
      transition: 'all 0.1s',
      '&:hover': {
         transform: 'scale(1.05)',
      },
   },
}));

const StyledFab = styled(Fab)({
   position: 'absolute',
   zIndex: 1,
   top: -30,
   left: 0,
   right: 0,
   margin: '0 auto',
});

////////////////////////////////////////////////////////////////////////

export default function NavBar() {
   const classes = useStyles();
   const [isDrawer, setDrawer] = useState(false);
   const [isModal, setModal] = useState(false);

   const toggleDrawer = e => {
      setDrawer(!isDrawer);
   };
   const toggleModal = e => {
      setModal(!isModal);
   };

   return (
      <React.Fragment>
         <CssBaseline />
         <AppBar
            style={{
               backgroundColor: '#fbb034',
               backgroundImage:
                  'linear-gradient(315deg, #fbb034 0%, #ffdd00 74%)',
               color: '#000',
            }}
            elevation={2}
            position="sticky"
         >
            <Toolbar className={classes.root}>
               <Link to="/">
                  <img
                     src={logo}
                     alt="CineMatrix Logo"
                     className={classes.navLogo}
                  />
               </Link>

               <div className={classes.flexBox}>
                  <SearchBar />
                  <LocationSelect />
               </div>

               <Toolbar>
                  <IconButton
                     className={classes.menuIcon}
                     size="large"
                     color="inherit"
                     edge="end"
                     onClick={toggleDrawer}
                  >
                     <MenuIcon fontSize="large" />
                  </IconButton>
               </Toolbar>
            </Toolbar>

            <AppDrawer isDrawer={isDrawer} toggleDrawer={toggleDrawer} />
         </AppBar>

         {/* Phone Bottom Nav barBar */}
         <AppBar
            position="fixed"
            sx={{
               backgroundColor: '#2f2f2f',
               top: 'auto',
               bottom: 0,
               display: 'none',
               [theme.breakpoints.down('md')]: {
                  display: 'block',
               },
            }}
         >
            <Toolbar>
               <Link to="/">
               <IconButton size="large">
                  <img src={cinematrixLogo} height={25} alt="Logo" />
               </IconButton>
               </Link>
               <StyledFab color="secondary" onClick={toggleModal}>
                  <SearchIcon />
               </StyledFab>
               <Box sx={{ flexGrow: 1 }} />
               <MobileLocationSelect />
            </Toolbar>
         </AppBar>
         <SearchModal isModal={isModal} toggleModal={toggleModal} />
      </React.Fragment>
   );
}
