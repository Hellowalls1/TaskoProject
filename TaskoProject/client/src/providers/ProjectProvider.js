import React, { useState, useContext } from "react";
import { UserProfileContext } from "../providers/UserProfileProvider";

//
export const ProjectContext = React.createContext();

export const ProjectProvider = (props) => {
  //url for project controller
  const apiUrl = "/api/project";
  const [projects, setProjects] = useState([]);

  //importing getToken function for current logged in users id
  const { getToken } = useContext(UserProfileContext);

  const getAllProjects = () => {
    return getToken().then((token) =>
      fetcu(apiUrl, {
        method: "Get",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
        .then((resp) => resp.json())
        .then(setProjects)
    );
  };

  return (
    <ProjectContext.Provider value={{ projects, getAllProjects }}>
      {props.children}
    </ProjectContext.Provider>
  );
};
