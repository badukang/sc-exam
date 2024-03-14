import {
  Checkbox,
  IconButton,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

const TodoItem = ({ item, handleDelete, handleChange }: any) => {
  return (
    <ListItem
      secondaryAction={
        <IconButton onClick={() => handleDelete(item?.id)} edge="end">
          <DeleteIcon />
        </IconButton>
      }
      disablePadding
    >
      <ListItemButton role={undefined} onClick={() => handleChange(item?.id)} dense>
        <ListItemIcon>
          <Checkbox
            edge="start"
            checked={item?.active}
            tabIndex={-1}
            disableRipple
          />
        </ListItemIcon>
        <ListItemText primary={item?.title} />
      </ListItemButton>
    </ListItem>
  );
};

export default TodoItem;
