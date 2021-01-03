import React, { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { ProjectContext } from "../../providers/ProjectProvider";
import { Card, CardBody } from "reactstrap";
const ProjectDetails = () => {
  const { getProjectById } = useContext(ProjectContext);

  const [theProject, setProject] = useState({});

  useEffect(() => {
    getProjectById(parseInt(id)).then(setProject);
  });

  const { id } = useParams();
  debugger;
  return (
    <>
      <Card>
        <CardBody>
          <div className="project-detail">
            <p className="project-detail-name">{theProject.name}</p>
            <p className="project-detail-dueDate">{theProject.dueDate}</p>
          </div>
        </CardBody>
      </Card>
    </>
  );
  console.log(`${theProject.name}`);
};
export default ProjectDetails;
