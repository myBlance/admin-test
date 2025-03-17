import {
    Box,
    Card,  
} from "@mui/material";
import {
    Datagrid,
    DateField,  
    List,
    ReferenceField,
    TextField,
    useRedirect,
} from "react-admin";
import CustomBreadcrumbs from '../Breadcrumbs';
import { postFilters } from './postFilters';
import FilterListIcon from '@mui/icons-material/FilterList';
import { CustomAppBar } from "../CustomAppBar";

export const PostList = () => {
    const redirect = useRedirect();
   
    return (     
        <Card sx={{borderRadius:"20px", mr:"-24px", height:"100%",mt:"-64px"}} >
            <Box sx={{ padding: 2 }}>
                <CustomAppBar/>
                <CustomBreadcrumbs
                    onCreate={() => redirect('/posts/create')}
                />
            </Box>
            <List filters={postFilters} actions={<></>}>
                <Box sx={{ display: "flex", alignItems: "center", flexWrap: "wrap", gap: "8px", padding: "8px", ml:3 }}>
                    <FilterListIcon/>
                    Bộ lọc
                </Box>

                <Datagrid rowClick="edit" bulkActionButtons={false}>
                    <TextField source="id" label="STT" />
                    <ReferenceField source="userId" reference="users" label="User" />
                    <TextField source="title" label="Title" />
                    <TextField source="body" label="Body" />
                    <DateField source="date" label="Date" />
                </Datagrid>
            </List>
        </Card>
       
    );
};


