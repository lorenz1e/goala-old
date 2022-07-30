import React from "react";
import App from "../App";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import { useState } from "react";

export default function Goal({ goal, goals, setGoals, onDelete }) {

  function handleRemoveClicked(){
   
  }

  return (
    <div>
      <main>
        <List>
          <ListItem>
            <ListItemText
              primary={goal.name}
              secondary={goal.amountDone + " / " + goal.amount}
            ></ListItemText>

            <IconButton edge="end" aria-label="delete" onClick={()=>onDelete(goal.id)}>
              <DeleteIcon />
            </IconButton>
          </ListItem>
        </List>
        <Divider />
      </main>
    </div>
  );
}
