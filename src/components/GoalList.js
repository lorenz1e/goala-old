import React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import Goal from "./Goal";

export default function GoalList({ goals, goal, setGoals, onDelete, onEdit }) {
  return goals.map((goal) => {
    return (
      <Goal
        goal={goal}
        key={goal.id}
        goals={goals}
        onDelete={onDelete}
        onEdit={onEdit}
      ></Goal>
    );
  });
}
