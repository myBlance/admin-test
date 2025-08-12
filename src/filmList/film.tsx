
import {
    Box,
    Card,
} from "@mui/material";
import {
    Datagrid,
    DeleteButton,
    EditButton,

    List,
    NumberField,
    TextField,
    DateField,

    FunctionField,
    ShowButton,

} from "react-admin";

import { CustomAppBar } from '../appbar/CustomAppBar';
import CustomBreadcrumbs from '../Breadcrumbs';
import { FilmFilter } from './filmFilters';

export const FilmList = () => {



    return (
        <Card sx={{ borderRadius: "20px", mr: "-24px", height: "100%", mt: "-64px" }}>
            <Box sx={{ padding: 2 }}>
                <CustomAppBar />
                <CustomBreadcrumbs onCreate={() => console.log("Create action")} />
            </Box>

            <List filters={<FilmFilter />}>
                

                <Datagrid rowClick="edit">
                    <TextField source="id" />
                    <TextField source="title" label="Title" />
                    <TextField source="genre" label="Thể loại" />
                    <DateField source="release_date" label="Release Date" />
                    <NumberField source="vote_average" label="Rating" />
                    {/* <ImageField source="poster" title="title" label="Poster" /> */}
                    <FunctionField
                        label="Hành động" 
                        render={record => (
                            <Box
                                sx={{
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    gap: 1,
                                    '& .MuiButton-root': {
                                        minWidth: 0,
                                        padding: '4px',
                                        width: '32px',
                                        height: '32px',
                                    },
                                    '& svg': {
                                        fontSize: '20px',
                                    },
                                }}
                            >
                                <ShowButton record={record} label="" />
                                <EditButton record={record} label="" />
                                <DeleteButton record={record} label="" />
                            </Box>
                        )}
                        sx={{
                            position: 'sticky',
                            right: 0,
                            backgroundColor: '#fff',
                            zIndex: 2,
                        }}
                    />

                </Datagrid>
            </List>
        </Card>
    );
};
