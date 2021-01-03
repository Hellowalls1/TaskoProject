import React, { useContext, useEffect, useState, useRef } from "react";
import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { TeamContext } from "../../providers/TeamProvider";
import { UserContext } from "../../providers/UserProfileProvider";
import { ProjectContext } from "../../providers/ProjectProvider";
import { Button, Modal, ModalBody } from "reactstrap";
import Project from "./Project";

const ProjectList = ({ project }) => {
  const { getProjectsByUser, projects, addProject } = useContext(
    ProjectContext
  );

  const { getAllTeams, teams } = useContext(TeamContext);
  const [addProjectModal, setAddProjectModal] = useState(false);

  useEffect(() => {
    getProjectsByUser();
  }, []);

  useEffect(() => {
    getAllTeams();
  }, []);

  const toggleAddProject = () => {
    setAddProjectModal(!addProjectModal);
  };

  //state to handle form
  const [teamId, setTeamId] = useState();
  const [projectName, setProjectName] = useState();
  const [projectDescription, setProjectDescription] = useState();
  const [projectDueDate, setDueDate] = useState();

  const submitForm = () => {
    debugger;

    addProject({
      // userProfileId: parseInt(userProfile).id,
      teamId: parseInt(teamId),
      name: projectName,
      description: projectDescription,
      // dateCreated: new Date().toLocaleString,
      dueDate: projectDueDate.toLocaleString(),
    });
  };

  return (
    <>
      <div className="main">
        <div className="container">
          <div className="shadow p-3 mb-5  rounded w-25 mx-auto position-top addGearButton">
            <Button size="lg" block onClick={toggleAddProject}>
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

      <Modal isOpen={addProjectModal} toggle={toggleAddProject}>
        <ModalBody>
          <div className="form-group">
            <label htmlFor="team">Team:</label>
            <select
              onChange={(e) => setTeamId(e.target.value)}
              required
              autoFocus
              className="form-control mt-4"
            >
              <option key="0" value="0">
                Select a Team
              </option>
              {teams.map((t) => (
                <option value={t.id} key={t.id}>
                  {t.name}
                </option>
              ))}
            </select>
            <label htmlFor="name">Project Name:</label>
            <input
              type="text"
              id="name"
              onChange={(e) => setProjectName(e.target.value)}
              required
              autoFocus
              className="form-control mt-4"
            />
            <label htmlFor="description">Project Description:</label>
            <input
              type="text"
              id="description"
              onChange={(e) => setProjectDescription(e.target.value)}
              required
              autoFocus
              className="form-control mt-4"
            />

            <label htmlFor="dueDate">Due Date</label>
            <ReactDatePicker
              type="date"
              id="dueDate"
              // ref={datepickerRef}
              selected={projectDueDate}
              onChange={(date) => setDueDate(date)}
              required
              autoFocus
              className="form-control mt-4"
            />
            <div className="">
              <Button
                type="submit"
                size="sm"
                color="info"
                onClick={(evt) => {
                  evt.preventDefault(); //alerts for fields left null
                  if (teamId === "0") {
                    window.alert("You forgot a Team!");
                  } else if (!projectDescription) {
                    window.alert("You forgot a description!");
                  } else if (!projectDueDate) {
                    window.alert("You forgot a due date!");
                  } else {
                    submitForm(project);
                    toggleAddProject();
                  }
                }}
                className="btn mt-4"
              >
                Save
              </Button>
            </div>
          </div>
        </ModalBody>
      </Modal>
    </>
  );
};

export default ProjectList;
