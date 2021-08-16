import React from 'react';
import {
    Collapse,
    Divider,
    Drawer,
    List
} from '@material-ui/core';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import IconButton from '@material-ui/core/IconButton';
import ListItem from '@material-ui/core/ListItem';
import AddIcon from '@material-ui/icons/Add';
import { FormField, FormFieldMenuItem } from "../../types";
import { formFieldsMenuItem } from '../../consts';
import useStyles from './AppDrawer.style'


export interface AppDrawerProps {
    isOpen: boolean
    setIsOpen: (isOpen: boolean) => void
    formFields: FormField[]
    setFormFields: (field: FormField[]) => void
}

export const AppDrawer = ({isOpen, setIsOpen, formFields, setFormFields}: AppDrawerProps) => {
    const classes = useStyles();
    const [subMenuOpen, setSubMenuOpen] = React.useState<boolean>(false);
    const [formFieldId, setFormFieldId] = React.useState<number>(0)


    const handleDrawerClose = () => {
        setIsOpen(false);
    };
    const handleMenuItemClick = () => {
        setSubMenuOpen(!subMenuOpen);
    };
    const onCreateNewFieldClick = (menuItem: FormFieldMenuItem) => {
        setFormFields([...formFields, {
            type: menuItem.type,
            name: `${menuItem.type}${formFieldId}`
        }])
        setFormFieldId(formFieldId + 1)
    }

  return (
      <Drawer
          className={classes.drawer}
          variant="persistent"
          anchor="left"
          open={isOpen}
          classes={{
            paper: classes.drawerPaper,
          }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawerClose}>
              <ChevronLeftIcon />
          </IconButton>
        </div>
        <Divider />
        <List>
          <ListItem button onClick={handleMenuItemClick}>
              <ListItemIcon>
                  <AddIcon />
              </ListItemIcon>
              <ListItemText primary={'Add form fields'} />
              {subMenuOpen ? <ExpandLess /> : <ExpandMore />}
          </ListItem>
          <Collapse in={subMenuOpen} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                  {
                      formFieldsMenuItem.map((item, i) => {
                          console.log(`${item.type} ${i}`)
                          return (
                              <ListItem
                                  key={item.type}
                                  button className={classes.nested}
                                  onClick={() => onCreateNewFieldClick(item)}
                              >
                                  <ListItemIcon>
                                      {item.icon}
                                  </ListItemIcon>
                                  <ListItemText primary={item.type} />
                              </ListItem>
                          )
                      })
                  }
              </List>
          </Collapse>
        </List>
      </Drawer>
  );
}
