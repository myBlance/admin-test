import { Admin, Resource, defaultDarkTheme, defaultLightTheme} from "react-admin";
import { Layout } from "./Layout";
import { dataProvider } from "./dataProvider";
import { UserEdit, UserList } from "./users";
import { PostList, PostEdit, PostCreate } from "./posts";
import { PhotoList, ShowGuesser } from "./photos";
import PostIcon from "@mui/icons-material/Book";
import UserIcon from "@mui/icons-material/Group";
import { Dashboard } from './Dashboard';
import { authProvider } from './authProvider';
import CommentIcon from '@mui/icons-material/Comment';
import PhotoLibraryIcon from '@mui/icons-material/PhotoLibrary';
import { CommentList } from "./comments";
import { deepmerge } from '@mui/utils';

const lightTheme = defaultLightTheme;
const darkTheme = deepmerge(defaultDarkTheme, { palette: { mode: 'dark' } });

export const App = () => (
  <Admin authProvider={authProvider} layout={Layout} dataProvider={dataProvider} dashboard={Dashboard} theme={lightTheme} darkTheme={darkTheme}>
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
      <Resource
        name="photos" 
        show={ShowGuesser}
        list={PhotoList}
        icon={PhotoLibraryIcon}
      />
      <Resource
        name="comments"
        list={CommentList}
        icon={CommentIcon}
      />
  </Admin>
);
