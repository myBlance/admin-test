import FilterListIcon from '@mui/icons-material/FilterList';
import {
    Box,
    Card,
} from "@mui/material";
import {
    Datagrid,
    DatagridConfigurable,
    DateField,
    List,
    ReferenceField,
    TextField,
    useRedirect,
} from "react-admin";
import CustomBreadcrumbs from '../Breadcrumbs';
import { postFilters } from './postFilters';
import { CustomAppBar } from './../appbar/CustomAppBar';


export const PostList = () => {
    const redirect = useRedirect();
   
    return (     
        <Card sx={{borderRadius:"20px", mr:"-24px", height:"100%",mt:"-64px"}} >
            <Box sx={{ padding: 2 }}>
                <CustomAppBar />
                <CustomBreadcrumbs
                    onCreate={() => redirect('/posts/create')}
                />
            </Box>
            <List filters={postFilters} actions={<></>} 
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

                <DatagridConfigurable rowClick="edit" bulkActionButtons={false}
                    sx={{ 
                        "& .RaDatagrid-headerCell": {
                            backgroundColor: "#b9b9b9", 
                            fontWeight: "bold", 
                        },
                        "& .RaDatagrid-rowEven": { backgroundColor: "#ffffff" }, 
                        "& .RaDatagrid-rowOdd": { backgroundColor: "#d6d5d5" }, 
                        "&:hover": { backgroundColor: "#8f8f8f" },
                    }}    
                >
                    <TextField source="id" label="STT" />
                    <ReferenceField source="userId" reference="users" label="User" />
                    <TextField source="title" label="Title" />
                    <TextField source="body" label="Body" />
                    <DateField source="date" label="Date" />
                </DatagridConfigurable>
            </List>
        </Card>
       
    );
};


