import React, { useState, useContext } from "react";
import { UserProfileContext } from "../providers/UserProfileProvider";
import { ListProfileContext } from "../providers/ListProvider";

export const TaskContext = React.createContext();

export const TaskProvider = (props) => {
  const apiUrl = "api/task";

  const { getToken } = useContext(UserProfileContext);

  const getTasksByListId = (id) => {
    getToken().then((token) =>
      fetch(`${apiUrl}/gettasksbylistid`, {
        method: "Get",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }).then((res) => res.json())
    );
  };
};
