"use client";
import {
  Collapse,
  Divider,
  Icon,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  ListSubheader,
  SvgIcon,
} from "@mui/material";
import { useState } from "react";
import {
  ExpandMore,
  ExpandLess,
  Inventory as InventoryIcon,
} from "@mui/icons-material";
import _ from "lodash";
import { useRouter } from "next/navigation";

//todo type
const NavigationItems = ({ items }: any) => {
  const router = useRouter();
  const [open, setOpen] = useState(items?.active);
  const { icon, title, url, subItem } = items;

  const handleClick = () => {
    if (url) router.push(url, { scroll: false });
    setOpen(!open);
  };

  const handleSubItemClick = (url: string) => {
    router.push(url, { scroll: false });
  };

  return (
    <>
      <ListItemButton onClick={handleClick}>
        <ListItemText primary={title} />

        {!_.isEmpty(subItem) && (open ? <ExpandLess /> : <ExpandMore />)}
      </ListItemButton>
      {!_.isEmpty(subItem) && (
        <Collapse in={open} timeout="auto" unmountOnExit>
          <List dense component="nav">
            {subItem?.map((item: any, key: number) => (
              <ListItem key={key} disablePadding>
                <ListItemButton
                  sx={{ pl: 4 }}
                  onClick={() => handleSubItemClick(item?.url)}
                >
                  <ListItemText primary={item.title} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Collapse>
      )}
    </>
  );
};

export default NavigationItems;
