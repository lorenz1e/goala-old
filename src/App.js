import React, { useState, useRef } from "react";
import GoalList from "./components/GoalList";
import AddGoal from "./components/AddGoal";
import AddFAB from "./components/AddFAB";
import { useEffect } from "react";
import { DeleteGoal } from "./components/DeleteGoal";

const LOCAL_STORAGE_KEY = "GOALA.goals";

//setGoals(goals.filter((goal) => goal.id !== id))

//if (storedGoals > null) localStorage.setItem(storedGoals)
function App() {
  const [openAddModal, setOpenAddModal] = useState(false);
  const [openDeleteModal, setOpenDeleteModal] = useState(false);

  const [goals, setGoals] = useState(
    JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)) || []
  );

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(goals));
  }, [goals]);

  const openModalDelete = (id) => {
    console.log(id);
  };
  return (
    <main>
      <AddFAB isOpen={openAddModal} setIsOpen={setOpenAddModal}></AddFAB>

      <AddGoal
        open={openAddModal}
        handleClose={() => setOpenAddModal(false)}
        setGoals={setGoals}
        goals={goals}
      ></AddGoal>

      <GoalList goals={goals} onDelete={openModalDelete}></GoalList>
      <DeleteGoal
        open={openDeleteModal}
        handleClose={() => setOpenDeleteModal(false)}
      ></DeleteGoal>
    </main>
  );
}

export default App;
