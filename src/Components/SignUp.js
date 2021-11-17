import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Service from '../Service';
import { Alert } from '@mui/material';

//
//       Component: SignUp
//       Description: This component displays the signup registration form
//
//       Inputs:
//           - NA
//       Outputs:
//          - NA
export default function SignUp() {
  const [open, setOpen] = React.useState(false);
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [fullname, setFullname] = React.useState("");
  const [message, setMessage] = React.useState("");

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

  const handleNameChange = (e) => {
    setFullname(e.target.value);
  }

  const handleSubmit = () => {
    const form = new FormData();
    form.append("email", email);
    form.append("fullname", fullname);
    form.append("password", password);
    Service.post('signup', form)
      .then(data => 
        {setMessage(data.message);
          console.log(data.code);
          if (data.code > 200) {
            console.log(message)
          } else {
            handleClose();
          }
        }).catch(function(err){
          setMessage("There was a problem with your registration. Please try again later.")
      });
  }

  React.useEffect(()=> {}, [message]);

  return (
    <div>
      <Button 
      data-testid="signup_button"
      onClick={handleClickOpen}>
        SignUp
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle data-testid="signup_dialog_title">Sign Up</DialogTitle>
        <DialogContent>
          <DialogContentText data-testid="signup_dialog_text">
            Enter your name, email and password to get started with Feature Hunt!
          </DialogContentText>
          <TextField
            autoFocus
            data-testid="signup_name"
            onChange={handleNameChange}
            margin="dense"
            id="name"
            label="Name"
            inputProps={{ "data-testid": "signup_inputName" }}
            value={fullname}
            fullWidth
            variant="standard"
          />
          <TextField
            data-testid="signup_email"
            onChange={handleEmailChange}
            margin="dense"
            id="name"
            label="Email Address"
            type="email"
            fullWidth
            variant="standard"
            inputProps={{ "data-testid": "signup_inputEmail" }}
            value={email}
          />
          <TextField
            data-testid="signup_password"
            onChange={handlePasswordChange}
            margin="dense"
            id="password"
            label="Password"
            type="password"
            value={password}
            inputProps={{ "data-testid": "signup_inputPassword" }}
            fullWidth
            variant="standard"
          />
        </DialogContent>
        {message !== "" && <Alert severity='error' data-testid="signup_error">{message}</Alert>}
        <DialogActions>
          <Button data-testid="signup_cancel" onClick={handleClose}>Cancel</Button>
          <Button data-testid="signup_submit" onClick={handleSubmit}>Submit</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
