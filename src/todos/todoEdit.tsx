import {
    Box,
    IconButton, 
    Stack,
    Typography,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import {
    EditBase, 
    NumberInput, 
    SelectInput, 
    SimpleForm, 
    TextInput, 
    useTranslate
} from "react-admin";
interface TodoEditProps {
    id: string;
    onCancel: () => void;
}

export const TodoEdit = ({ id, onCancel }: TodoEditProps) => {
    const translate = useTranslate();
    return (
        <EditBase id={id}>
            <Box pt={5} width={{ xs: '100vW', sm: 400 }} mt={{ xs: 2, sm: 1 }}>
                <Stack direction="row" p={2}>
                    <Typography variant="h6" flex="1">
                        {translate('resources.todos.detail')}
                    </Typography>
                    <IconButton onClick={onCancel} size="small">
                        <CloseIcon />
                    </IconButton>
                </Stack>
                <SimpleForm>
                    <NumberInput label="STT" source="id" variant="outlined"/>
                    <TextInput source="userId" variant="outlined" />
                    <TextInput source="title" variant="outlined"/>
                    <SelectInput 
                        variant="outlined"
                        source="completed" 
                        choices={[
                            { id: true, name: "Hoàn thành" },
                            { id: false, name: "Chưa hoàn thành" }
                        ]}
                    />
                </SimpleForm>
            </Box>
        </EditBase>
    );
};

