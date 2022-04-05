import React from 'react';
import TextField from '@mui/material/TextField';

const Input = ({ onChange, placeholder, type }) => (
  <TextField
    margin="normal"
    required
    id="outlined-basic"
    variant="outlined"
    type={type}
    autoFocus
    fullWidth
    onChange={onChange}
    placeholder={placeholder}
  />
);

export default Input;
