import React, { useContext, useEffect, useState } from "react";
import Task from "./Task";
import { TaskContext } from "../../providers/TaskProvider";
import { useParams } from "react-router-dom";

const TaskList = ({ task }) => {
  const { getTasksByListId, tasks } = useContext(TaskContext);
  const { theTasks, setTheTasks } = useState({});
  const { id } = useParams();
  debugger;
  useEffect(() => {
    getTasksByListId(parseInt(id)).then(setTheTasks);
  }, []);
  debugger;
  return (
    <>
      <div className="tasks-list">
        {theTasks.map((task) => (
          <Task key={task.id} task={task} />
        ))}
      </div>
    </>
  );
};
export default TaskList;
