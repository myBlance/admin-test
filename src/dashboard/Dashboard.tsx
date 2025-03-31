import { 
    Box, 
    Card, 
    CardContent, 
    CardHeader 
} from "@mui/material";
import { CustomAppBar } from "../appbar/CustomAppBar";
import PieChartWithTinyLineChart from "./charts";

export const Dashboard = () => (
    <Card sx={{borderRadius:"20px", mr:"-24px", height:"auto",mt:"-64px"}} >
        <Box sx={{ padding: 2 }}>
            <CustomAppBar />
            
            <CardHeader title="Welcome to the administration" />
            
            <CardContent>
                <Box sx={{ 
                    height: 400, 
                    width: 800, 
                    ml: 5, 
                    border: "2px solid #000", 
                    borderRadius: 3, 
                    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.25)" 
                }}>
                    <PieChartWithTinyLineChart />
                </Box>
            </CardContent>
        </Box>
    </Card>
);