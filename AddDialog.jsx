import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import InputAdornment from '@material-ui/core/InputAdornment';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff';
import EmailIcon from '@material-ui/icons/Email';



const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 2,
    paddingTop: 0,
  },
  grid: {
    '& > *': {
      padding: 20,
    },
  },
  margin: {
    paddingTop: 0,
  },
  button: {
    '& > *': {
      margin: theme.spacing(1),
    },
    marginLeft: 370
  },
  contenttext: {
    marginLeft: 20
  }

}));



export default function FormDialog() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  isTouched = ()=> {
    console.log("hii");
  }

  return (
    <div className={classes.root}>
      <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        Open form dialog
      </Button>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">

        <DialogTitle id="form-dialog-title">Add Trainee</DialogTitle>
        <DialogContentText className={classes.contenttext}>Enter your trainee details</DialogContentText>
        <Grid container spacing={3}>
          <Grid className={classes.grid} item xs={12}>
            <DialogContent className={classes.root}>
              <TextField
                className={classes.margin}
                id="input-with-icon-textfield"
                label="TextField"
                variant="outlined"
                autoFocus
                margin="dense"
                type="email"
                fullWidth
                onClick={this.isTouched}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <AccountCircleIcon />
                    </InputAdornment>
                  ),
                }}
              />
            </DialogContent>
          </Grid>

          <Grid className={classes.grid} item xs={12}>
            <DialogContent className={classes.root}>
              <TextField
                className={classes.margin}
                id="input-with-icon-textfield"
                label="Email"
                variant="outlined"
                autoFocus
                margin="dense"
                type="email"
                fullWidth
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <EmailIcon />
                    </InputAdornment>
                  ),
                }}
              />
            </DialogContent>
          </Grid>

          <Grid className={classes.grid} item xs={6}>
            <DialogContent className={classes.root}>
              <TextField
                className={classes.margin}
                id="input-with-icon-textfield"
                label="Password"
                variant="outlined"
                autoFocus
                margin="dense"
                type="password"
                fullWidth
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <VisibilityOffIcon />
                    </InputAdornment>
                  ),
                }}
              />
            </DialogContent>
          </Grid>

          <Grid className={classes.grid} item xs={6}>
            <DialogContent className={classes.root}>
              <TextField
                className={classes.margin}
                id="input-with-icon-textfield"
                label="Confirm Password"
                variant="outlined"
                autoFocus
                margin="dense"
                type="password"
                fullWidth
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <VisibilityOffIcon />
                    </InputAdornment>
                  ),
                }}
              />
            </DialogContent>
          </Grid>

          <div className={classes.button}>
            <Button variant="contained">Cancel</Button>
            <Button variant="contained">Submit</Button>
          </div>

        </Grid>

      </Dialog>
    </div>
  );
}