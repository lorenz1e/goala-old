import React, { useState, useRef } from "react";
import GoalList from "./components/GoalList";
import AddGoal from "./components/AddGoal";
import AddFAB from "./components/AddFAB";
import { useEffect } from "react";
import { DeleteGoal } from "./components/DeleteGoal";
import { EditGoal } from "./components/EditGoal";
const LOCAL_STORAGE_KEY = "GOALA.goals";

function App() {
  //  USESTATE STRINGS

  const [openAddModal, setOpenAddModal] = useState(false);
  const [openDeleteModal, setOpenDeleteModal] = useState(false);
  const [openEditModal, setOpenEditModal] = useState(false);
  const [goals, setGoals] = useState(
    JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)) || []
  );

  //  LOCAL STORAGE

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(goals));
  }, [goals]);

  //  DELETE A GOAL

  const idDelete = useRef();
  const idDeleteName = useRef();

  const onDelete = (id, name) => {
    setOpenDeleteModal(true);
    idDelete.current = id;
    idDeleteName.current = name;
  };

  const confirmedDelete = () => {
    setGoals(goals.filter((goal) => goal.id !== idDelete.current));
    setOpenDeleteModal(false);
    console.log("removed goal:", idDelete.current);
  };

  const DeleteAll = () => {
    setOpenDeleteModal(false);
    setGoals([]);
    console.log("removed goal:", "*");
  };

  //  EDIT A GOAL

  const currentId = useRef();
  const currentName = useRef();
  const currentAmount = useRef();
  const currentAmountDone = useRef();

  const onEdit = (goal) => {
    setOpenEditModal(true);

    currentId.current = goal.id;
    currentName.current = goal.name;
    currentAmount.current = goal.amount;
    currentAmountDone.current = goal.amountDone;

  };

  const confirmedEdit = () => {
    const currentIndex = setGoals(goals.map((goals) => goals.id == {currentId}))
    
  };

  // UI
  return (
    <main>
      <AddFAB
        isOpen={openAddModal}
        setIsOpen={setOpenAddModal}
        setOpen={setOpenAddModal}
      ></AddFAB>

      <AddGoal
        open={openAddModal}
        handleClose={() => setOpenAddModal(false)}
        setGoals={setGoals}
        goals={goals}
      ></AddGoal>
      <GoalList goals={goals} onDelete={onDelete} onEdit={onEdit}></GoalList>
      <DeleteGoal
        open={openDeleteModal}
        handleClose={() => setOpenDeleteModal(false)}
        confirmedDelete={confirmedDelete}
        id={idDelete.current}
        name={idDeleteName.current}
        DeleteAll={DeleteAll}
      ></DeleteGoal>
      <EditGoal
        open={openEditModal}
        handleClose={() => setOpenEditModal(false)}
        id={currentId.current}
        name={currentName.current}
        amount={currentAmount.current}
        amountDone={currentAmountDone.current}
        confirmedEdit={confirmedEdit}
      ></EditGoal>
    </main>
  );
}

export default App;
