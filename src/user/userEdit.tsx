import { CardHeader } from "@mui/material";
import { DateTimeInput, Edit, SimpleForm, TextInput } from "react-admin";

export const UserEdit = () => (
    <Edit>
        <SimpleForm >
            <CardHeader title="Welcome to user page" />
            <TextInput readOnly source="id" sx={{width: 200}}/>
            <TextInput source="name"/>
            <TextInput source="username"/>
            <TextInput source="company.name" />
            <TextInput source="email" placeholder="Nhập email của bạn..." defaultValue="example@gmail.com" />
            <TextInput source="address.street" />
            <TextInput source="website" />
            <DateTimeInput readOnly sx={{width: 200}} source="date" defaultValue={new Date().toISOString()} />
        </SimpleForm>  
    </Edit>
);