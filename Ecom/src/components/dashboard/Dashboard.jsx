
import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import DashboardIcon from '@mui/icons-material/Dashboard';
import LoginIcon from '@mui/icons-material/Login';
import AppRegistrationIcon from '@mui/icons-material/AppRegistration';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import { FaBook, FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";
import { HiUsers } from "react-icons/hi2";
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import { useNavigate } from 'react-router-dom';

const drawerWidth = 240;

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
    // Ensure the content pushes footer to the bottom
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
  }),
);

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
   backgroundColor: '#ff69b4'
}));

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
}));

const Footer = styled('footer')(({ theme }) => ({
  padding: theme.spacing(2),
  textAlign: 'center',
  borderTop: `1px solid ${theme.palette.divider}`,
  backgroundColor: '#ff69b4', // Pink color
  marginTop: 'auto',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
}));

const SocialIcon = styled(IconButton)(({ theme }) => ({
  color: theme.palette.text.primary,
  margin: theme.spacing(0.5),
}));

export default function Dashboard() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const [usersOpen, setUsersOpen] = React.useState(false);
  const navigate = useNavigate();

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const handleUsersClick = () => {
    setUsersOpen(!usersOpen);
  };

  const handleLearnersClick = () => {
    alert('Learners button clicked');
  };

  const handleNavigate = (path) => {
    navigate(path);
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" open={open}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{ mr: 2, ...(open && { display: 'none' }) }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            E-Learning Portal
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          {[
            { text: 'ADashboard', icon: <DashboardIcon />, path: '/adashboard' },
            { text: 'Dashboard', icon: <DashboardIcon />, path: '/dashboard' },
            { text: 'UserLogin', icon: <LoginIcon />, path: '/login' },
            { text: 'Register', icon: <AppRegistrationIcon />, path: '/register' },
            // { text: 'Admin', icon: <SupervisorAccountIcon />, path: '/admin' },
            { text: 'AdminLogin', icon: <SupervisorAccountIcon />, path: '/login' },
          ].map((item, index) => (
            <ListItem key={item.text} disablePadding>
              <ListItemButton onClick={() => handleNavigate(item.path)}>
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText primary={item.text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <Divider />
        <List>
          {['Question Bank', 'Users'].map((text, index) => (
            <React.Fragment key={text}>
              <ListItem disablePadding>
                <ListItemButton onClick={text === 'Users' ? handleUsersClick : null}>
                  <ListItemIcon>
                    {index === 0 ? <FaBook size={24} /> 
                    : index === 1 ? <HiUsers size={24} /> 
                    : index % 2 === 0 ? <InboxIcon /> 
                    : <MailIcon />}
                  </ListItemIcon>
                  <ListItemText primary={text} />
                  {text === 'Users' ? (usersOpen ? <ExpandLess /> : <ExpandMore />) : null}
                </ListItemButton>
              </ListItem>
              {text === 'Users' && usersOpen && (
                <List component="div" disablePadding>
                  <ListItemButton sx={{ pl: 4 }} onClick={handleLearnersClick}>
                    <ListItemText primary="Learners" />
                  </ListItemButton>
                </List>
              )}
            </React.Fragment>
          ))}
        </List>
      </Drawer>
      <Main open={open}>
        <DrawerHeader />
        <Box textAlign="center" flex={1}>
          <Typography variant="h4" component="h1" gutterBottom>
            Welcome To Our E-Learning Portal
          </Typography>
          <Typography variant="body1" paragraph>
            Explore a broad selection of courses ranging from technology and business to arts and personal development. Our courses cater to various skill levels and interests. Learn from top industry experts and educators who are dedicated to delivering high-quality, engaging content. Gain insights from those who have excelled in their fields. Access our platform anytime, anywhere, and learn at your own pace. Our flexible schedules and course formats fit seamlessly into your busy life. Join a vibrant community of learners and instructors. Participate in discussions, join study groups, and get support when you need it.An e-learning portal serves as a comprehensive digital platform designed to enhance the educational experience for both learners and instructors. This innovative solution centralizes a wide array of educational resources, offering access to interactive content such as courses, instructional videos, quizzes, and assignments from virtually anywhere with an internet connection. Learners benefit from the flexibility of engaging with course material at their own pace, allowing them to revisit lessons, complete exercises, and participate in discussions according to their personal schedules.

For educators, the e-learning portal provides robust tools for course management and student engagement. Instructors can upload and organize course materials, create assessments, and track student progress through detailed analytics. Communication features such as forums, live chats, and virtual classrooms facilitate real-time interaction and collaboration, fostering a dynamic learning environment.

The portal also supports various multimedia formats, enabling a rich and diverse learning experience that can be tailored to different learning styles. By integrating these functionalities, e-learning portals not only streamline the administrative aspects of education but also promote a more engaging and interactive learning process. This adaptability and convenience make e-learning portals an invaluable asset for educational institutions and organizations, broadening access to quality education and training.
          </Typography>
        </Box>
        <Footer>
          <Typography variant="body2" color="textSecondary">
            &copy; {new Date().getFullYear()} [E-Learning Platform]. All rights reserved.
          </Typography>
          <Box>
            <SocialIcon aria-label="Facebook" href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <FaFacebook size={24} />
            </SocialIcon>
            <SocialIcon aria-label="Twitter" href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <FaTwitter size={24} />
            </SocialIcon>
            <SocialIcon aria-label="LinkedIn" href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <FaLinkedin size={24} />
            </SocialIcon>
          </Box>
        </Footer>
      </Main>
    </Box>
  );
}


















