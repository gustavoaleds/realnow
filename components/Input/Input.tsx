import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default function BasicTextFields() {
  return (
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '900px' },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField sx={{ backgroundColor: 'white', width: '50%' }} id="outlined-basic" label="Real Brasileiro (BRL)" variant="outlined" />
    </Box>
  );
}