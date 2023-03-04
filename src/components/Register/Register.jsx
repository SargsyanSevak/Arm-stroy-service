import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { useSignup } from "../../hooks/useSignup";
import "./register.css";
import {
  Alert,
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
} from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

export default function Register() {

  const [fullName, setFullName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [showPassword, setShowPassword] = React.useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const { signup, error,isSignedUp,open,setOpen } = useSignup();
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  const handleClickOpen = () => {
    setOpen(true);
    setFullName('')
    setEmail('')
    setPassword('')
  };

  const handleClose = () => {
    setOpen(false);
  };

 const handleSubmit = async (e) => {
    e.preventDefault();

    await signup(fullName, email, password);
  };

  return (
    <div className="login">
      <Button
        variant="text"
        onClick={() => {
          handleClickOpen();
        }}
      >
        РЕГИСТРАЦИЯ
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        style={{ zIndex: 50000 }}
        className="loginContainer"
      >
        <DialogTitle className="loginTitle">РЕГИСТРАЦИЯ</DialogTitle>
        <DialogContent>
          <TextField
            required
            autoFocus
            margin="dense"
            id="fullName"
            label="Имя/Фамиля"
            type="text"
            fullWidth
            autoComplete="off"
            variant="outlined"
            onChange={(e) => setFullName(e.target.value)}
            value={fullName}
          />
          <TextField
            required
            autoFocus
            margin="dense"
            id="email"
            label="Эл. адрес"
            type="email"
            fullWidth
            autoComplete="off"
            variant="outlined"
            onChange={(e) => setEmail(e.target.value.toLocaleLowerCase())}
            value={email}
          />
          <FormControl
            required
            variant="outlined"
            fullWidth
            style={{ marginTop: "10px" }}
          >
            <InputLabel htmlFor="outlined-adornment-password">
              Пароль
            </InputLabel>
            <OutlinedInput
              id="outlined-adornment-Repassword"
              type={showPassword ? "text" : "password"}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
              label="Пароль"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />
          </FormControl>
        </DialogContent>
        <DialogActions className="loginBtn">
          {error && (
            <div className="error">
              <Alert severity="error">{error}</Alert>
            </div>
          )}
          {
            isSignedUp && (
              <div className="error">
              <Alert severity="success">{isSignedUp}</Alert>
            </div>
            )
          }
          <Button
            onClick={handleSubmit}
            variant="contained"
            color="success"
            className="loginBtn"
          >
            Pегистрация
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
