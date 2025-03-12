import { 
    useMediaQuery,
    Theme,
} from "@mui/material";
import {
    List,
    SimpleList,
    Datagrid,
    TextField,
    EmailField,
} from "react-admin";
 
export const CommentList = () => {
    const isSmall = useMediaQuery<Theme>((theme) => theme.breakpoints.down("sm"));
    return (
        <List >
            {isSmall ? (
                <SimpleList
                    primaryText={(record) => record.name}
                    secondaryText={(record) => record.body}
                    tertiaryText={(record) => record.email}
                />
                ) : (
                <Datagrid>
                    <TextField source="id" />
                    <TextField source="name" />
                    <EmailField source="email" />
                    <TextField source="body"/>
                </Datagrid>
                )
            }
        </List>
    );
};