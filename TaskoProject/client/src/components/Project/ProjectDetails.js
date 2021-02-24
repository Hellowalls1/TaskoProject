import React, { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { ProjectContext } from "../../providers/ProjectProvider";
import { Card, CardBody, Button } from "reactstrap";
import { TeamContext } from "../../providers/TeamProvider";
//import { ListContext } from "../../providers/ListProvider";
import ListList from "../List/Listlist";

export const ProjectDetails = ({ project, list }) => {
  const { getProjectById } = useContext(ProjectContext);
  const { teams, getAllTeams } = useContext(TeamContext);
  //const { getListsByProjectId, lists } = useContext(ListContext);
  const [theProject, setProject] = useState({});
  //const [lists, setLists] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    getProjectById(parseInt(id)).then(setProject);
  }, []);

  useEffect(() => {
    getAllTeams();
  }, []);

  //bring in the list of list components
  //will display the list of lists that will have tasks to view
  //will also be displaying project details seperately
  //would be cool to have a notepad on the side
  return (
    <>
      <main className="project-detail-view-main">
        <header className="project-detail-header">
          <p className="project-detail-name">{theProject.name}</p>
          <p className="project-detail-dueDate">{theProject.dueDate}</p>
          <p className="project-detail-dueDate">{theProject.description}</p>
          <p className="project-detail-teamName">{theProject.team?.name}</p>
        </header>
        <aside>
          <div className="project-details-list">
            <ListList list={list} />
          </div>
        </aside>
      </main>
    </>
  );
};
