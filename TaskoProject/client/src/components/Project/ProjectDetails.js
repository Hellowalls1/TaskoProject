import React, { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { ProjectContext } from "../../providers/ProjectProvider";
import { Card, CardBody, Button } from "reactstrap";

export const ProjectDetails = () => {
  const { getProjectById } = useContext(ProjectContext);

  const [theProject, setProject] = useState({});
  
  const { id } = useParams();

  useEffect(() => {
    getProjectById(parseInt(id)).then(setProject);
    
  });

  
  return (
    <>
      <div>
        <Button>YO</Button>
        <Card>
          <CardBody>
            <div className="project-detail">
              <p className="project-detail-name">{theProject.name}</p>
              <p className="project-detail-dueDate">{theProject.dueDate}</p>
              <p>what</p>
            </div>
          </CardBody>
        </Card>
      </div>
    </>
  );
};
