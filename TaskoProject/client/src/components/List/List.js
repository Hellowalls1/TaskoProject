import React from "react";
import { Card, CardBody, CardTitle, CardSubtitle } from "reactstrap";
import { Link, useParams } from "react-router-dom";

//each individual list is going to have a path to view all of the tasks on said list on another page.
//could also make this some sort of render that populates on the same page when the button is clicked.
const List = ({ list }) => {
  const { id } = useParams();
  return (
    <>
      <div className="list-individual">
        <Card>
          <CardTitle>{list.name}</CardTitle>
          <CardSubtitle>{list.dueDate}</CardSubtitle>
          <CardBody>{list.description}</CardBody>
          <h1>THIS IS THE LIST ITEM</h1>
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
