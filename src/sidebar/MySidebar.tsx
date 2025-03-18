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
import { useNavigate } from "react-router-dom";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import HomeIcon from "@mui/icons-material/Home";
import PostIcon from "@mui/icons-material/Book";
import UserIcon from "@mui/icons-material/Group";
import { MenuItemLink } from "react-admin";

export const MySidebar = () => {
    const navigate = useNavigate();
    const [openUserMenu, setOpenUserMenu] = useState(false);

    return (
        <Drawer
            variant="permanent"
            sx={{
                
                width: 240,
                flexShrink: 0,
                height: "100vh",
                color: "#fff",
                "& .MuiDrawer-paper": {
                    width: 240,
                    backgroundColor: "dark",
                    color: "#fff",
                    overflowX: "hidden",
                },
                
            }}
        >
            {/* Logo & Tiêu đề */}
            <Box sx={{ padding: "16px", textAlign: "center" }}>
                <img src="/logo.png" alt="mobifone" width={120} />
            </Box>

            <List>  
    
                <MenuItemLink 
                    to="/" 
                    primaryText="Trang chủ" 
                    leftIcon={<HomeIcon />} 
                    sx={{ color: "#fff", 
                    "& .MuiListItemIcon-root": { color: "#fff"  },
                    "&:hover": { backgroundColor: "#3873d1"},borderRadius:3,
                    }} 
                />
                <MenuItemLink 
                    to="/posts" 
                    primaryText="Quản lý danh mục" 
                    leftIcon={<PostIcon />} 
                    sx={{ color: "#fff", 
                    "& .MuiListItemIcon-root": { color: "#fff" },
                    "&:hover": { backgroundColor: "#3873d1"},borderRadius:3,
                 }} 
                    
                />

                {/* Quản lý người dùng (Menu có cấp bậc) */}
                <ListItemButton 
                    onClick={() => setOpenUserMenu(!openUserMenu)}
                    sx={{
                        color: "#fff",
                        "& .MuiListItemIcon-root": { color: "#fff !important" },
                        "&:hover": { backgroundColor: "#3873d1"},borderRadius:3,
                    }}
                >
                    <ListItemIcon sx={{ color: "#fff !important" }}> {/* Chắc chắn icon trắng */}
                        <UserIcon />
                    </ListItemIcon>
                    <ListItemText primary="Quản lý người dùng" sx={{ color: "#fff", whiteSpace: "nowrap", ml:-2}} />
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
                            primaryText="Tất cả người dùng" 
                            sx={{ pl: 4, ml:4, color: "#fff", "& .MuiListItemIcon-root": { color: "#fff" },"&:hover": { backgroundColor: "#3873d1",color:"#FFF",},borderRadius:3,  }} 
                        />
                        <MenuItemLink 
                            to="/users?filter={type:'admin'}" 
                            primaryText="Quản trị viên" 
                            sx={{ pl: 4, ml:4, color: "#fff", "& .MuiListItemIcon-root": { color: "#fff" },"&:hover": { backgroundColor: "#3873d1",color:"#FFF",},borderRadius:3,  }} 
                        />
                        <MenuItemLink 
                            to="/users?filter={type:'editor'}" 
                            primaryText="Biên tập viên" 
                            sx={{ pl: 4, ml:4, color: "#fff", "& .MuiListItemIcon-root": { color: "#fff" },"&:hover": { backgroundColor: "#3873d1",color:"#FFF",},borderRadius:3,  }} 
                        />
                    </List>
                </Collapse>
            </List>

            {/* Phiên bản */}
            <Box sx={{ position: "absolute", bottom: 100, left: 16 }}>
                <Typography variant="caption" color="#fff">
                    Version: 20241227.0
                </Typography>
            </Box>
        </Drawer>
    );
};
