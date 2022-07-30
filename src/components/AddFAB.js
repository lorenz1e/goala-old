import React from "react";
import Fab from "@mui/material/Fab";
import AddIcon from '@mui/icons-material/Add';

export default function AddFAB({ open, setOpen }) {

  const fabStyle = {
    position: "fixed",
    bottom: 15,
    right: 15
  };

  return (
    <Fab color="primary" onClick={() => setOpen(true)} style={fabStyle}>
      <AddIcon></AddIcon>
    </Fab>
  );
}
