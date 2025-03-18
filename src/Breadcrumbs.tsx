import React from "react";
import { Breadcrumbs, Link, Typography, Box, IconButton, Button } from "@mui/material";
import { Refresh as RefreshIcon } from "@mui/icons-material";
import { useLocation } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import AddIcon from "@mui/icons-material/Add";
import DownloadIcon from "@mui/icons-material/Download";

const breadcrumbNameMap: Record<string, string> = {
    "/": "Trang chủ",
    "/posts": "Cấu hình hoa hồng",
    "/posts/list": "Danh sách chính sách Hoa Hồng",
    "/users": "Danh sách người dùng"
};

interface CustomBreadcrumbsProps {
    onCreate?: () => void; 
    onUpload?: () => void; 
}

const CustomBreadcrumbs: React.FC<CustomBreadcrumbsProps> = ({ onCreate, onUpload }) => {
    const location = useLocation();
    const pathnames = location.pathname.split("/").filter((x) => x);
    const lastPath = `/${pathnames.join("/")}`;
    const pageTitle = breadcrumbNameMap[lastPath] || "Trang";

    return (
        <Box sx={{ padding: "16px", borderTop: "2px solid #ddd" }}>
            {/* Tiêu đề + nút hành động */}
            <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                {/* Tiêu đề & Nút refresh */}
                <Box sx={{ display: "flex", alignItems: "center" }}>
                    <Typography variant="h5" fontWeight="bold">
                        {pageTitle}
                    </Typography>
                    <IconButton onClick={() => window.location.reload()} sx={{ marginLeft: 1 }}>
                        <RefreshIcon />
                    </IconButton>
                </Box>

                {/* Nút Thêm mới & Tải lên */}
                <Box>
                    <Button
                        variant="contained"
                        color="primary"
                        startIcon={<AddIcon />}
                        onClick={onCreate}
                        sx={{ marginRight: 1 }}
                    >
                        Thêm mới
                    </Button>
                    <Button
                        variant="contained"
                        color="primary"
                        startIcon={<DownloadIcon />}
                        onClick={onUpload}
                    >
                        Tải lên
                    </Button>
                </Box>
            </Box>

            {/* Breadcrumbs */}
            <Breadcrumbs aria-label="breadcrumb" sx={{ marginTop: "4px" }}>
                <Link color="inherit" href="/" sx={{ display: "flex", alignItems: "center" }}>
                    <HomeIcon />
                </Link>
                {pathnames.map((value, index) => {
                    const routeTo = `/${pathnames.slice(0, index + 1).join("/")}`;
                    const isLast = index === pathnames.length - 1;
                    return isLast ? (
                        <Typography key={routeTo} color="textPrimary">
                            {breadcrumbNameMap[routeTo] || value}
                        </Typography>
                    ) : (
                        <Link key={routeTo} color="inherit" href={routeTo}>
                            {breadcrumbNameMap[routeTo] || value}
                        </Link>
                    );
                })}
            </Breadcrumbs>
        </Box>
    );
};

export default CustomBreadcrumbs;
