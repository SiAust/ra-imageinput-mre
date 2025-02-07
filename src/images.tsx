import {
  List,
  Datagrid,
  Edit,
  Create,
  SimpleForm,
  TextField,
  EditButton,
  ShowButton,
  TextInput,
  ImageInput,
  ImageField,
  SimpleShowLayout,
  Show,
} from "react-admin";


export const ImageList = () => {
  return (
    <List>
      <Datagrid >
        <TextField source="id" />
        <ImageField
          source="pictures"
          src="url"
          title="title"
        />
        <>
          <EditButton />
          <ShowButton />
        </>
      </Datagrid>
    </List>
  );
};

export const ImageShow = () => {
  return (
    <Show>
      <SimpleShowLayout>
        <TextField source="id" />
        <ImageField
          source="pictures"
          src="url"
          title="desc"
        />
      </SimpleShowLayout>
    </Show>
  );
};

export const ImageEdit = () => {
  return (
    <Edit>
      <SimpleForm>
        <TextInput source="id" />
        <ImageInput source="pictures" label="Add more pictures">
          <ImageField source="pictures" src="src" title="title" />
        </ImageInput>
      </SimpleForm>
    </Edit>
  );
};

export const ImageCreate = () => {
  return (
    <Create>
      <SimpleForm>
        <TextInput disabled source="id" />
        <ImageInput source="pictures" label="Pictures of dog">
          <ImageField source="pictures" src="src" title="title" />
        </ImageInput>
      </SimpleForm>
    </Create>
  );
};
