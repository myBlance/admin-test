import { Edit, SimpleForm, TextInput, NumberInput } from 'react-admin';

export const FilmEdit = () => (
  <Edit>
    <SimpleForm>
      <TextInput source="title" />
      <TextInput source="genre" />
      <NumberInput source="year" />
      <NumberInput source="rating" />
      <TextInput source="poster" />
    </SimpleForm>
  </Edit>
);

