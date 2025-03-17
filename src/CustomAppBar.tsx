import { TitlePortal } from "react-admin";
import { Box, IconButton } from "@mui/material";
import  MenuIcon  from '@mui/icons-material/Menu';

export const CustomAppBar = () => {
    return (
        <Box
            sx={{
              
                backgroundColor: "#ffffff", 
                color: "white",
                padding: "8px 16px",
                
            }}
        >
            <TitlePortal />
            <IconButton  sx={{ color: "dark", marginRight: 3 }}>
                    <MenuIcon />
            </IconButton>  
        </Box>
    );
};
