import React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogTitle from "@mui/material/DialogTitle";
import { DialogContent } from "@mui/material";
import DialogContentText from "@mui/material/DialogContentText";
import TextField from "@mui/material/TextField";

export const EditGoal = ({
  open,
  handleClose,
  id,
  name,
  amount,
  amountDone,
  confirmedEdit
}) => {
  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle id="alert-dialog-title">Edit Goal: {name}</DialogTitle>

      <DialogContent>
        <TextField
          autoFocus
          margin="dense"
          id="name"
          label="Name"
          type="text"
          placeholder={name}
          fullWidth
          variant="standard"
          
          inputRef={null}
        />
        <TextField
          autoFocus
          margin="dense"
          id="name"
          label="Amount"
          type="number"
          fullWidth
          variant="standard"
          placeholder={amount}
          inputRef={null}
        />

        <DialogContentText>id: {id}</DialogContentText>
      </DialogContent>

      <DialogActions>
        <Button onClick={handleClose} autoFocus>
          Cancel
        </Button>
        <Button onClick={confirmedEdit}>Save</Button>
      </DialogActions>
    </Dialog>
  );
};
