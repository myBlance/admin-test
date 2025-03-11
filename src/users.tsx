import { useMediaQuery, Theme } from "@mui/material";
import { 
    List, 
    SimpleList, 
    Datagrid, 
    TextField, 
    EmailField, 
    Edit,
    TextInput, 
    ReferenceInput,
    SelectInput,
    SimpleForm,
    required,
    DateField,
    DateTimeInput,
} from "react-admin";
import MyUrlField from './MyUrlField';

const userFilters = [
    <TextInput source="q" label="Search" alwaysOn />,
    <ReferenceInput source="userId" label="User" reference="users" />,
    <ReferenceInput source="companyId" label="Company" reference="companies"/>,
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

export const UserEdit = () => (
    <Edit>
        <SimpleForm>
            <TextInput readOnly source="id" />
            <ReferenceInput label="User" source="userId" reference="users">
                <SelectInput optionText="name" validate={[required()]} />
            </ReferenceInput>
            <TextInput source="company.name" />
            <TextInput source="email" />
            <TextInput source="address.street" />
            <TextInput source="website" />
            <DateTimeInput readOnly source="date" defaultValue={new Date().toISOString()} />
        </SimpleForm>  
    </Edit>
);