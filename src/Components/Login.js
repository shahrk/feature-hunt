import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import {ReactSession} from 'react-client-session';

export default function Login({ setLoggedin }) {
  const [open, setOpen] = React.useState(false);
  const [email, setEmail] = React.useState("");

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleTextChange = (e) => {
    setEmail(e.target.value);
  }

  const handleSubmit = () => {
    setLoggedin(true);
    ReactSession.set("username", email);
    handleClose();
  }

  return (
    <div>
      <Button onClick={handleClickOpen}>
        Login
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Login</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Enter your email and password to view your projects
          </DialogContentText>
          <TextField
            autoFocus
            onChange={handleTextChange}
            margin="dense"
            id="name"
            label="Email Address"
            type="email"
            fullWidth
            variant="standard"
            value={email}
          />
          <TextField
            margin="dense"
            id="password"
            label="Passowrd"
            type="password"
            fullWidth
            variant="standard"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleSubmit}>Sumbit</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
