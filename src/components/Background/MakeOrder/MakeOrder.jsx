import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { useForm } from "react-hook-form";
import BorderColorIcon from "@mui/icons-material/BorderColor";
import { Alert } from "@mui/material";

export default function MakeOrder() {
  const ref = useRef();
  const [open, setOpen] = React.useState(false);
  const [sent, setSent] = React.useState(false);
  const [err, setErr] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const { register, handleSubmit, reset } = useForm({
    mode: "onChange",
  });
  const onSubmit = async (data) => {
    if (
      data.name !== "" &&
      data.email !== "" &&
      data.tell !== "" &&
      data.message !== ""
    ) {
      await emailjs
        .sendForm(
          "service_fqwb7mh",
          "template_xcihneq",
          ref.current,
          "7juDdm_vDM8bVfl97"
        )
        .then(
          () => {
            reset();
            setErr(false);
            setSent(true);

            setTimeout(() => {
              setOpen(false);
              setSent(false);
            }, 3000);
          },
          (error) => {
            console.log(error.text);
          }
        );
    } else {
      setErr(true);
    }
  };

  return (
    <div className="orderBtn animate__fadeInUp">
      <Button
        variant="contained"
        onClick={handleClickOpen}
        endIcon={<BorderColorIcon />}
      >
        Сделать заказ
      </Button>
      <Dialog open={open} onClose={handleClose} style={{ zIndex: 50000 }}>
        <DialogTitle>Отправить заявку с помощью формы:</DialogTitle>
        {err && (
          <div className="error">
            <Alert severity="warning">Все поля должны быть заполнены</Alert>
          </div>
        )}
        {sent && (
          <div className="error">
            <Alert severity="success">
              Ваше сообщение было успешно отправлено
            </Alert>
          </div>
        )}
        <DialogContent noValidate>
          <form ref={ref} encType="multipart/form-data" method="post">
            <TextField
              required
              margin="dense"
              id="name"
              label="Kонтактное лицо"
              type="email"
              fullWidth
              autoComplete="off"
              variant="standard"
              {...register("name")}
            />
            <TextField
              margin="dense"
              id="name"
              label="Телефон"
              type="number"
              fullWidth
              autoComplete="off"
              variant="standard"
              required
              {...register("tell")}
            />
            <TextField
              margin="dense"
              id="name"
              label="Email Address"
              type="email"
              fullWidth
              autoComplete="off"
              variant="standard"
              required
              {...register("email")}
            />
            <TextField
              multiline
              noValidate
              margin="dense"
              id="name"
              label="Сообщения"
              type="text"
              fullWidth
              autoComplete="off"
              variant="outlined"
              required
              {...register("message")}
            />
          </form>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>ОТМЕНА</Button>
          <Button onClick={handleSubmit(onSubmit)} variant="contained">
            отправить
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
