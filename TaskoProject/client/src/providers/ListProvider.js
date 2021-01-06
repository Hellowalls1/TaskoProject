import React, { useState, useContext } from "react";
import { userProfileContext } from "../providers/UserProfileProvider";

export const ListProvider = (props) => {
  const { getToken } = useContext(userProfileContext);
  const apiUrl = "/api/list";

  const getListsByProjectId = (projectId) => {
    return getToken().then((token) => {
      fetch(`${apiUrl}/getListsByProjectId`, {
        method: "Get",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
        .then((resp) => resp.json())
        .then(setProjects);
    });
  };
};
