import { 
        Toolbar, 
        IconButton, 
        useMediaQuery, 
        Theme 
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { 
    HideOnScroll, 
    LoadingIndicator, 
    LocalesMenuButton, 
    SidebarToggleButton, 
    TitlePortal, 
    ToggleThemeButton, 
    UserMenu, 
    useThemesContext 
} from "react-admin";
import { 
    FC, 
    ReactNode, 
    memo 
} from "react";


interface CustomAppBarProps {
    onToggleSidebar?: () => void;
    userMenu?: ReactNode;
    alwaysOn?: boolean;
}

export const CustomAppBar: FC<CustomAppBarProps> = memo(({ onToggleSidebar, userMenu = <UserMenu /> }) => {
    const isXSmall = useMediaQuery<Theme>(theme => theme.breakpoints.down("sm"));
    const { darkTheme } = useThemesContext();
    
    return (
        <HideOnScroll >
                <Toolbar disableGutters variant={isXSmall ? "regular" : "dense"} sx={{borderBottom: "2px solid #ddd"}}>
                    {onToggleSidebar ? (
                        <IconButton onClick={onToggleSidebar} sx={{ color: "#000", marginRight: 2 }}>
                            <MenuIcon />
                        </IconButton>
                    ) : (
                        <SidebarToggleButton />
                    )}

                    {/* Tiêu đề */}
                    <TitlePortal />

                    {/* Các chức năng bổ sung */}
                    <div style={{ flexGrow: 1 }}></div>
                    
                    {darkTheme && <ToggleThemeButton />}
                    <LoadingIndicator />
                    <LocalesMenuButton languages={[
                        { locale: 'en', name: 'EN' },
                        { locale: 'vi', name: 'VI ' },
                    ]} />

                    {/* Menu người dùng */}
                    {typeof userMenu === "boolean" ? (userMenu ? <UserMenu /> : null) : userMenu}
                </Toolbar>
        </HideOnScroll>
    );
});


