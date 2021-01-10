import React from "react";
import { Card, CardBody, CardTitle, CardSubtitle } from "reactstrap";

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
        </Card>
      </div>
    </>
  );
};

export default List;
