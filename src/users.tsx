import { 
    List, 
    SimpleList, 
    Datagrid, 
    TextField, 
    EmailField, 
    Edit,
    TextInput, 
    ReferenceInput,
    SimpleForm,
    DateField,
    DateTimeInput,
} from "react-admin";
import { 
    useMediaQuery,
    Theme,
    Box,
    CardHeader,
} from "@mui/material";
import MyUrlField from './MyUrlField';

const userFilters = [
    <TextInput source="q" label="Search" alwaysOn />,
    <ReferenceInput source="user" label="User" reference="users" />,
    <ReferenceInput source="phone" label="Phone" reference="phones" />,
    <ReferenceInput source="company.name" label="Company" reference="companies" />,
    <ReferenceInput source="address.street" label="Address street" reference="street" />,
];

export const UserList = () => {
    const isSmall = useMediaQuery<Theme>((theme) => theme.breakpoints.down("sm"));
    return (
        <List filters={userFilters}>
            {isSmall ? (
                <SimpleList
                    primaryText={(record) => record.name}
                    secondaryText={(record) => record.username}
                    tertiaryText={(record) => record.email}
                />
                ) : (
                <Datagrid>
                    <TextField source="id" />
                    <TextField source="name" />
                    <TextField source="username" />
                    <EmailField source="email" />
                    <TextField source="phone" />
                    <TextField source="address.street" />
                    <MyUrlField source="website" />
                    <TextField source="company.name" />
                    <DateField source="date"/>
                </Datagrid>
                )
            }
        </List>
    );
};

const Aside = () =>(
    <Box sx={{ width: '300px', margin: '1em' }}>
        <List>
            <Datagrid>
                <TextField source="id" />
                <TextField source="username" />
            </Datagrid>
        </List>
    </Box>
)

export const UserEdit = () => (
    <Edit aside ={<Aside/>}>
        <SimpleForm>
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