import React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import { useRef} from "react";
import { v4 as uuidv4 } from "uuid";

export default function AddGoal({ open, handleClose, setGoals, goals, }) {
  const inputName = useRef();
  const inputAmount = useRef();

  const handleAddGoal = () => {
    
    const name = inputName.current.value;
    const amount = inputAmount.current.value;

    setGoals((prevGoals) => {
      return [
        ...prevGoals,
        { id: uuidv4(), name: name, amount: amount, amountDone: "0"}
      ];
    });
  };

  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>Create a new Goal</DialogTitle>
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
        <input placeholder="Goal Name" type="text" ref={inputName}></input>
        <input placeholder="Amount" type="number" ref={inputAmount}></input>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleAddGoal}>Save</Button>
      </DialogActions>
    </Dialog>
  );
}
