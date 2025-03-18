import FilterListIcon from '@mui/icons-material/FilterList';
import {
    Box,
    Card,
    Theme,
    useMediaQuery,
} from "@mui/material";
import {
    Datagrid,
    DateField,
    EmailField,
    List,
    SimpleList,
    TextField,
} from "react-admin";
import { redirect } from "react-router";
import { CustomAppBar } from "../appbar/CustomAppBar";
import CustomBreadcrumbs from "../Breadcrumbs";
import MyUrlField from '../MyUrlField';
import { userFilters } from "./userFilters";

export const UserList = () => {
    const isSmall = useMediaQuery<Theme>((theme) => theme.breakpoints.down("sm"));
    return (
        <Card sx={{borderRadius:"20px", mr:"-24px", height:"100%",mt:"-64px"}} >
            <Box sx={{ padding: 2 }}>
                <CustomAppBar/>
                <CustomBreadcrumbs
                    onCreate={() => redirect('/posts/create')}
                />
            </Box>
        
            <List filters={userFilters} actions={<></>}
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
            {isSmall ? (
                <SimpleList
                    primaryText={(record) => record.name}
                    secondaryText={(record) => record.username}
                    tertiaryText={(record) => record.email}
                />
                ) : (
                    
                <Datagrid bulkActionButtons={false}>
                    <TextField label="STT" source="id" />
                    <TextField source="name" />
                    <TextField source="username" />
                    <EmailField source="email" />
                    <TextField source="phone" />
                    <TextField source="address.street" />
                    <MyUrlField source="website" />
                    <TextField source="company.name" />
                    <DateField source="date"/>
                </Datagrid>
                )
            }
        </List>
        </Card>
    );
};



