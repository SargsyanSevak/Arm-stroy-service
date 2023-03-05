import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { useWorkoutsContext } from "../../hooks/useWorkoutsContext";
import { useAuthContext } from "../../hooks/useAuthContext";
import Alert from "@mui/material/Alert";
import Stack from "@mui/material/Stack";
import { instance } from "../../axios";

export default function AddFeed() {
  const { dispatch } = useWorkoutsContext();
  const { user } = useAuthContext();
  const [title, setTitle] = React.useState("");
  const [load, setLoad] = React.useState("");
  const [error, setError] = React.useState(null);
  const [emptyFields, setEmptyFields] = React.useState([]);
  const [open, setOpen] = React.useState(false);
  const [showAlert, setShowAlert] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!user) {
      setError("You must be logged in");
      return;
    }

    instance
    .post("/api/workouts", { title, load },{Authorization: `Bearer ${user.token}`})
    .then((res) => {
      if (res.status == 400) {
        setError(res.error);
        setEmptyFields(res.emptyFields);
      } else {
        setTitle("");
        setLoad("");
        setError(null);
        setEmptyFields([]);
        dispatch({ type: "CREATE_WORKOUT", payload: res.data });
        setShowAlert(!showAlert);
        setTimeout(() => {
          setShowAlert(false);
          setOpen(false);
        }, 1800);
        setShowAlert(!showAlert);
      }
    });
  };

  return (
    <>
      <div style={{ width: "200px" }}>
        <Button
          fullWidth
          variant="text"
          onClick={handleClickOpen}
          // startIcon={<BorderColorIcon />}
        >
          Добавить отзыв
        </Button>
        <Dialog open={open} onClose={handleClose} style={{ zIndex: 50000 }}>
          <DialogTitle>Добавить отзыв с помощью формы:</DialogTitle>
          <DialogContent noValidate>
            <TextField
              required
              margin="dense"
              id="name"
              type="text"
              fullWidth
              autoComplete="off"
              variant="filled"
              label="Контактное лицо"
              onChange={(e) => setLoad(e.target.value)}
              value={load}
            />
            <TextField
              noValidate
              multiline
              margin="dense"
              id="name"
              label="Отзыв"
              type="text"
              fullWidth
              autoComplete="off"
              variant="outlined"
              required
              onChange={(e) => setTitle(e.target.value)}
              value={title}
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>ОТМЕНА</Button>
            <Button variant="contained" onClick={handleSubmit}>
              Добавить
            </Button>
            {error && <div className="error">{error}</div>}
            <Stack className="showAlert" display={showAlert ? "block" : "none"}>
              <Alert variant="filled" severity="success">
                Ваш отзыв был успешно добавлен{" "}
              </Alert>
            </Stack>
          </DialogActions>
        </Dialog>
      </div>
    </>
  );
}
