import { deepmerge } from "@mui/utils";
import { defaultDarkTheme } from "react-admin";

export const darkTheme = deepmerge(defaultDarkTheme, {
    palette: {
        mode: 'dark',
        primary: { 
            main: "#3280c0" 
        },  
        secondary: { 
            main: "#f48fb1" 
        }, 
        background: {
            default: "#000000", 
            paper: "#ffffff",   
        },
        text: {
            primary: "#ffffff", 
        }
    },

    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    textTransform: "none",
                    borderRadius: "8px",
                },
            },
        },
        MuiPaper: {
            styleOverrides: {
                root: {
                    backgroundColor: "#000000",
                    color: "#ffffff",
                },
            },
        },
        MuiAppBar: {
            styleOverrides: {
                root: {
                    backgroundColor: "#000",
                },
            },
        },
        MuiTableCell: {
            styleOverrides: {
                root: {
                    color: "#000000", 
                },
                head: {
                    color: "#000000", 
                    fontWeight: "bold",
                },
            },
        },
        MuiTablePagination: {
            styleOverrides: {
                root: {
                    color: "#000000",
                    fontWeight: "bold",
                },
                selectIcon: {
                    color: "#ffffff", 
                },
            },
        },
    
    },
});