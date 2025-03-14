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
    SimpleList,
    NumberInput,
} from "react-admin";
import { 
    Box,
    useMediaQuery, 
    Theme,
    CardHeader,
} from "@mui/material";

const postFilters = [
    <TextInput source="q" label="Search" alwaysOn />,
    <ReferenceInput source="userId" label="User" reference="users" />,
];

const ShowActions = () => (
    <TopToolbar>
        <ShowButton />
    </TopToolbar>
);

const Aside = () => (
    <Box sx={{ width: '400px', margin: '1em' }}>
        <List  >
            <Datagrid>
                <ReferenceField source="userId" reference="users" />
                <TextField source="id" />
            </Datagrid>
        </List>
    </Box>
);

export const PostList = () => {
    const isSmall = useMediaQuery<Theme>((theme) => theme.breakpoints.down("sm"));
    return (
        <List filters={postFilters}>
            {isSmall ? (
                <SimpleList
                    primaryText={(record) => record.id}
                    secondaryText={(record) => record.title}
                />
                ) : (
                    <Datagrid>
                    <ReferenceField source="userId" reference="users" link="show" />
                    <TextField source="id" />
                    <TextField source="title" />
                    <TextField source="body" />
                    <DateField source="date"/>
                    <ShowActions />
                </Datagrid>
                )
            }
        </List>
    );
};



export const PostEdit = () => (
    <Edit aside={<Aside />}>
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