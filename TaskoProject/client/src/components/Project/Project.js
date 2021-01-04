import React, { useState, useEffect, useContext, useRef } from "react";
import { Link } from "react-router-dom";
import {
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
  Modal,
  ModalBody,
} from "reactstrap";
import { ProjectContext } from "../../providers/ProjectProvider";

const Project = ({ project }) => {
  const { getProjectById } = useContext(ProjectContext);

  return (
    <>
      <div className="project-container">
        <Card className=" m-4">
          <CardBody>
            <CardTitle className="project-name">{project.name}</CardTitle>
            <CardSubtitle className="project-description"></CardSubtitle>
            <p className="project-dateCreated">
              Created On: {project.dateCreated}
            </p>
            <p className="project-dueDate">Due :{project.dueDate}</p>
          </CardBody>
          <div className="project-buttons">
            <Link
              to={`/getProjectById/${project.id}`}
              type="button"
              class="btn btn-primary"
              value="Project Details"
              size="sm"
            >
              View Project
            </Link>
          </div>
        </Card>
      </div>
    </>
  );
};

export default Project;
