import { 
    List,
    Datagrid,
    TextField,
    ImageField,
    Show,
    SimpleShowLayout,
} from 'react-admin';

export const PhotoList = () => (
    <List sx={{mr:30}}>
        <Datagrid>
            <ImageField
                source="thumbnailUrl"
                sx={{ '& img': { maxWidth: 50, maxHeight: 50, borderRadius: 1/2} }}
            />
            <TextField source="albumId" />
            <TextField source="id" />
            <TextField source="title" />  
        </Datagrid>
    </List>
)

export const ShowGuesser =() =>(
    <Show sx={{mr:50}}>
        <SimpleShowLayout>
            <ImageField 
                source="url" title=""
                sx={{'& img': { maxWidth: 100, maxHeight: 100 } }}
            />
            <TextField source="albumId" />
            <TextField source="id" />
            <TextField source="title" />
        </SimpleShowLayout>
    </Show>
)