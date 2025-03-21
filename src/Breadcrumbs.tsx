import React from "react";
import { Breadcrumbs, Link, Typography, Box, IconButton, Button } from "@mui/material";
import { Refresh as RefreshIcon } from "@mui/icons-material";
import { useLocation } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import AddIcon from "@mui/icons-material/Add";
import DownloadIcon from "@mui/icons-material/Download";
import { SelectColumnsButton, useTranslate } from "react-admin";

const breadcrumbNameMap: Record<string, string> = {
    "/": "pages.home",
    "/posts": "pages.categories",
    "/users": "pages.users",
};

interface CustomBreadcrumbsProps {
    onCreate?: () => void; 
    onUpload?: () => void; 
}

const CustomBreadcrumbs: React.FC<CustomBreadcrumbsProps> = ({ onCreate, onUpload }) => {
    const location = useLocation();
    const translate = useTranslate();
    const pathnames = location.pathname.split("/").filter((x) => x);
    const lastPath = `/${pathnames.join("/")}`;
    const pageTitle = breadcrumbNameMap[lastPath] || "Trang";

    return (
        <Box sx={{ padding: "16px",  }}>
            
            <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                <Box sx={{ display: "flex", alignItems: "center" }}>
                    <Typography variant="h5" fontWeight="bold">
                        {translate(pageTitle)}
                    </Typography>
                    <IconButton onClick={() => window.location.reload()} sx={{ marginLeft: 1 }}>
                        <RefreshIcon />
                    </IconButton>
                </Box>
            <Box sx={{marginTop:2}}>
                    <SelectColumnsButton/>
                    <Button
                        variant="contained"
                        color="primary"
                        
                        startIcon={<AddIcon />}
                        onClick={onCreate}
                        sx={{ marginRight: 1, color:"#fff", backgroundColor:"#0052a9",  }}
                    >
                        {translate("buttons.add")}
                    </Button>
                    <Button
                        variant="contained"
                        color="primary"
                        startIcon={<DownloadIcon />}
                        onClick={onUpload}
                        sx={{color:"#fff", backgroundColor:"#0052a9"}}
                    >
                        {translate("buttons.upload")}
                    </Button>
                </Box>
            </Box>

            <Breadcrumbs aria-label="breadcrumb" sx={{ marginTop: "4px" }}>
                <Link color="inherit" href="/" sx={{ display: "flex", alignItems: "center" }}>
                    <HomeIcon />
                </Link>
                {pathnames.map((value, index) => {
                    const routeTo = `/${pathnames.slice(0, index + 1).join("/")}`;
                    const isLast = index === pathnames.length - 1;
                    return isLast ? (
                        <Typography key={routeTo} color="#000000">
                            {breadcrumbNameMap[routeTo] || value}
                        </Typography>
                    ) : (
                        <Link key={routeTo} color="#000000" href={routeTo}>
                            {breadcrumbNameMap[routeTo] || value}
                        </Link>
                    );
                })}
            </Breadcrumbs>
        </Box>
    );
};

export default CustomBreadcrumbs;
