import { DateInput, SelectInput, TextInput } from "react-admin";

export const postFilters = [
    <TextInput key="search" source="search" variant="outlined" alwaysOn sx={{ml:3, width:240}}/>,
    <DateInput key="created_at" source="created_at" variant="outlined" label="Ngày tạo" alwaysOn sx={{ width:230}}/>,
    <SelectInput
        sx={{ width:200}}
        alwaysOn
        variant="outlined" 
        key="status"
        source="status"
        choices={[
            { id: 'active', name: 'Hoạt động' },
            { id: 'inactive', name: 'Không hoạt động' },
        ]}
    />,
    <TextInput key="unit" source="unit" variant="outlined" alwaysOn sx={{ width:200}}/>,
    <SelectInput key="category" source="category" variant="outlined" alwaysOn sx={{ width:210}}/>,
    <SelectInput key="product_name" source="product_name" variant="outlined" alwaysOn sx={{ml:3, width:250}}/>,
    <TextInput key="product_code" source="product_code" variant="outlined" alwaysOn/>,
];