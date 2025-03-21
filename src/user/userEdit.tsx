import { Box, Card, CardHeader } from "@mui/material";
import { DateTimeInput, Edit, SimpleForm, TextInput } from "react-admin";
import { CustomAppBar } from "../appbar/CustomAppBar";
import { redirect } from "react-router";
import CustomBreadcrumbs from "../Breadcrumbs";

export const UserEdit = () => (
    <Card sx={{borderRadius:"20px", mr:"-24px", height:"100%",mt:"-64px"}} >
        <Box sx={{ padding: 2 }}>
            <CustomAppBar />
            <CustomBreadcrumbs
                onCreate={() => redirect('/posts/create')}
            />
        </Box>
        <Edit sx={{
                    border: "2px solid #ddd",
                    borderRadius:"20px",
                    mt:"-10px",
                    ml:"20px",
                    mr:"20px",
                    mb:"20px",
                    pt:"10px",
                    }}>
            <SimpleForm sx={{pl:8, pr:70}}>
                <CardHeader title="Welcome to user page" />
                <TextInput readOnly source="id" sx={{width: 200}} variant="outlined"/>
                <TextInput source="name" variant="outlined"/>
                <TextInput source="username" variant="outlined"/>
                <TextInput source="company.name" variant="outlined"/>
                <TextInput source="email" placeholder="Nhập email của bạn..." defaultValue="example@gmail.com" variant="outlined" />
                <TextInput source="address.street" variant="outlined" />
                <TextInput source="website" variant="outlined"/>
                <DateTimeInput readOnly sx={{width: 200}} source="date" defaultValue={new Date().toISOString()} variant="outlined" />
            </SimpleForm>  
        </Edit>
    </Card>
);