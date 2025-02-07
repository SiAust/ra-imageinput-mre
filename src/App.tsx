import {
  Admin,
  Resource,
  ListGuesser,
  EditGuesser,
  ShowGuesser,
} from "react-admin";
import { Layout } from "./Layout";
import { dataProvider } from "./dataProvider";

import { ImageList, ImageShow, ImageEdit, ImageCreate } from "./images";

export const App = () => (
  <Admin
    layout={Layout}
    dataProvider={dataProvider}
  >
    <Resource
      name="posts"
      list={ListGuesser}
      edit={EditGuesser}
      show={ShowGuesser}
    />
    <Resource
      name="images"
      list={ImageList}
      edit={ImageEdit}
      show={ImageShow}
      create={ImageCreate}
    />
  </Admin>
);
