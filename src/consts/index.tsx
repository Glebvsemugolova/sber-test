import { FormFieldMenuItem } from '../types';
import TextFieldsIcon from '@material-ui/icons/TextFields';
import TextRotationNoneIcon from '@material-ui/icons/TextRotationNone';
import DateRangeIcon from '@material-ui/icons/DateRange';

export const drawerWidth = 240;

export const formFieldsMenuItem: FormFieldMenuItem[] = [
    {
        type: 'Text Field',
        icon: <TextFieldsIcon />
    },
    {
        type: 'Text Area',
        icon: <TextRotationNoneIcon />
    },
    {
        type: 'Date / Time',
        icon: <DateRangeIcon/>
    }
]