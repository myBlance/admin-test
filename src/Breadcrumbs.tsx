import React from "react";
import { 
    Breadcrumbs,
    Link,
    Typography, 
    Box, 
    IconButton, 
    Button 
} from "@mui/material";
import { Refresh as RefreshIcon } from "@mui/icons-material";
import { useLocation } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import AddIcon from "@mui/icons-material/Add";
import DownloadIcon from "@mui/icons-material/Download";
import UpgradeIcon from '@mui/icons-material/Upgrade';
import { 
    SelectColumnsButton, 
    useTranslate 
} from "react-admin";
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

const breadcrumbNameMap: Record<string, string> = {
    "/": "pages.home",
    "/posts": "pages.categories",
    "/posts/create": "pages.create",
    "/users": "pages.users",
    "/users/create": "pages.create",
    "/todos": "pages.todos",
};

interface CustomBreadcrumbsProps {
    onCreate?: () => void; 
    onUpload?: () => void; 
    onUpdate?: () => void; 
}

const CustomBreadcrumbs: React.FC<CustomBreadcrumbsProps> = ({ onCreate, onUpload, onUpdate }) => {
    const location = useLocation();
    const translate = useTranslate();
    const pathnames = location.pathname.split("/").filter((x) => x);
    const lastPath = `/${pathnames.join("/")}`;
    const pageTitle = breadcrumbNameMap[lastPath] || pathnames[pathnames.length - 1];
    

    return (
        <Box sx={{ padding: "16px" }}>
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
                    {onUpdate && (
                        <Button
                            variant="contained"
                            startIcon={<UpgradeIcon />}
                            onClick={onUpdate}
                            sx={{ 
                                marginRight: 1, marginLeft: 1, backgroundColor: "#1c79dc", color: "#fff" ,
                                borderRadius: "8px",
                            }}
                        >
                            {translate("buttons.update")}
                        </Button>
                    )}
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

            <Breadcrumbs 
                    separator={<NavigateNextIcon fontSize="small" />} 
                    aria-label="breadcrumb" 
                    sx={{ marginTop: "4px" }}
            >
                <Link color="inherit" href="/" sx={{ display: "flex", alignItems: "center" }}>
                    <HomeIcon />
                </Link>
                {pathnames.map((value, index) => {
                    const routeTo = `/${pathnames.slice(0, index + 1).join("/")}`;
                    const isLast = index === pathnames.length - 1;
                    const translatedName = translate(breadcrumbNameMap[routeTo]) || translate(value) || value;
                    return isLast ? (
                        <Typography key={routeTo} color="#000" >
                            {translatedName}
                        </Typography>
                    ) : (
                        <Link key={routeTo} color="#000" href={routeTo} underline="hover">
                            {translatedName}
                        </Link>
                    );
                })}
            </Breadcrumbs>
        </Box>
    );
};

export default CustomBreadcrumbs;
