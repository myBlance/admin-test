import {
    Drawer,
    List,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    Typography,
    Collapse,
    Box
} from "@mui/material";
import { useState } from "react";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import HomeIcon from "@mui/icons-material/Home";
import PostIcon from "@mui/icons-material/Book";
import EventIcon from '@mui/icons-material/Event';
import UserIcon from "@mui/icons-material/Group";
import { 
    MenuItemLink, 
    useTranslate 
} from "react-admin";
import TheatersIcon from '@mui/icons-material/Theaters';

export const MySidebar = () => {
    const [openUserMenu, setOpenUserMenu] = useState(false);
    const translate = useTranslate();

    return (
        <Drawer
            variant="permanent"
            sx={{                
                width: 240,
                flexShrink: 0,
                height: "100vh",
                "& .MuiDrawer-paper": {
                    width: 240,
                    backgroundColor: "#000",
                    overflowX: "hidden",
                },               
            }}
        >
            {/* Logo & Tiêu đề */}
            <Box sx={{ padding: "16px", textAlign: "center"}}>
                <img src="/src/images/download.png" alt="mobifone" width={120} />
            </Box>

            <List>     
                <MenuItemLink 
                    to="/" 
                    primaryText={translate("menu.home")}
                    leftIcon={<HomeIcon />} 
                    sx={{ color: "#fff",
                    "& .MuiListItemIcon-root": { color: "#fff"  },
                    "&:hover": { backgroundColor: "#3873d1"},borderRadius:3,
                    "&.RaMenuItemLink-active": {
                        backgroundColor: "#3873d1",  
                        color: "#fff",               
                    }
                    }} 
                />
                <MenuItemLink 
                    to="/posts" 
                    primaryText={translate("menu.categories")}
                    leftIcon={<PostIcon />} 
                    sx={{ color: "#fff", 
                    "& .MuiListItemIcon-root": { color: "#fff" },
                    "&:hover": { backgroundColor: "#3873d1"},borderRadius:3,
                    "&.RaMenuItemLink-active": {
                        backgroundColor: "#3873d1",  
                        color: "#fff",               
                    }
                 }} 
                />

                {/* Quản lý người dùng (Menu có cấp bậc) */}
                <ListItemButton 
                    onClick={() => setOpenUserMenu(!openUserMenu)}
                    sx={{
                        height: 37,
                        color: "#fff",
                        "& .MuiListItemIcon-root": { color: "#fff !important" },
                        "&:hover": { backgroundColor: "#3873d1"},borderRadius:3,
                        "&.RaMenuItemLink-active": {
                        backgroundColor: "#3873d1",  
                        color: "#fff",                                      
                    }
                    }}
                >
                    <ListItemIcon sx={{ color: "#fff !important" }}>
                        <UserIcon />

                    </ListItemIcon>
                    <ListItemText
                        primary={translate("menu.management")}
                        sx={{ color: "#fff", whiteSpace: "nowrap", ml:-2}} />
                    {openUserMenu ? <ExpandLess sx={{ color: "#fff" }} /> : <ExpandMore sx={{ color: "#fff" }} />}
                </ListItemButton>

                <Collapse in={openUserMenu} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding sx={{
                        "&::before": {
                            content: '""',
                            position: "absolute",
                            left: 25, 
                            top: 0,
                            width: "1px", 
                            height: "100%", 
                            backgroundColor: "white", 
                            opacity: 0.3, 
                        },
                    }}>
                        <MenuItemLink 
                            to="/users" 
                            primaryText={translate("menu.users")}                            
                            sx={{ pl: 4, ml:4, 
                                color: "#fff", 
                                "& .MuiListItemIcon-root": { color: "#fff" },
                                "&:hover": { backgroundColor: "#3873d1",color:"#FFF",},borderRadius:3,
                                "&.RaMenuItemLink-active": {
                                    backgroundColor: "#3873d1",  
                                    color: "#fff",               
                                }  
                            }} 
                        />
                        <MenuItemLink 
                            to="/users1" 
                            primaryText={translate("menu.admin")} 
                            sx={{ pl: 4, ml:4, 
                                color: "#fff", 
                                "& .MuiListItemIcon-root": { color: "#fff" },
                                "&:hover": { backgroundColor: "#3873d1",color:"#FFF",},borderRadius:3, 
                                "&.RaMenuItemLink-active": {
                                    backgroundColor: "#3873d1",  
                                    color: "#fff",               
                                } 
                            }} 
                        />
                        <MenuItemLink 
                            to="/users2" 
                            primaryText={translate("menu.editor")}
                            sx={{ pl: 4, ml:4, 
                                color: "#fff", 
                                "& .MuiListItemIcon-root": { color: "#fff" },
                                "&:hover": { backgroundColor: "#3873d1",color:"#FFF",},borderRadius:3, 
                                "&.RaMenuItemLink-active": {
                                    backgroundColor: "#3873d1",  
                                    color: "#fff",               
                                }
                            }} 
                        />
                    </List>
                </Collapse>
                <MenuItemLink 
                    to="/todos" 
                    primaryText={translate("menu.todos")}
                    leftIcon={<EventIcon/>} 
                    sx={{ color: "#fff", 
                    "& .MuiListItemIcon-root": { color: "#fff" },
                    "&:hover": { backgroundColor: "#3873d1"},borderRadius:3,
                    "&.RaMenuItemLink-active": {
                        backgroundColor: "#3873d1",  
                        color: "#fff",               
                    }
                 }} 
                />
                <MenuItemLink 
                    to="/films" 
                    primaryText={translate("menu.films")}
                    leftIcon={<TheatersIcon/>} 
                    sx={{ color: "#fff", 
                    "& .MuiListItemIcon-root": { color: "#fff" },
                    "&:hover": { backgroundColor: "#3873d1"},borderRadius:3,
                    "&.RaMenuItemLink-active": {
                        backgroundColor: "#3873d1",  
                        color: "#fff",               
                    }
                 }} 
                />
            </List>

            {/* Phiên bản */}
            <Box sx={{ position: "absolute", bottom: 100, left: 60, }}>
                <Typography variant="caption" color="#fff">
                    Version: 20241227.0
                </Typography>
            </Box>
        </Drawer>
    );
};
