import React, { useState, useContext } from "react";
import { UserProfileContext } from "../providers/UserProfileProvider";

export const ProjectContext = React.createContext();

export const ProjectProvider = (props) => {
  //url for project controller
  const apiUrl = "/api/project";
  const [projects, setProjects] = useState([]);

  //importing getToken function for current logged in users id
  const { getToken } = useContext(UserProfileContext);

  const getProjectsByUser = () => {
    return getToken().then((token) =>
      fetch(`${apiUrl}/getbycurrentuser`, {
        method: "Get",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
        .then((resp) => resp.json())
        .then(setProjects)
    );
  };
  debugger;
  return (
    <ProjectContext.Provider value={{ projects, getProjectsByUser }}>
      {props.children}
    </ProjectContext.Provider>
  );
};
