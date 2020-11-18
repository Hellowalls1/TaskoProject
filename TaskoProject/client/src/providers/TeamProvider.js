import React, { useState, useContext } from "react";
import { UserProfileContext } from "../providers/UserProfileProvider";

export const TeamContext = React.createContext();

export const TeamProvider = (props) => {
  //url for team controller
  const apiUrl = "/api/team";
  //setting all teams

  const [teams, setTeams] = useState([]);

  //importing getToken function for current logged in users id
  const { getToken } = useContext(UserProfileContext);

  const getAllTeams = () => {
    return getToken().then((token) =>
      fetch(apiUrl, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
        .then((resp) => resp.json())
        .then(setTeams)
    );
  };

  return (
    <TeamContext.Provider value={{ teams, getAllTeams }}>
      {props.children}
    </TeamContext.Provider>
  );
};
