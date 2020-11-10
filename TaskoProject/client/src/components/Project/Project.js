import React, { useState, useEffect, useContext, useRef } from "react";
import {
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
  Modal,
  ModalBody,
} from "reactstrap";

const Project = ({ project }) => {
  return (
    <>
      <div className="project-container">
        <Card className=" m-4">
          <CardBody>
            <CardTitle className="project-name">{project.name}</CardTitle>
            <CardSubtitle className="project-description">
              <p className="project-description-text">{project.description}</p>
            </CardSubtitle>
            <p className="project-dateCreated">
              Created On: {project.dateCreated}
            </p>
            <p className="project-dueDate">Due :{project.dueDate}</p>
          </CardBody>
          <div className="project-buttons">
            <Button className="project-edit-button" size="lg">
              Edit
            </Button>
            <Button className="project-delete-button" size="lg">
              Delete
            </Button>
          </div>
        </Card>
      </div>
    </>
  );
};

export default Project;
