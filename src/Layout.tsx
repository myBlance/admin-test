import type { ReactNode } from "react";
import { Layout as RALayout, CheckForApplicationUpdate } from "react-admin";
import { MySidebar } from "./sidebar/MySidebar";
import { EmptyAppBar } from "./appbar/EmptyAppBar";
import { Box } from "@mui/material";

export const Layout = ({ children }: { children: ReactNode }) => (
  
  <RALayout menu={MySidebar} appBar={EmptyAppBar} sx={{ "& .RaLayout-content": { paddingTop: 0 } }}   >
        <Box sx={{ 
            pt:"16px",
            pr:"16px",
            pb:"16px",
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
