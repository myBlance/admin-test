import { Admin, Resource} from "react-admin";
import { Layout } from "./Layout";
import { dataProvider } from "./dataProvider";
import { UserEdit, UserList } from "./users";
import { PostList, PostEdit, PostCreate } from "./posts";
import PostIcon from "@mui/icons-material/Book";
import UserIcon from "@mui/icons-material/Group";
import { Dashboard } from './Dashboard';
import { authProvider } from './authProvider';



export const App = () => (
  <Admin authProvider={authProvider} layout={Layout} dataProvider={dataProvider} dashboard={Dashboard} >
      <Resource
        name="posts" 
        list={PostList} 
        edit={PostEdit} 
        create={PostCreate}
        icon={PostIcon}
      />
      <Resource
        name="users" 
        list={UserList} 
        edit={UserEdit}  
        icon={UserIcon}
      />
  </Admin>
);
