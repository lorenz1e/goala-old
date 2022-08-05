import React from "react";
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
