import React from "react";
import { Card, CardBody, CardTitle, CardSubtitle } from "reactstrap";
import { Link } from "react-router-dom";

//need to create a representation of a lis
//need to create a list of lists
//need to put the components into ProjectDetails to display in the ui

const List = ({ list }) => {
  return (
    <>
      <div className="list-individual">
        <Card>
          <CardTitle>{list.name}</CardTitle>
          <CardSubtitle>{list.dueDate}</CardSubtitle>
          <CardBody>{list.description}</CardBody>
          <h1>THIS IS THE LIST OF LISTS</h1>
          <div className="list-item-button">
            <Link
              to={`/getTasksByListId/${list.id}`}
              type="button"
              class="btn btn-primary"
              value="View Tasks"
              size="sm"
            >
              View Tasks
            </Link>
          </div>
        </Card>
      </div>
    </>
  );
};

export default List;
