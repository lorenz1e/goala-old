import React from "react";
import Button from "@mui/material/Button";

export default function AddGoalButton(clicked, setOpen) {
    

  return <Button onClick={() => setOpen(true)} variant="contained">ADD GOALS</Button>;
}
