import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import {ReactSession} from 'react-client-session';
import { useHistory } from 'react-router-dom';
import Service from '../Service';
import { Alert } from '@mui/material';

export default function Login({ setLoggedin }) {
  const [open, setOpen] = React.useState(false);
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [message, setMessage] = React.useState("");
  const history = useHistory();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  }

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  }

  const handleSubmit = () => {
    const form = new FormData();
    form.append("email", email);
    form.append("password", password);
    Service.post('login', form)
      .then(data => 
        {setMessage(data.message);
          console.log(data.code);
          if (data.code > 200) {
            console.log(message)
          } else {
            setLoggedin(true);
            ReactSession.set("username", email);
            history.push("/dashboard");
            handleClose();
          }
        });
  }

  React.useEffect(()=> {}, [message]);

  return (
    <div>
      <Button data-testid="login_button" onClick={handleClickOpen}>
        Login
      </Button>
      <Dialog data-testid="login_dialog" open={open} onClose={handleClose}>
        <DialogTitle data-testid="login_title">Login</DialogTitle>
        <DialogContent>
          <DialogContentText data-testid="login_text">
            Enter your email and password to view your projects
          </DialogContentText>
          <TextField
            autoFocus
            data-testid="login_email"
            onChange={handleEmailChange}
            margin="dense"
            id="name"
            label="Email Address"
            type="email"
            fullWidth
            variant="standard"
            inputProps={{ "data-testid": "login_inputEmail" }}
            value={email}
          />
          <TextField
            data-testid="login_password"  
            onChange={handlePasswordChange}
            margin="dense"
            id="password"
            label="Password"
            type="password"
            inputProps={{ "data-testid": "login_inputPassword" }}
            value={password}
            fullWidth
            variant="standard"
          />
        </DialogContent>
        {message !== "" && <Alert severity="error" data-testid="login_error">Error: {message}</Alert>}
        <DialogActions>
          <Button data-testid="login_cancel" onClick={handleClose}>Cancel</Button>
          <Button data-testid="login_submit" onClick={handleSubmit}>Submit</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
