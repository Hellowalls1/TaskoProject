import React, { useState, useContext } from "react";
import { UserProfileContext } from "../providers/UserProfileProvider";
import { ListProfileContext } from "../providers/ListProvider";
import { ProjectContext } from "./ProjectProvider";

export const TaskContext = React.createContext();

export const TaskProvider = (props) => {
  const apiUrl = "/api/task";
  //const [tasks, setTasks] = useState([]);

  const { getToken } = useContext(UserProfileContext);

  const getTasksByListId = (id) => {
    return getToken().then((token) =>
      fetch(`${apiUrl}/gettasksbylistid/${id}`, {
        method: "Get",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }).then((res) => res.json())
    );
  };

  return (
    <TaskContext.Provider value={{ getTasksByListId }}>
      {props.children}
    </TaskContext.Provider>
  );
};
