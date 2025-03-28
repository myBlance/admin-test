import FilterListIcon from '@mui/icons-material/FilterList';
import {
    Box,
    Card,
    Drawer,
} from "@mui/material";
import {
    Button,
    DatagridConfigurable,
    List,
    TextField,
    useTranslate,
} from "react-admin";

import { CustomAppBar } from '../appbar/CustomAppBar';
import CustomBreadcrumbs from '../Breadcrumbs';
import { todoFilters } from './todoFilters';
import { TodoEdit } from './todoEdit';
import { useState, useCallback } from 'react';

export const TodoList = () => {
    const translate = useTranslate();
    const [editId, setEditId] = useState<string | null>(null);

    const handleOpenEdit = useCallback((id: string) => {
        setEditId(id);
    }, []);

    const handleCloseEdit = useCallback(() => {
        setEditId(null);
    }, []);

    return (
        <Card sx={{ borderRadius: "20px", mr: "-24px", height: "100%", mt: "-64px" }}>
            <Box sx={{ padding: 2 }}>
                <CustomAppBar />
                <CustomBreadcrumbs
                    onCreate={() => console.log("Create action")}
                />
            </Box>

            <List filters={todoFilters} actions={<></>}
                sx={{
                    border: "2px solid #ddd",
                    borderRadius: "20px",
                    mt: "-10px",
                    ml: "20px",
                    mr: "20px",
                    mb: "20px",
                    pt: "10px",
                }}
            >
                <Box>
                    <Button>
                        <Box sx={{ display: "flex", alignItems: "center", flexWrap: "wrap", gap: "8px", padding: "8px", ml: 3, color: "#2a77ca" }}>
                            <FilterListIcon />
                            {translate("buttons.filter")}
                        </Box>
                    </Button>
                </Box>

                <DatagridConfigurable
                    rowClick={(id) => {
                        handleOpenEdit(id.toString());
                        return ""; 
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
                    <TextField label="STT" source="id" />
                    <TextField source="userId" />
                    <TextField source="title" />
                    <TextField source="completed" />
                </DatagridConfigurable>
            </List>

            {/* Drawer mở khi có editId */}
            <Drawer
                variant="temporary"
                open={!!editId}
                anchor="right"
                onClose={handleCloseEdit}
                sx={{ width: { xs: "100%", sm: 400 }, zIndex: 100 }} // Điều chỉnh kích thước Drawer
            >
                {editId && (
                    <TodoEdit
                        id={editId}
                        onCancel={handleCloseEdit}
                    />
                )}
            </Drawer>
        </Card>
    );
};
