// import { Link } from "react-router-dom";
// import LOGO from '../logo.svg';
// const Page1 = () => {
//     return (
//         <div id="main-card">
//             <div className="first hero">
//                 <img className="hero-profile-img" src="https://cdn.gamer-network.net/2018/metabomb/leagueoflegendsbestcarrychampions2018pantheon.jpg" alt=""/>
//                     <div className="hero-description-bk her0-card-1"></div>
//                     <div className="hero-logo">
//                         <img src={LOGO}  alt=""/>
//                     </div>
//                     <div className="hero-description">
//                         <p>Home Page !</p>
//                     </div>
//                     <div className="hero-date">
//                         <p>React Component</p>
//                     </div>
//             </div>
//             {/* <div className='bottomControls'>
//                 <button className='btn btn-1 btn-spacing'><Link to="/">Home</Link></button>
//                 <button className='btn btn-2 btn-spacing'><Link to="/about">About</Link></button>
//                 <button className='btn btn-3 btn-spacing'><Link to="/contact">Contact</Link></button>
//                 <button className='btn btn-3 btn-spacing'><Link to="/subscribe">Subscribe</Link></button>
//             </div> */}
//         </div>
//     )
// };


// export default Page1;


import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import ResponsiveAppBar from '../components/nav';

const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);

export default function BasicCard() {
  return (
    <div id="card">
    <ResponsiveAppBar />
    <Card sx={{ maxWidth: 100000}} id="card1">
      <CardContent>
        <Typography sx={{ fontSize: 40 ,}} color="white" gutterBottom>
          q1.where can we learn React?
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" class="btnnn">View Full Answer</Button>
      </CardActions>
    </Card>
    <Card sx={{ maxWidth: 100000}} id="card1">
      <CardContent>
        <Typography sx={{ fontSize: 40 ,}} color="white" gutterBottom>
          q1.where can we learn React?
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" class="btnnn">View Full Answer</Button>
      </CardActions>
    </Card>

    <Card sx={{ maxWidth: 100000}} id="card1">
      <CardContent>
        <Typography sx={{ fontSize: 40 }} color="white" gutterBottom>
          q1.where can we learn React?
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" class="btnnn">View Full Answer</Button>
      </CardActions>
    </Card>


    <Card sx={{ maxWidth: 100000}} id="card1">
      <CardContent>
        <Typography sx={{ fontSize: 40 ,}} color="white" gutterBottom>
          q1.where can we learn React?
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" class="btnnn">View Full Answer</Button>
      </CardActions>
    </Card>
    </div>
  );
}

// import * as React from 'react';
// import AppBar from '@mui/material/AppBar';
// import Box from '@mui/material/Box';
// import Toolbar from '@mui/material/Toolbar';
// import IconButton from '@mui/material/IconButton';
// import Typography from '@mui/material/Typography';
// import Menu from '@mui/material/Menu';
// import MenuIcon from '@mui/icons-material/Menu';
// import Container from '@mui/material/Container';
// import Avatar from '@mui/material/Avatar';
// import Button from '@mui/material/Button';
// import Tooltip from '@mui/material/Tooltip';
// import MenuItem from '@mui/material/MenuItem';
// import AdbIcon from '@mui/icons-material/Adb';
// import {Link} from "react-router-dom";



// const pages = ['Home','about', 'contact', 'subscribe'];
// const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

// const url ="/";

// function ResponsiveAppBar() {
//   const [anchorElNav, setAnchorElNav] = React.useState(null);
//   const [anchorElUser, setAnchorElUser] = React.useState(null);

//   const handleOpenNavMenu = (event) => {
//     setAnchorElNav(event.currentTarget);
//   };
//   const handleOpenUserMenu = (event) => {
//     setAnchorElUser(event.currentTarget);
//   };

//   const handleCloseNavMenu = () => {
//     setAnchorElNav(null);
//   };

//   const handleCloseUserMenu = () => {
//     setAnchorElUser(null);
//   };

//   return (
//     <AppBar position="static">
//       <Container maxWidth="xl">
//         <Toolbar disableGutters>
//           <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
//           <Typography
//             variant="h6"
//             noWrap
//             component="a"
//             href="/"
//             sx={{
//               mr: 2,
//               display: { xs: 'none', md: 'flex' },
//               fontFamily: 'monospace',
//               fontWeight: 700,
//               letterSpacing: '.3rem',
//               color: 'inherit',
//               textDecoration: 'none',
//             }}
//           >
//             DoubtFree
//           </Typography>

//           <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
//             <IconButton
//               size="large"
//               aria-label="account of current user"
//               aria-controls="menu-appbar"
//               aria-haspopup="true"
//               onClick={handleOpenNavMenu}
//               color="inherit"
//             >
//               <MenuIcon />
//             </IconButton>
//             <Menu
//               id="menu-appbar"
//               anchorEl={anchorElNav}
//               anchorOrigin={{
//                 vertical: 'bottom',
//                 horizontal: 'left',
//               }}
//               keepMounted
//               transformOrigin={{
//                 vertical: 'top',
//                 horizontal: 'left',
//               }}
//               open={Boolean(anchorElNav)}
//               onClose={handleCloseNavMenu}
//               sx={{
//                 display: { xs: 'block', md: 'none' },
//               }}
//             >
//               {pages.map((page) => (
//                 <MenuItem key={page} onClick={handleCloseNavMenu}>
//                   <Typography textAlign="center">{page}</Typography>
//                 </MenuItem>
//               ))}
//             </Menu>
//           </Box>
//           <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
//           <Typography
//             variant="h5"
//             noWrap
//             component="a"
//             href=""
//             sx={{
//               mr: 2,
//               display: { xs: 'flex', md: 'none' },
//               flexGrow: 1,
//               fontFamily: 'monospace',
//               fontWeight: 700,
//               letterSpacing: '.3rem',
//               color: 'inherit',
//               textDecoration: 'none',
//             }}
//           >
//             DoubtFree
//           </Typography>
          
// {/* add links */}

//           <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
//             {pages.map((page) => (
//               <Button
//                 key={page}
//                 onClick={handleCloseNavMenu}
//                 sx={{ my: 2, color: 'white', display: 'block' }}
//               >
//                 <Link to={url+page}>{page}</Link>
//               </Button>
//             ))}
//           </Box>

//           <Box sx={{ flexGrow: 0 }}>
//             <Tooltip title="Open settings">
//               <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
//                 <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
//               </IconButton>
//             </Tooltip>
//             <Menu
//               sx={{ mt: '45px' }}
//               id="menu-appbar"
//               anchorEl={anchorElUser}
//               anchorOrigin={{
//                 vertical: 'top',
//                 horizontal: 'right',
//               }}
//               keepMounted
//               transformOrigin={{
//                 vertical: 'top',
//                 horizontal: 'right',
//               }}
//               open={Boolean(anchorElUser)}
//               onClose={handleCloseUserMenu}
//             >
//               {settings.map((setting) => (
//                 <MenuItem key={setting} onClick={handleCloseUserMenu}>
//                   <Typography textAlign="center">{setting}</Typography>
//                 </MenuItem>
//               ))}
//             </Menu>
//           </Box>
//         </Toolbar>
//       </Container>
//     </AppBar>
//   );
// }


// export default ResponsiveAppBar;    