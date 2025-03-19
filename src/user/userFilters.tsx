import { TextInput } from "react-admin";

export const userFilters = [
    <TextInput source="q" label="Search" alwaysOn variant="outlined" sx={{ml:2}} />,
    <TextInput source="username"  variant="outlined" alwaysOn/>,
    <TextInput source="phone"  variant="outlined" alwaysOn/>,
    <TextInput source="company.name"  variant="outlined" alwaysOn/>,
    <TextInput source="address.street" variant="outlined" alwaysOn/>,
];