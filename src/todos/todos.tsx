import FilterListIcon from '@mui/icons-material/FilterList';
import {
    Box,
    Card,
} from "@mui/material";
import {
    Button,
    DatagridConfigurable,
    List,
    TextField,
    useRedirect,
    useTranslate,
} from "react-admin";

import { CustomAppBar } from '../appbar/CustomAppBar';
import CustomBreadcrumbs from '../Breadcrumbs';
import { todoFilters } from './todoFilters';

export const TodoList = () => {
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
        
            <List filters={todoFilters} actions={<></> }
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
                
                <DatagridConfigurable
                    rowClick={(id, resource) => {
                        redirect(`/${resource}/${id}`);
                        return false;
                    }}
                    rowSx={(record) => ({
                        borderLeft: `4px solid ${record.completed ? "#00b333" : "#b30000"}`,
                        backgroundColor: record.completed ? "#f0fff0" : "#fff5f5",
                    })}
                    bulkActionButtons={false}
                    sx={{
                        "& .RaDatagrid-headerCell": {
                            backgroundColor: "#b9b9b9",
                            fontWeight: "bold",
                        },
                    }}
                    >
                    <TextField label="STT" source="id"/>
                    <TextField source="userId" />
                    <TextField source="title" />
                    <TextField source="completed" />
                    </DatagridConfigurable>
            </List>
        </Card>
    );
};



