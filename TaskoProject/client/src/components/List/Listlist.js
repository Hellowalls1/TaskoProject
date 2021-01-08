import React, { useContext, useEffect, useState } from "react";

import { UserProfileContext } from "../../providers/UserProfileProvider";
import { ProjectContext } from "../../providers/ProjectProvider";
import { ListContext } from "../../providers/ListProvider";
import List from "./List";

const ListList = ({ list }) => {
  const { getListsByProjectId, lists } = useContext(ListContext);

  useEffect(() => {
    getListsByProjectId();
  }, []);
  debugger;
  return (
    <>
      <div className="lists-list">
        {lists.map((list) => (
          <List key={list.id} list={list} />
        ))}
      </div>
    </>
  );
};

export default ListList;
