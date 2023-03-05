import React, { useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import LoginIcon from "@mui/icons-material/Login";
import { useLogin } from "../../hooks/useLogin";
import "./login.css";
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
import Register from "../Register/Register";
export default function Login() {
  const [showPassword, setShowPassword] = React.useState(false);
  const [open, setOpen] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login, error } = useLogin();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await login(email, password);
  };
  return (
    <div className="login">
      <Button
        variant="text"
        color="primary"
        fullWidth
        onClick={handleClickOpen}
      >
        Войти
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        style={{ zIndex: 50000 }}
        className="loginContainer"
      >
        <DialogTitle className="loginTitle">Войти</DialogTitle>
        <DialogContent>
          <TextField
            required
            margin="dense"
            id="name"
            label="Эл. адрес"
            type="email"
            fullWidth
            autoComplete="off"
            variant="outlined"
            onChange={(e) => setEmail(e.target.value.toLowerCase())}
            value={email}
          />
          <FormControl
            variant="outlined"
            fullWidth
            style={{ marginTop: "10px" }}
          >
            <InputLabel htmlFor="outlined-adornment-password">
              Пароль
            </InputLabel>
            <OutlinedInput
              id="outlined-adornment-password"
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

          <Button
            variant="contained"
            color="success"
            className="loginBtn"
            onClick={handleSubmit}
          >
            Войти
          </Button>
          <div className="isHave">
            <span>У вас нет аккаунта?</span> <Register />
          </div>
        </DialogActions>
      </Dialog>
    </div>
  );
}
