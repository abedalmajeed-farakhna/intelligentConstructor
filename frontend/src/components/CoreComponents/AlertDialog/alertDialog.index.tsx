import { Button, Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions } from "@mui/material";
import React from "react";
import { IAlertDialogProps } from "./alertDialog.type";

const AlertDialog: React.FC<IAlertDialogProps> = ({  title,message,onHandleClose, onClick }) => {


    const handleClose = () => {
        onHandleClose();
    };
    const handleConfirm = () => {
        onClick();
        onHandleClose();
    };
  return (
    <Dialog
    open={true}
    onClose={handleClose}
    aria-labelledby="alert-dialog-title"
    aria-describedby="alert-dialog-description"
  >
    <DialogTitle id="alert-dialog-title">
      {title}
    </DialogTitle>
    <DialogContent>
      <DialogContentText id="alert-dialog-description">
        {message}
      </DialogContentText>
    </DialogContent>
    <DialogActions>
      <Button onClick={handleClose}>No</Button>
      <Button onClick={handleConfirm} autoFocus>
        Yes
      </Button>
    </DialogActions>
  </Dialog>
  );
};
export default AlertDialog;