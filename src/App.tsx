import { Admin, Resource, defaultDarkTheme, defaultLightTheme } from "react-admin";
import { Layout } from "./Layout";
import { dataProvider } from "./dataProvider";
import {  PostList } from "./post/posts";
import { UserEdit, UserList } from "./user/users";

import PostIcon from "@mui/icons-material/Book";
import UserIcon from "@mui/icons-material/Group";
import { Dashboard } from './Dashboard';
import { authProvider } from './authProvider';

import { deepmerge } from '@mui/utils';
import { i18nProvider } from "./i18nProvider";
import { PostCreate } from "./post/postCreate";
import { PostEdit } from "./post/postEdit";


const lightTheme = defaultLightTheme;
const darkTheme = deepmerge(defaultDarkTheme, { palette: { mode: 'light' } });

export const App = () => (
  <Admin  authProvider={authProvider} 
          layout={Layout} 
          dataProvider={dataProvider} 
          dashboard={Dashboard} 
          theme={lightTheme} darkTheme={darkTheme}
          i18nProvider={i18nProvider} 
          >
      <Resource
        name="posts" 
        list={PostList} 
        edit={PostEdit} 
        create={PostCreate}
        icon={PostIcon}
        options={{ label: "Bài viết" }}
      />
      <Resource
        name="users" 
        list={UserList} 
        edit={UserEdit}  
        icon={UserIcon}
        options={{ label: "Người dùng" }}
      />
  </Admin>
);
