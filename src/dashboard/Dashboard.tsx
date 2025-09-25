import { 
    Box, 
    Card, 
    CardContent, 
    CardHeader, 
    MenuItem, 
    TextField,
    Typography
} from "@mui/material";
import { CustomAppBar } from "../appbar/CustomAppBar";
import StatusPieChart from "./StatusPieChart";
import WaterLineChart from "./WaterLineChart";
import UsageAlertCard from "./UsageAlertCard";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import dayjs, { Dayjs } from "dayjs";
import { useState } from "react";
import DoneAllIcon from '@mui/icons-material/DoneAll';
import WarningAmberRoundedIcon from '@mui/icons-material/WarningAmberRounded';

export const Dashboard = () => {
    const [startDate, setStartDate] = useState<Dayjs | null>(dayjs().startOf("month"));
    const [endDate, setEndDate] = useState<Dayjs | null>(dayjs());
    const [selectedDeviceId, setSelectedDeviceId] = useState<string>("all");

    return (
        <Card sx={{borderRadius:"20px", mr:"-24px", height:"auto",mt:"-64px"}} >
            <Box sx={{ padding: 2 }}>
                <CustomAppBar />
                
                <CardHeader
                    title="Dashboard"
                    action={
                        <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                            <TextField
                                select
                                size="small"
                                value={selectedDeviceId}
                                onChange={(e) => setSelectedDeviceId(e.target.value)}
                                sx={{ minWidth: 150 }}
                            >
                                <MenuItem value="all">Tất cả</MenuItem>
                                <MenuItem value="d0000000-0000-0000-0000-000000000001">Thiết bị 1</MenuItem>
                                <MenuItem value="d0000000-0000-0000-0000-000000000002">Thiết bị 2</MenuItem>
                                <MenuItem value="d0000000-0000-0000-0000-000000000003">Thiết bị 3</MenuItem>
                            </TextField>
                            
                            {/* Filter chọn khoảng thời gian */}
                            <LocalizationProvider dateAdapter={AdapterDayjs}>
                                <DatePicker
                                    label="Từ ngày"
                                    value={startDate}
                                    onChange={(newValue) => setStartDate(newValue)}
                                    slotProps={{
                                        textField: {
                                            size: "small",
                                            sx: { backgroundColor: "#fff", minWidth: 150 },
                                        },
                                    }}
                                />
                                <DatePicker
                                    label="Đến ngày"
                                    value={endDate}
                                    onChange={(newValue) => setEndDate(newValue)}
                                    slotProps={{
                                        textField: {
                                        size: "small",
                                        sx: { backgroundColor: "#fff", minWidth: 150 },
                                        },
                                    }}
                                />
                            </LocalizationProvider>
                        </Box>
                    }
                />

            <CardContent>
                <Box sx={{ display: "flex", gap: 2, ml: 5 }}>
                    <Box
                        sx={{
                            height: 60,
                            width: 260,
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
                        <Box
                            sx={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            width: 35,
                            height: 35,
                            borderRadius: "50%",
                            backgroundColor: "rgba(76, 175, 80, 0.1)", // xanh lá nhạt mờ
                            }}
                        >
                            <DoneAllIcon sx={{ color: "#4caf50", fontSize: 20 }} />
                        </Box>
                        

                        {/* Nội dung */}
                        <Box>
                            <Typography sx={{ fontWeight: 600, fontSize: 18 }}>210 m3</Typography>
                            <Typography sx={{ fontSize: 12, color: "gray" }}>
                                Tổng sử dụng
                            </Typography>
                        </Box>
                    </Box>

                    <Box
                        sx={{
                            height: 60,
                            width: 260,
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
                        <Box
                            sx={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            width: 35,
                            height: 35,
                            borderRadius: "50%",
                            backgroundColor: "rgba(76, 175, 80, 0.1)", // xanh lá nhạt mờ
                            }}
                        >
                            <DoneAllIcon sx={{ color: "#4caf50", fontSize: 20 }} />
                        </Box>
                        

                        {/* Nội dung */}
                        <Box>
                            <Typography sx={{ fontWeight: 600, fontSize: 18 }}>210</Typography>
                            <Typography sx={{ fontSize: 12, color: "gray" }}>
                                So với cùng kỳ tháng trước
                            </Typography>
                        </Box>
                    </Box>

                    <Box
                        sx={{
                            height: 60,
                            width: 260,
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
                        <Box
                            sx={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            width: 35,
                            height: 35,
                            borderRadius: "50%",
                            backgroundColor: "rgba(76, 175, 80, 0.1)", // xanh lá nhạt mờ
                            }}
                        >
                            <DoneAllIcon sx={{ color: "#4caf50", fontSize: 20 }} />
                        </Box>
                        

                        {/* Nội dung */}
                        <Box>
                            <Typography sx={{ fontWeight: 600, fontSize: 18 }}>210</Typography>
                            <Typography sx={{ fontSize: 12, color: "gray" }}>
                                Cảnh báo vượt ngưỡng
                            </Typography>
                        </Box>
                    </Box>

                    <Box
                        sx={{
                            height: 60,
                            width: 260,
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
                        <Box
                            sx={{
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                width: 35,
                                height: 35,
                                borderRadius: "50%",
                                backgroundColor: "rgba(239, 63, 113, 0.1)", // xanh lá nhạt mờ
                            }}
                        >
                            <WarningAmberRoundedIcon sx={{ color: "#ea3535", fontSize: 20 }} />
                        </Box>
                        

                        {/* Nội dung */}
                        <Box>
                            <Typography sx={{ fontWeight: 600, fontSize: 18 }}>210</Typography>
                            <Typography sx={{ fontSize: 12, color: "gray" }}>
                                Cần báo rò rỉ
                            </Typography>
                        </Box>
                    </Box>

                </Box>

                <Box sx={{ display: "flex", gap: 6, ml: 5, mt: 5 }}>
                    <Box
                        sx={{
                            height: 400,
                            width: 700,
                            border: "2px solid #000",
                            backgroundColor: "#fff",
                            borderRadius: 3,
                            boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.25)",
                        }}
                    >
                        <CardHeader
                            title="Tổng thiết bị theo trạng thái"
                            titleTypographyProps={{
                                fontSize: 16,
                            }}
                            sx={{
                                borderBottom: "2px solid #222222",
                            }}
                        />
                        <StatusPieChart
                            selectedDeviceId={selectedDeviceId} 
                            startDate={startDate}
                            endDate={endDate}
                        />
                    </Box>

                    <Box
                        sx={{
                            height: 400,
                            width: 350,
                            border: "2px solid #000",
                            backgroundColor: "#fff",
                            borderRadius: 3,
                            boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.25)",
                        }}
                    >
                        <CardHeader
                            title="Cảnh báo gần đây"
                            titleTypographyProps={{
                                fontSize: 16,
                            }}
                            sx={{
                                paddingBottom: "6px",
                                borderBottom: "2px solid #222222",
                            }}
                        />
                        <div>
                            <UsageAlertCard
                                title="Vượt ngưỡng sử dụng"
                                timestamp="9:28:30 20/8/2025"
                                customerCode="KH0001"
                                projectCode="CTKV1"
                                deviceCode="TB0001"
                                onDetailClick={() => alert("Chi tiết TB0001")}
                            />

                            <UsageAlertCard
                                title="Vượt ngưỡng sử dụng"
                                timestamp="10:15:00 20/8/2025"
                                customerCode="KH0002"
                                projectCode="CTKV2"
                                onDetailClick={() => alert("Chi tiết KH0002")}
                            />

                            <UsageAlertCard
                                title="Vượt ngưỡng sử dụng"
                                timestamp="11:05:30 20/8/2025"
                                customerCode="KH0003"
                                projectCode="CTKV3"
                                onDetailClick={() => alert("Chi tiết KH0003")}
                            />
                            
                            <UsageAlertCard
                                title="Vượt ngưỡng sử dụng"
                                timestamp="11:05:30 20/8/2025"
                                customerCode="KH0003"
                                projectCode="CTKV3"
                                onDetailClick={() => alert("Chi tiết KH0003")}
                            />

                        </div>
                        
                    </Box>
                </Box>


                <Box 
                    sx={{ 
                        height: 450, 
                        width: 1100, 
                        ml: 5, 
                        mt: 5,
                        border: "2px solid #000", 
                        backgroundColor: "#fff",
                        borderRadius: 3, 
                        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.25)" 
                    }}
                >
                    <CardHeader title="Tổng lượng nước tiêu thụ" 
                        titleTypographyProps={{
                            fontSize: 16,
                        }}
                        sx={{
                            borderBottom: "2px solid #222222",
                        }}
                    />
                    <WaterLineChart/>
                </Box>
            </CardContent>
        </Box>
    </Card>
)}