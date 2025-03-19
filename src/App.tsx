import { Admin, Resource } from "react-admin";
import { Layout } from "./Layout";
import { dataProvider } from "./data/dataProvider";
import {  PostList } from "./post/posts";
import {  UserList } from "./user/users";

import PostIcon from "@mui/icons-material/Book";
import UserIcon from "@mui/icons-material/Group";
import { Dashboard } from './dashboard/Dashboard';
import { authProvider } from './auth/authProvider';


import { i18nProvider } from "./i18/i18nProvider";
import { PostCreate } from "./post/postCreate";
import { PostEdit } from "./post/postEdit";
import { UserEdit } from "./user/userEdit";
import { darkTheme } from "./theme/darkTheme";
import { lightTheme } from "./theme/lightTheme";


export const App = () => (
  <Admin  authProvider={authProvider} 
          layout={Layout} 
          dataProvider={dataProvider} 
          dashboard={Dashboard} 
          theme={lightTheme}
          darkTheme={darkTheme}
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
