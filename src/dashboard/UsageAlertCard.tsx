import { Box, CardHeader } from "@mui/material";

interface UsageAlertCardProps {
    title: string;
    timestamp: string; // ví dụ: "9:28:30 20/8/2025"
    customerCode: string; // KH0001
    projectCode: string;  // CTKV1
    deviceCode?: string;  // TB0001 (nếu có)
    onDetailClick?: () => void;
}

export default function UsageAlertCard({
    title,
    timestamp,
    customerCode,
    projectCode,
    deviceCode,
    onDetailClick,
}: UsageAlertCardProps) {
    return (
        <Box
            sx={{
                margin: "20px 30px",
                border: "1px solid #000",
                borderRadius: 3,
            }}
        >
            <CardHeader
                title={`${title}${deviceCode ? ` - ${deviceCode}` : ""}`}
                titleTypographyProps={{
                    fontSize: 14,
                    fontWeight: "600",
                }}
                action={
                    <Box
                        onClick={onDetailClick}
                        sx={{
                        marginTop: "4px",
                        width: "55px",
                        fontSize: 13,
                        height: "22px",
                        backgroundColor: "#d8edf9",
                        color: "#1b7bca",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        borderRadius: 1,
                        cursor: "pointer",
                        }}
                    >
                        Chi tiết
                    </Box>
                }
                sx={{
                    padding: "8px 16px 0",
                }}
            />
            <Box sx={{ fontSize: 12 }}>
                <p style={{ margin: "5px 20px 10px 16px" }}>
                    {timestamp} - {customerCode} - {projectCode}
                </p>
            </Box>
        </Box>
    );
}
