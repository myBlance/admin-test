import FilterListIcon from '@mui/icons-material/FilterList';
import {
    Box,
    Card,
} from "@mui/material";
import {
    Datagrid,
    DatagridConfigurable,
    DateField,
    EmailField,
    List,
    TextField,
} from "react-admin";
import { redirect } from "react-router";
import { CustomAppBar } from "../appbar/CustomAppBar";
import CustomBreadcrumbs from "../Breadcrumbs";
import MyUrlField from '../MyUrlField';
import { userFilters } from "./userFilters";


export const UserList = () => {
    
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
                <Box sx={{ display: "flex", alignItems: "center", flexWrap: "wrap", gap: "8px", padding: "8px", ml:3, color:"#2a77ca" }}>
                    <FilterListIcon/>
                    Bộ lọc
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



