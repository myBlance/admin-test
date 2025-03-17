import {
    Drawer,
    List,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    Typography,
    Box
} from "@mui/material";
import { useState } from "react";
import HomeIcon from "@mui/icons-material/Home";

import { useNavigate } from "react-router-dom";
import PostIcon from '@mui/icons-material/Book';
import UserIcon from '@mui/icons-material/Group';

export const MySidebar = () => {
   
    const navigate = useNavigate();
    const [selectedIndex, setSelectedIndex] = useState(0);

    const menuItems = [
        { text: "Trang chủ", path: "/", icon: <HomeIcon /> },
        { text: "Quản lý danh mục", path: "/posts", icon: <PostIcon/> },
        { text: "Quản lý người dùng", path: "/users", icon: <UserIcon /> },
    ];

    return (
        <Drawer
            variant="permanent"
            sx={{
                width: 240,
                flexShrink: 0,
                top:"0px",
                height: "100vh", // Full màn hình dọc
                "& .MuiDrawer-paper": {
                    width: 240,
                    backgroundColor: "dark", // Sidebar màu tối
                    color: "#fff",
                    borderRight: "1px solid dark",
                },
            }}
        >
            {/* Logo & Tiêu đề */}
            <Box sx={{ padding: "16px", textAlign: "center" }}>
                <Typography variant="h6" fontWeight="bold">
                    <img src="/logo.png" alt="mobifone" width={120} />
                </Typography>
            </Box>
            <List>
                {menuItems.map((item, index) => (
                    <ListItemButton
                        key={index}
                        selected={selectedIndex === index}
                        onClick={() => {
                            setSelectedIndex(index);
                            navigate(item.path);
                        }}
                        sx={{
                            "&.Mui-selected": {
                                backgroundColor: "#1F2937",
                            },
                            "&:hover": {
                                backgroundColor: "#374151",
                            },
                        }}
                    >
                        <ListItemIcon sx={{ color: "#fff" }}>
                            {item.icon}
                        </ListItemIcon>
                        <ListItemText primary={item.text} />
                    </ListItemButton>
                ))}
            </List>

            {/* Phiên bản */}
            <Box sx={{ position: "absolute", bottom: 10, left: 16 }}>
                <Typography variant="caption" color="#fff">
                    Version: 20241227.0
                </Typography>
            </Box>
        </Drawer>
    );
};
