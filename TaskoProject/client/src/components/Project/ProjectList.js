import React, { useContext, useEffect, UseState } from "react";
import { ProjectContext } from "../../providers/ProjectProvider";
import { Button } from "reactstrap";
import Project from "./Project";

const ProjectList = ({ project }) => {
  const { getProjectsByUser, projects } = useContext(ProjectContext);

  useEffect(() => {
    getProjectsByUser();
  }, []);

  return (
    <>
      <div className="main">
        <div className="container">
          <div className="shadow p-3 mb-5  rounded w-25 mx-auto position-top addGearButton">
            <Button size="lg" block>
              Add Project
            </Button>
          </div>
          <div className="row justify-content-center">
            <div className="cards-column">
              {projects.map((project) => (
                <Project key={project.id} project={project} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectList;
