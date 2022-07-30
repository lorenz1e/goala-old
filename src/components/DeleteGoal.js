import React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import DialogContentText from "@mui/material/DialogContentText";
import Goal from "./Goal";
import { useState } from "react";

export const DeleteGoal = (open, handleClose) => {

  return (
    <Dialog open={open} onClose>
      <DialogTitle id="alert-dialog-title">{"Delete the Goal"}</DialogTitle>

      <DialogActions>
        <Button onClick={handleClose} autoFocus>
          Cancel
        </Button>
        <Button onClick={handleClose}>Delete</Button>
      </DialogActions>
    </Dialog>
  );
};
