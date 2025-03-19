import { Box, Card, CardHeader } from "@mui/material";
import { Create, DateTimeInput, SimpleForm, TextInput } from "react-admin";
import { CustomAppBar } from "../appbar/CustomAppBar";
import { redirect } from "react-router";
import CustomBreadcrumbs from "../Breadcrumbs";

export const UserEdit = () => (
    <Card sx={{borderRadius:"20px", mr:"-24px", height:"100%",mt:"-64px"}} >
        <Box sx={{ padding: 2 }}>
            <CustomAppBar />
            <CustomBreadcrumbs
                onCreate={() => redirect('/users/create')}
            />
        </Box>
        <Create sx={{
                    border: "2px solid #ddd",
                    borderRadius:"20px",
                    mt:"-10px",
                    ml:"20px",
                    mr:"20px",
                    mb:"20px",
                    pt:"10px",
                    }}>
            <SimpleForm >
                <TextInput readOnly source="id" sx={{width: 200}}/>
                <TextInput source="name"/>
                <TextInput source="username"/>
                <TextInput source="company.name" />
                <TextInput source="email" placeholder="Nhập email của bạn..." defaultValue="example@gmail.com" />
                <TextInput source="address.street" />
                <TextInput source="website" />
                <DateTimeInput readOnly sx={{width: 200}} source="date" defaultValue={new Date().toISOString()} />
            </SimpleForm>  
        </Create>
    </Card>
);