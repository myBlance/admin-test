import {
    Create, 
    DateTimeInput, 
    NumberInput, 
    SimpleForm, 
    TextInput 
} from "react-admin";
import { CustomAppBar } from "../appbar/CustomAppBar";
import CustomBreadcrumbs from "../Breadcrumbs";
import { 
    Box, 
    Card 
} from "@mui/material";
import { redirect } from "react-router";

export const PostCreate = () => (
    <Card sx={{borderRadius:"20px", mr:"-24px", height:"100%",mt:"-64px"}} >
        <Box sx={{ padding: 2 }}>
            <CustomAppBar />
            <CustomBreadcrumbs
                onCreate={() => redirect('/posts/create')}
            />
        </Box>
        <Create 
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
            <SimpleForm sx={{pl:8, pr:70}}>
                <NumberInput source="id" variant="outlined"/>
                <TextInput source="userId" variant="outlined" />
                <TextInput source="title" variant="outlined"/>
                <TextInput source="body" multiline rows={5} variant="outlined"/>
                <DateTimeInput readOnly source="date" defaultValue={new Date().toISOString()} variant="outlined" sx={{width:200}}/>
            </SimpleForm>
        </Create>
    </Card>
);