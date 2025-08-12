import { Admin, Resource } from "react-admin";
import { Layout } from "./Layout";
import  dataProvider  from "./data/dataProvider";
import {  PostList } from "./post/posts";
import {  UserList } from "./user/users";
import PostIcon from "@mui/icons-material/Book";
import UserIcon from "@mui/icons-material/Group";
import { Dashboard } from './dashboard/Dashboard';
import { authProvider } from './auth/authProvider';
import { i18nProvider } from "./i18N/i18nProvider";
import { PostCreate } from "./post/postCreate";
import { PostEdit } from "./post/postEdit";
import { UserEdit } from "./user/userEdit";
import { darkTheme } from "./theme/darkTheme";
import { lightTheme } from "./theme/lightTheme";
import { UserCreate } from "./user/userCreate";
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { TodoList } from './todos/todos';
import EventIcon from '@mui/icons-material/Event';
import { TodoEdit } from "./todos/todoEdit";
import TheatersIcon from '@mui/icons-material/Theaters';
import { FilmList } from "./filmList/film";
import { FilmEdit }from "./filmList/filmEdit";
import { FilmCreate } from "./filmList/filmCreate";

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            staleTime: 10000,
            retry: false,
            refetchOnWindowFocus: false,
            // structuralSharing: false,
        },
        mutations: {
            retryDelay: 10000,
        },
    },
});

export const App = () => (
  <QueryClientProvider client={queryClient}>
        <Admin 
            queryClient={queryClient}
            authProvider={authProvider} 
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
        />
        <Resource
            name="users" 
            list={UserList} 
            edit={UserEdit}  
            create={UserCreate}
            icon={UserIcon}
        />
        <Resource
            name="todos" 
            list={TodoList} 
            icon={EventIcon}
            edit={TodoEdit}     
        />
        <Resource
            name="films" 
            list={FilmList} 
            icon={TheatersIcon}
            edit={FilmEdit} 
            create={FilmCreate}    
        />
    </Admin>

    <ReactQueryDevtools initialIsOpen={false} />
  </QueryClientProvider>
);
