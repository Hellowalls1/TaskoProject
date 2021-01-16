import React from "react";
import { Link } from "react-router-dom";
import { Card, CardBody, CardTitle, CardSubtitle } from "reactstrap";

const Task = ({ task, theTasks }) => {
  return (
    <>
      <div className="task-container">
        <Card className="task-card">
          <CardTitle className="task-title">{theTasks.name}</CardTitle>
          <CardBody className="task-body">
            <p className="task-person">Assigned: {task.userProfile.name}</p>
            <p className="task-description">{task.description}</p>
            <p className="task-dueDate">{task.dueDate}</p>
            <p className="task-dateCreated">{task.dateCreated}</p>
          </CardBody>
        </Card>
      </div>
    </>
  );
};

export default Task;
