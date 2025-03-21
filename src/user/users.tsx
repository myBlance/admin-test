import FilterListIcon from '@mui/icons-material/FilterList';
import {
    Box,
    Card,
} from "@mui/material";
import {
    Button,
    DatagridConfigurable,
    DateField,
    EmailField,
    List,
    TextField,
    useRedirect,
    useTranslate,
} from "react-admin";

import { CustomAppBar } from "../appbar/CustomAppBar";
import CustomBreadcrumbs from "../Breadcrumbs";
import MyUrlField from '../MyUrlField';
import { userFilters } from "./userFilters";


export const UserList = () => {
    const redirect = useRedirect();
    const translate = useTranslate();

    return (
        <Card sx={{borderRadius:"20px", mr:"-24px", height:"100%",mt:"-64px"}} >
            <Box sx={{ padding: 2 }}>
                <CustomAppBar/>
                <CustomBreadcrumbs
                    onCreate={() => redirect('/users/create')}
                />
            </Box>
        
            <List filters={userFilters} actions={<></> }
                sx={{
                    border: "2px solid #ddd",
                    borderRadius:"20px",
                    mt:"-10px",
                    ml:"20px",
                    mr:"20px",
                    mb:"20px",
                    pt:"10px",
                    }}
                >
                <Box >
                    <Button>
                        <Box sx={{ display: "flex", alignItems: "center", flexWrap: "wrap", gap: "8px", padding: "8px", ml:3, color:"#2a77ca" }}>
                            <FilterListIcon/>
                            {translate("buttons.filter")}
                        </Box>
                    </Button>
                </Box>
            
                    
                <DatagridConfigurable bulkActionButtons={false} sx={{ 
                        "& .RaDatagrid-headerCell": {
                            backgroundColor: "#b9b9b9", 
                            fontWeight: "bold", 
                        },
                        "& .RaDatagrid-rowEven": { backgroundColor: "#ffffff" }, 
                        "& .RaDatagrid-rowOdd": { backgroundColor: "#d6d5d5" }, 
                        "&:hover": { backgroundColor: "#8f8f8f" },
                    }}    >
                    <TextField label="STT" source="id" />
                    <TextField source="name" />
                    <TextField source="username" />
                    <EmailField source="email" />
                    <TextField source="phone" />
                    <TextField source="address.street" />
                    <MyUrlField source="website" />
                    <TextField source="company.name" />
                    <DateField source="date"/>
                </DatagridConfigurable>
                
            
        </List>
        </Card>
    );
};



