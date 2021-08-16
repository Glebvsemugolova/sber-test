import React from 'react';
import clsx from 'clsx';
import {
    AppBar,
    Toolbar,
    Typography,
} from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import useStyles from './AppMainBar.style';

export interface AppMainBarProps {
    isOpen: boolean
    setIsOpen: (isOpen: boolean) => void
}

export const AppMainBar = ({isOpen, setIsOpen}: AppMainBarProps) => {
    const classes = useStyles();

    const handleAppDrawerOpen = () => {
        setIsOpen(true);
    };

  return (
    <AppBar
      position="fixed"
      className={clsx(classes.appBar, {
        [classes.appBarShift]: isOpen,
      })}
    >
        <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={handleAppDrawerOpen}
              edge="start"
              className={clsx(classes.menuButton, isOpen && classes.hide)}
            >
                <MenuIcon />
            </IconButton>
            <Typography variant="h6" noWrap>
                Dynamic form
            </Typography>
        </Toolbar>
    </AppBar>
  );
}
