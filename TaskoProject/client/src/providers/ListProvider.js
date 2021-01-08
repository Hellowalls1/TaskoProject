import React, { useState, useContext } from "react";
import { UserProfileContext } from "../providers/UserProfileProvider";

export const ListContext = React.createContext();

export const ListProvider = (props) => {
  const { getToken } = useContext(UserProfileContext);
  const [lists, setLists] = useState([]);
  const apiUrl = "/api/list";

  const getListsByProjectId = (projectId) => {
    return getToken().then((token) =>
      fetch(`${apiUrl}/getListsByProjectId/${projectId}`, {
        method: "Get",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
        .then((resp) => resp.json())
        .then(setLists)
    );
  };

  return (
    <ListContext.Provider value={{ lists, getListsByProjectId }}>
      {props.children}
    </ListContext.Provider>
  );
};
