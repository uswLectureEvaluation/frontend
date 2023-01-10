import { TextField } from '@material-ui/core';
import * as styles from '@mui/material/styles';

export const CssTextField = styles.styled(TextField)({
  '& label.Mui-focused': {
    color: '#336af8',
  },
  '& .MuiInput-underline:after': {
    borderBottomColor: '#336af8',
  },
  '& .MuiInput-underline:before': {
    borderBottomColor: '#336af8',
  },
});
