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
                <Box sx={{ 
                    height: 400, 
                    width: 700, 
                    ml: 5, 
                    border: "2px solid #000", 
                    backgroundColor: "#fff",
                    borderRadius: 3, 
                    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.25)" 
                }}>
                    <CardHeader title="Tổng thiết bị theo trạng thái"
                        titleTypographyProps={{
                            fontSize: 16,
                        }}
                        sx={{
                            borderBottom: "2px solid #222222",
                        }}
                    />
                    <StatusPieChart/>
                </Box>

                <Box sx={{ 
                    height: 450, 
                    width: 1100, 
                    ml: 5, 
                    mt: 5,
                    border: "2px solid #000", 
                    backgroundColor: "#fff",
                    borderRadius: 3, 
                    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.25)" 
                }}>
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