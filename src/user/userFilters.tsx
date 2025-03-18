import { TextInput } from "react-admin";

export const userFilters = [
    <TextInput source="q" label="Search" alwaysOn variant="outlined" sx={{ml:2}} />,
    <TextInput source="user" label="User" variant="outlined" alwaysOn/>,
    <TextInput source="phone" label="Phone" variant="outlined" alwaysOn/>,
    <TextInput source="company.name" label="Company" variant="outlined" alwaysOn/>,
    <TextInput source="address.street" label="Address street" variant="outlined" alwaysOn/>,
];