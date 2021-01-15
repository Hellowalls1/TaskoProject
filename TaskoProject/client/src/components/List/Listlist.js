import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { UserProfileContext } from "../../providers/UserProfileProvider";
import { ProjectContext } from "../../providers/ProjectProvider";
import { ListContext } from "../../providers/ListProvider";
import List from "./List";

const ListList = ({ list }) => {
  const { getListsByProjectId, lists } = useContext(ListContext);
  const { projectLists, setProjectLists } = useState([]);

  const { id } = useParams();

  useEffect(() => {
    getListsByProjectId(parseInt(id));
  }, []);

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
