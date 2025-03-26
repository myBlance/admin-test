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
                <Box sx={{ height: 600, width:800, ml:-10 }} >
                    <PieChartWithTinyLineChart />
                </Box>
            </CardContent>
        </Box>
    </Card>
);