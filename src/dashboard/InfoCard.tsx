import { Box, Typography, Grid } from "@mui/material";
import DoneAllIcon from "@mui/icons-material/DoneAll";
import WarningAmberRoundedIcon from "@mui/icons-material/WarningAmberRounded";

interface InfoCardProps {
    value: string | number;
    label: string;
    icon: React.ReactNode;
    iconBg: string;
}

function InfoCard({ value, label, icon, iconBg }: InfoCardProps) {
    return (
        <Box
            sx={{
                height: 70,
                display: "flex",
                alignItems: "center",
                gap: 1.5,
                px: 2,
                boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.25)",
                borderRadius: 2,
                backgroundColor: "#fff",
                border: "2px solid #000",
            }}
        >
            {/* Icon với vòng tròn */}
            <Box
                sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: 40,
                    height: 40,
                    borderRadius: "50%",
                    backgroundColor: iconBg,
                    flexShrink: 0,
                }}
            >
                {icon}
            </Box>

            {/* Nội dung */}
            <Box>
                <Typography sx={{ fontWeight: 600, fontSize: { xs: 16, sm: 18 } }}>
                    {value}
                </Typography>
                <Typography sx={{ fontSize: { xs: 11, sm: 12 }, color: "#000" }}>
                    {label}
                </Typography>
            </Box>
        </Box>
    );
}

export default function DashboardCards() {
    return (
        <Grid container spacing={2} sx={{ mt: 2, px: { xs: 2, md: 5 } }}>
            <Grid item xs={12} sm={6} md={3}>
                <InfoCard
                    value="210 m3"
                    label="Tổng sử dụng"
                    icon={<DoneAllIcon sx={{ color: "#4caf50", fontSize: 22 }} />}
                    iconBg="rgba(76, 175, 80, 0.1)"
                />
            </Grid>

            <Grid item xs={12} sm={6} md={3}>
                <InfoCard
                    value="210"
                    label="So với cùng kỳ tháng trước"
                    icon={<DoneAllIcon sx={{ color: "#4caf50", fontSize: 22 }} />}
                    iconBg="rgba(76, 175, 80, 0.1)"
                />
            </Grid>

            <Grid item xs={12} sm={6} md={3}>
                <InfoCard
                    value="210"
                    label="Cảnh báo vượt ngưỡng"
                    icon={<DoneAllIcon sx={{ color: "#4caf50", fontSize: 22 }} />}
                    iconBg="rgba(76, 175, 80, 0.1)"
                />
            </Grid>

            <Grid item xs={12} sm={6} md={3}>
                <InfoCard
                    value="210"
                    label="Cần báo rò rỉ"
                    icon={<WarningAmberRoundedIcon sx={{ color: "#ea3535", fontSize: 22 }} />}
                    iconBg="rgba(239, 63, 113, 0.1)"
                />
            </Grid>
        </Grid>
    );
}
