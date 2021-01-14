import React, { useContext, useEffect, useState, useParams } from "react";

import { UserProfileContext } from "../../providers/UserProfileProvider";
import { ProjectContext } from "../../providers/ProjectProvider";
import { ListContext } from "../../providers/ListProvider";
import List from "./List";

const ListList = ({ list }) => {
  const { getListsByProjectId } = useContext(ListContext);
  const { projectLists, setProjectLists };
  debugger;
  const { id } = useParams();



  useEffect(() => {
    getListsByProjectId(parseInt(id)).then(setProjectLists);
  }, []);

  debugger;
  return (
    <>
      <div className="lists-list">
        {projectLists.map((list) => (
          <List key={list.id} list={list} />
        ))}
      </div>
    </>
  );
};

export default ListList;
