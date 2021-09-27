import React from "react";
import {
    AppBar,
    Box,
    Button,
    Divider, Drawer,
    IconButton,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    Toolbar,
    Typography,
} from "@mui/material";

import MenuIcon from "@mui/icons-material/Menu";

import generateTopDrawerLinks from "./topBarDrawerLinks";

export default function TopBar(props) {

    // state hook for left drawer
    const [state, setState] = React.useState({
        leftMenuDrawerOpen: false
    });

    // event called when the left drawer should be toggled
    const toggleDrawer = (open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setState({leftMenuDrawerOpen: open});
    };

    const navListItems = generateTopDrawerLinks();
    // create list of nav items for inside left menu drawer
    const navList = (
        <Box
            sx={{ width: 250 }}
            role="presentation"
            onClick={toggleDrawer(false)}
            onKeyDown={toggleDrawer(false)}
        >
            <List>
                {navListItems.map((listItem) => (
                    <ListItem button key={listItem.text}>
                        <ListItemIcon>
                            {listItem.icon}
                        </ListItemIcon>
                        <ListItemText primary={listItem.text} />
                    </ListItem>
                ))}
            </List>
            <Divider />
        </Box>
    );


    return (
        <div>
            <Box sx={{flexGrow: 1}}>
                <AppBar position="static">
                    <Toolbar>
                        <IconButton
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                            sx={{ mr: 2 }}
                            onClick={toggleDrawer(true)}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Typography variant="h6" component="div" sx={{ flexGrow: 1}}>
                            Game Notes
                        </Typography>
                        <Button color="inherit">Login</Button>
                    </Toolbar>
                </AppBar>
            </Box>

            <React.Fragment>
                <Drawer
                    anchor='left'
                    open={state.leftMenuDrawerOpen}
                    onClose={toggleDrawer(false)}
                >
                    {navList}
                </Drawer>
            </React.Fragment>
        </div>
    );
}