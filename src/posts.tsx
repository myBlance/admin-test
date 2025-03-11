import {
    List,
    Datagrid,
    TextField,
    ReferenceField,
    Edit,
    Create,
    SimpleForm,
    ReferenceInput,
    TextInput,
    DateTimeInput,
    DateField,
    ShowButton, 
    TopToolbar,
} from "react-admin";
import { 
    Box,
} from "@mui/material";


const postFilters = [
    <TextInput source="q" label="Search" alwaysOn />,
    <ReferenceInput source="userId" label="User" reference="users" />,
];

const EditActions = () => (
    <TopToolbar>
        <ShowButton />
    </TopToolbar>
);

const Aside = () => (
    <Box sx={{ width: '200px', margin: '1em' }}>
        
    </Box>
);

export const PostList = () => {
    return (
        <List filters={postFilters} >
            <Datagrid>
                <ReferenceField source="userId" reference="users" link="show" />
                <TextField source="id" />
                <TextField source="title" />
                <TextField source="body" />
                <DateField source="date"/>
                <EditActions />
            </Datagrid>
        </List>
    );
};

export const PostEdit = () => (
    <Edit aside={<Aside />}>
        <SimpleForm>
            <TextInput source="id" />
            <ReferenceInput source="userId" reference="users"  link="show" />
            <TextInput source="title" />
            <TextInput source="body" multiline rows={5} />
            <DateTimeInput readOnly source="date" defaultValue={new Date().toISOString()} />
        </SimpleForm>
    </Edit>
);

export const PostCreate = () => (
    <Create aside={<Aside />}>
        <SimpleForm>
            <ReferenceInput source="userId" reference="users" />
            <TextInput source="title" />
            <TextInput source="body" multiline rows={5} />
            <DateTimeInput readOnly source="date" defaultValue={new Date().toISOString()} />
        </SimpleForm>
    </Create>
);