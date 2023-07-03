import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import HomeIcon from '@mui/icons-material/Home';
import QuizIcon from '@mui/icons-material/Quiz';

const drawerWidth = 240;

export default function PermanentDrawerLeft() {
    const navigateToPage=(dest:string)=>{
        window.location.assign(dest)
    }
  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      
      <Drawer
        PaperProps={{
        sx:{
          backgroundColor: "#f0f6fc",
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}}
        variant="permanent"
        anchor="left"
      >
        <Toolbar />
        <Divider />
        <List>
          {/* {['Home' , 'Quizz'].map((text, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton onClick={()=>{index % 2 === 0 ? navigateToPage("/") : navigateToPage("/quiz")}}>
                <ListItemIcon>
                  {index % 2 === 0 ? <HomeIcon /> : null}
                </ListItemIcon>
                <ListItemText primary=<strong>{text}</strong>  />
              </ListItemButton>
            </ListItem>
          ))} */}
          {
            <ListItem key={"Home"} disablePadding>
              <ListItemButton onClick={()=>navigateToPage("/")}>
                <ListItemIcon>
                  <HomeIcon />
                </ListItemIcon>
                <ListItemText primary=<strong>Home</strong> />
              </ListItemButton>
            </ListItem>
          }
        </List>    
      </Drawer>
      
    </Box>
  );
}
