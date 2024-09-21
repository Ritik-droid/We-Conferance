import React from 'react';
import {
  Checkbox,
  Grid,
  TextField,
  FormControlLabel,
  Paper,
  Button
} from '@material-ui/core';
const SignUP= () => {
  const [checked, setChecked] = React.useState(true);

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };


  const handleLoginClick = (e) => {

    
  };

  return (
    <div style={{ padding: 30 }}>
      <Paper>
        <Grid
          container
          spacing={3}
          direction={'column'}
          justify={'center'}
          alignItems={'center'}
        >
            <Grid item xs={12}>
            <TextField label="Name"></TextField>
          </Grid>
          <Grid item xs={12}>
            <TextField label="Mobile No"></TextField>
          </Grid>
          <Grid item xs={12}>
            <TextField label="Username"></TextField>
          </Grid>
          <Grid item xs={12}>
            <TextField label="Password" type={'password'}></TextField>
          </Grid>
          <Grid item xs={12}>
            <FormControlLabel
              control={
                <Checkbox
                  checked={checked}
                  onChange={handleChange}
                  label={'Create Account'}
                  inputProps={{ 'aria-label': 'primary checkbox' }}
                />
              }
              label="Create Account"
            />
          </Grid>
          <Grid item xs={12}>
            <Button fullWidth   onClick={handleLoginClick}> Sign UP </Button>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
};

export default SignUP;
