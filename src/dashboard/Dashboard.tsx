import { 
    Box, 
    Card, 
    CardContent, 
    CardHeader 
} from "@mui/material";
import { CustomAppBar } from "../appbar/CustomAppBar";
// import PieChartWithTinyLineChart from "./charts";
import StatusPieChart from "./StatusPieChart";
import WaterLineChart from "./WaterLineChart";

export const Dashboard = () => (
    <Card sx={{borderRadius:"20px", mr:"-24px", height:"auto",mt:"-64px"}} >
        <Box sx={{ padding: 2 }}>
            <CustomAppBar />
            
            <CardHeader title="" />
            
            <CardContent>
                {/* <Box sx={{ 
                    height: 400, 
                    width: 800, 
                    ml: 5, 
                    border: "2px solid #000", 
                    backgroundColor: "#fff",
                    borderRadius: 3, 
                    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.25)" 
                }}>
                    <PieChartWithTinyLineChart />
                </Box> */}
                <Box sx={{ display: "flex", gap: 6, ml: 5 }}>
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
                        <StatusPieChart />
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
                        <Box 
                            sx={{ 
                                margin: "20px 30px",
                                border: "1px solid #000",
                                borderRadius: 3,
                            }}
                        >
                            <CardHeader
                                title="Vượt ngưỡng sử dụng - TB0001"
                                titleTypographyProps={{
                                    fontSize: 14,
                                    fontWeight: "600",
                                }}
                                action={
                                    <Box
                                        sx={{
                                            marginTop: "4px",
                                            width: "45px",
                                            fontSize: 13,
                                            height: "20px",
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
                                <p style={{margin: "5px 20px 10px 16px"}}>9:28:30 20/8/2025 - KH0001 - CTKV1</p>
                            </Box>
                        </Box>
                         <Box 
                            sx={{ 
                                margin: "20px 30px",
                                border: "1px solid #000",
                                borderRadius: 3,
                            }}
                        >
                            <CardHeader
                                title="Vượt ngưỡng sử dụng"
                                titleTypographyProps={{
                                    fontSize: 14,
                                    fontWeight: "600",
                                }}
                                action={
                                    <Box
                                        sx={{
                                            marginTop: "4px",
                                            width: "45px",
                                            fontSize: 13,
                                            height: "20px",
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
                                <p style={{margin: "5px 20px 10px 16px"}}>9:28:30 20/8/2025 - KH0001 - CTKV1</p>
                            </Box>
                        </Box> <Box 
                            sx={{ 
                                margin: "20px 30px",
                                border: "1px solid #000",
                                borderRadius: 3,
                            }}
                        >
                            <CardHeader
                                title="Vượt ngưỡng sử dụng"
                                titleTypographyProps={{
                                    fontSize: 14,
                                    fontWeight: "600",
                                }}
                                action={
                                    <Box
                                        sx={{
                                            marginTop: "4px",
                                            width: "45px",
                                            fontSize: 13,
                                            height: "20px",
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
                                <p style={{margin: "5px 20px 10px 16px"}}>9:28:30 20/8/2025 - KH0001 - CTKV1</p>
                            </Box>
                        </Box> <Box 
                            sx={{ 
                                margin: "20px 30px",
                                border: "1px solid #000",
                                borderRadius: 3,
                            }}
                        >
                            <CardHeader
                                title="Vượt ngưỡng sử dụng"
                                titleTypographyProps={{
                                    fontSize: 14,
                                    fontWeight: "600",
                                }}
                                action={
                                    <Box
                                        sx={{
                                            marginTop: "4px",
                                            width: "45px",
                                            fontSize: 13,
                                            height: "20px",
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
                                <p style={{margin: "5px 20px 10px 16px"}}>9:28:30 20/8/2025 - KH0001 - CTKV1</p>
                            </Box>
                        </Box>
                        
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
);