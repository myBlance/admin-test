import { DateInput, SelectInput, TextInput } from "react-admin";

export const postFilters = [
    <TextInput key="search" source="q" label="Tìm kiếm chính sách hoa hồng" alwaysOn sx={{ml:3, width:240}}/>,
    <DateInput key="created_at" source="created_at" label="Ngày tạo" alwaysOn sx={{ width:230}}/>,
    <SelectInput
        sx={{ width:230}}
        alwaysOn
        key="status"
        source="status"
        label="Trạng thái"
        choices={[
            { id: 'active', name: 'Hoạt động' },
            { id: 'inactive', name: 'Không hoạt động' },
        ]}
    />,
    <TextInput key="unit" source="unit" label="Đơn vị" alwaysOn sx={{ width:210}}/>,
    <SelectInput key="category" source="category" label="Danh mục sản phẩm" alwaysOn sx={{ width:210}}/>,
    <SelectInput key="product_name" source="product_name" label="Tên sản phẩm" alwaysOn sx={{ml:3, width:250}}/>,
    <TextInput key="product_code" source="product_code" label="Mã sản phẩm" alwaysOn/>,
];