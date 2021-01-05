import React, { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { ProjectContext } from "../../providers/ProjectProvider";
import { Card, CardBody, Button } from "reactstrap";
import { TeamContext } from "../../providers/TeamProvider";

export const ProjectDetails = ({ project }) => {
  const { getProjectById } = useContext(ProjectContext);
  const { teams, getAllTeams } = useContext(TeamContext);
  const [theProject, setProject] = useState({});

  const { id } = useParams();

  useEffect(() => {
    getProjectById(parseInt(id)).then(setProject);
  });

  useEffect(() => {
    getAllTeams();
  }, []);

  return (
    <>
      <header className="project-detail">
        <p className="project-detail-name">{theProject.name}</p>
        <p className="project-detail-dueDate">{theProject.dueDate}</p>
        <p className="project-detail-teamName">{theProject.team?.name}</p>
      </header>
    </>
  );
};
