import { deepmerge } from "@mui/utils";
import { defaultDarkTheme } from "react-admin";

export const darkTheme = deepmerge(defaultDarkTheme, {
  palette: {
      mode: 'dark',
      primary: { main: "#3280c0" },  
      secondary: { main: "#f48fb1" }, 
      background: {
          default: "#000", 
          paper: "#ffffff",   
      },
      text: {
          primary: "#000000", 
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
                  backgroundColor: "#fff",
                  color: "#000",
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