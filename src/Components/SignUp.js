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
      <Button onClick={handleClickOpen}>
        SignUp
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Sign Up</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Enter your name, email and password to get started with Feature Hunt!
          </DialogContentText>
          <TextField
            autoFocus
            onChange={handleNameChange}
            margin="dense"
            id="name"
            label="Name"
            value={fullname}
            fullWidth
            variant="standard"
          />
          <TextField
            onChange={handleEmailChange}
            margin="dense"
            id="name"
            label="Email Address"
            type="email"
            fullWidth
            variant="standard"
            value={email}
          />
          <TextField
            onChange={handlePasswordChange}
            margin="dense"
            id="password"
            label="Password"
            type="password"
            value={password}
            fullWidth
            variant="standard"
          />
        </DialogContent>
        {message !== "" && <Alert severity='error'>{message}</Alert>}
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleSubmit}>Sumbit</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
