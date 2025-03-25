import { 
    Box, 
    Card, 
    CardContent, 
    CardHeader 
} from "@mui/material";
import { CustomAppBar } from "../appbar/CustomAppBar";

export const Dashboard = () => (
    <Card sx={{borderRadius:"20px", mr:"-24px", height:"100%",mt:"-64px"}} >
        <Box sx={{ padding: 2 }}>
            <CustomAppBar />
            
            <CardHeader title="Welcome to the administration" />
            
            <CardContent>Welcome to the administration</CardContent>
        </Box>
    </Card>
);