import { Create, SimpleForm, TextInput, NumberInput } from 'react-admin';

export const FilmCreate = () => (
  <Create>
    <SimpleForm>
      <TextInput source="title" />
      <TextInput source="genre" />
      <NumberInput source="year" />
      <NumberInput source="rating" />
      <TextInput source="poster" />
    </SimpleForm>
  </Create>
);
