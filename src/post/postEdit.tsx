import { CardHeader } from "@mui/material";
import { DateTimeInput, Edit, NumberInput, ReferenceInput, SimpleForm, TextInput } from "react-admin";

export const PostEdit = () => (
    <Edit>
        <SimpleForm>
            <CardHeader title="Post Edit" />
            <NumberInput readOnly source="id" />
            <ReferenceInput source="user" reference="users" link="show" />
            <TextInput source="title" />
            <TextInput source="body" multiline rows={5} />
            <DateTimeInput readOnly source="date" defaultValue={new Date().toISOString()} />
        </SimpleForm>
    </Edit>
);

