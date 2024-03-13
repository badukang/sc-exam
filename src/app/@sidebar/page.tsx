import * as React from "react";
import { Drawer, ListSubheader } from "@mui/material";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import { navItems } from "@/static/maps";
import NavigationItems from "@/common/NavigationItems";

const page = () => {
  return (
    <Drawer
      variant="permanent"
      anchor="left"
      ModalProps={{
        keepMounted: true,
      }}
      sx={{
        width: "300px",
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: "300px",
          boxSizing: "border-box",
        },
      }}
    >
      <List
        dense
        component="nav"
        subheader={
          <ListSubheader sx={{ textAlign: "center" }}>
            Coding Section
          </ListSubheader>
        }
      >
        <Divider />
        {navItems.map((item, key) => (
          <NavigationItems key={key} items={item} />
        ))}
      </List>
    </Drawer>
  );
};

export default page;
