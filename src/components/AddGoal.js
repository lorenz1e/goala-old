import React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import { createRef } from "react";
import { v4 as uuidv4 } from "uuid";

export default function AddGoal({ open, handleClose, setGoals, goals, LOCAL_STORAGE_KEY }) {
  const inputName = createRef();
  const inputAmount = createRef();

  const handleAddGoal = () => {
    const name = inputName.current.value;
    const amount = inputAmount.current.value;

    
    if (!name) {
      alert("FILL IN THE FORM");
      return;
    }
    if (!amount) {
      alert("FILL IN THE FORM:");
      return;
    }

    setGoals((prevGoals) => {
      return [
        ...prevGoals,
        { id: uuidv4(), name: name, amount: amount, amountDone: "0" },
      ];
    });
    
    handleClose();
  };

  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>Add a new Goal</DialogTitle>
      <DialogContent>
        <IconButton
          aria-label="close"
          onClick={handleClose}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
        <TextField
          autoFocus
          margin="dense"
          id="name"
          label="Goal Name"
          type="text"
          fullWidth
          variant="standard"
          inputRef={inputName}
        />
        <TextField
          autoFocus
          margin="dense"
          id="name"
          label="Amount"
          type="number"
          fullWidth
          variant="standard"
          inputRef={inputAmount}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleAddGoal}>Save</Button>
      </DialogActions>
    </Dialog>
  );
}
