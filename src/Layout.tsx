import type { ReactNode } from "react";
import { Layout as RALayout, CheckForApplicationUpdate } from "react-admin";
import { MySidebar } from "./MySidebar";
import { EmptyAppBar } from "./EmptyAppBar";
import { Box } from "@mui/material";

export const Layout = ({ children }: { children: ReactNode }) => (
  
  <RALayout menu={MySidebar} appBar={EmptyAppBar} sx={{ "& .RaLayout-content": { paddingTop: 0 } }} >
     <Box sx={{ padding: "16px", 

     }}>
      
      {children && (
        <Box>
          {children}
        </Box>
      )}
      <CheckForApplicationUpdate />
    </Box>
  </RALayout>
);
