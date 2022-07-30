import React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogTitle from "@mui/material/DialogTitle";
import { DialogContent } from "@mui/material";
import DialogContentText from "@mui/material/DialogContentText";

export const EditGoal = ({
  open,
  handleClose,
  
  
}) => {

  return (
    <Dialog open={open} onClose>
      <DialogTitle id="alert-dialog-title">Delete Goal: {name}</DialogTitle>

      <DialogContent>
        <DialogContentText>id: {id}</DialogContentText>
      </DialogContent>

      <DialogActions>
        <Button onClick={DeleteAll}>*</Button>
        <Button onClick={handleClose} autoFocus>
          Cancel
        </Button>

        <Button onClick={confirmedDelete}>Delete</Button>
      </DialogActions>
    </Dialog>
  );
};
