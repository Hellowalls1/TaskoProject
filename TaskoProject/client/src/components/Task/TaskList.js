import React, { useContext, useEffect, useState } from "react";
import Task from "./Task";
import { TaskContext } from "../../providers/TaskProvider";
import { useParams } from "react-router-dom";

const TaskList = ({ task }) => {
  const { getTasksByListId, tasks } = useContext(TaskContext);
  const { theTasks, setTasks } = useState([]);
  const { id } = useParams();
  debugger;
  useEffect(() => {
    getTasksByListId(parseInt(id)).then(setTasks);
  }, []);
  debugger;
  return (
    <>
      <div className="tasks-list">
        {tasks.map((task) => (
          <Task key={task.id} task={task} theTasks={theTasks} />
        ))}
      </div>
    </>
  );
};

export default TaskList;
