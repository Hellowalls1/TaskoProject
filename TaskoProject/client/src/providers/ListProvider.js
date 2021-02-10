import React, { useState, useContext } from "react";
import { UserProfileContext } from "../providers/UserProfileProvider";

export const ListContext = React.createContext();
//potentially an issue with ids

export const ListProvider = (props) => {
  const apiUrl = "/api/list";
  const [lists, setLists] = useState([]);
  const { getToken } = useContext(UserProfileContext);
debugger;
  const getListsByProjectId = (id) => {
    return getToken().then((token) =>
      fetch(`${apiUrl}/getlistsbyprojectid/${id}`, {
        method: "Get",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
        .then((resp) => resp.json())
        .then(setLists)
    );
  };
debugger;
  return (
    <ListContext.Provider value={{ lists, getListsByProjectId }}>
      {props.children}
    </ListContext.Provider>
  );
};
