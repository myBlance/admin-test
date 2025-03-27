import { SelectInput, TextInput } from "react-admin";

export const todoFilters = [
    <TextInput source="search" alwaysOn variant="outlined" sx={{ml:2}} />,
    <TextInput source="id" variant="outlined" alwaysOn/>,
    <TextInput source="userId" variant="outlined" alwaysOn/>,
    <TextInput source="title" variant="outlined" alwaysOn/>,
    <SelectInput 
        source="completed" 
        variant="outlined" 
        alwaysOn
        key="completed"
        choices={[
            { id: 'true', name: 'Hoàn thành' },
            { id: 'false', name: 'Chưa hoàn thành' },
        ]}
    />,
];