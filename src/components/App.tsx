import React from 'react';
import clsx from 'clsx';
import { CssBaseline } from '@material-ui/core';
import { DynamicForm } from './DynamicForm/DynamicForm';
import { AppMainBar } from './AppMainBar/AppMainBar';
import { AppDrawer } from './AppDrawer/AppDrawer';
import { FormField } from '../types';
import useStyles from './App.style';


const App = () => {
    const classes = useStyles();
    const [menuOpen, setMenuOpen] = React.useState<boolean>(false);
    const [formFields, setFormFields] = React.useState<FormField[]>([]);

  return (
    <>
        <CssBaseline />
        <AppMainBar
            isOpen={menuOpen}
            setIsOpen={setMenuOpen}
        />
        <AppDrawer
            isOpen={menuOpen}
            setIsOpen={setMenuOpen}
            formFields={formFields}
            setFormFields={setFormFields}
        />
        <main
          className={clsx(classes.content, {
            [classes.contentShift]: menuOpen,
          })}
        >
          <DynamicForm formFields={formFields}/>
        </main>
    </>
  );
}

export default App;
