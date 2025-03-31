import { defaultLightTheme } from "react-admin";
import { deepmerge } from "@mui/utils";

export const lightTheme = deepmerge(defaultLightTheme, {
    palette: {
        mode: 'light',
        primary: {
            main: "#3280c0" 
        },  
        secondary: {
            main: "#f48fb1" 
        }, 
        background: {
            default: "#000", 
            paper: "#ffffff",   
        },
        text: {
            primary: "#000000", 
        }
    },

    components: {    
       MuiInputBase: {
            styleOverrides: {
                root: {
                    color: "#000000",
                },
                input: {
                    color: "#000000", 
                }
            }
          },
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
                    backgroundColor: "#fff",
                    color: "#000000",
                },
                input: {
                    colors:"#000",
                    "&::placeholder": {
                        color: "#bbbbbb",
                        opacity: 1, 
                    },
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
                    color: "#000000", 
                },
            },
        },   
    },
});
