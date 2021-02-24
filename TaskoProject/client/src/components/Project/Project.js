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

//has link going to new view to see the project

const Project = ({ project }) => {
  return (
    <>
      <div className="project-container">
        <Card className="project-card">
          <CardBody>
            <CardTitle className="project-name">{project.name}</CardTitle>
            <CardSubtitle className="project-description"></CardSubtitle>
            <p className="project-dateCreated">
              Created On: {project.dateCreated}
            </p>
            <p className="project-team">{project.team.name}</p>
            <p className="project-dueDate">Due :{project.dueDate}</p>
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
          </CardBody>
        </Card>
      </div>
    </>
  );
};

export default Project;
