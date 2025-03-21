import FilterListIcon from '@mui/icons-material/FilterList';
import {
    Box,
    Card,
} from "@mui/material";
import {
    Button,
    DatagridConfigurable,
    DateField,
    List,
    ReferenceField,
    TextField,
    useRedirect,
    useTranslate,
} from "react-admin";
import CustomBreadcrumbs from '../Breadcrumbs';
import { postFilters } from './postFilters';
import { CustomAppBar } from './../appbar/CustomAppBar';


export const PostList = () => {
    const redirect = useRedirect();
    const translate = useTranslate();
   
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
                <Box >
                    <Button>
                        <Box sx={{ display: "flex", alignItems: "center", flexWrap: "wrap", gap: "8px", padding: "8px", ml:3, color:"#2a77ca" }}>
                            <FilterListIcon/>
                            {translate("buttons.filter")}
                        </Box>
                    </Button>
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
                    <ReferenceField source="userId" reference="users" />
                    <TextField source="title"/>
                    <TextField source="body"  />
                    <DateField source="date" />
                </DatagridConfigurable>
            </List>
        </Card>
       
    );
};


