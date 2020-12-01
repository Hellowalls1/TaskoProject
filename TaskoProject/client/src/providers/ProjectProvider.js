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

  const updateProject = (project) =>
    getToken().then((token) =>
      fetch(`${apiUrl}/${project.id}`, {
        method: "Put",
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(item),
      })
        .then(getProjectById(project.id))
        .then(getProjectsByUser)
    );

  const addProject = (project) =>
    getToken().then((token) =>
      fetch(apiUrl, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(project),
      })
        .then((resp) => {
          return resp.json();
        })
        .then(getProjectsByUser)
    );

  return (
    <ProjectContext.Provider
      value={{ projects, addProject, updateProject, getProjectsByUser }}
    >
      {props.children}
    </ProjectContext.Provider>
  );
};
