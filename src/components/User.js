import React from "react";
import { ListGroup } from "react-bootstrap";

const User = ({ user }) => {
  return (
    <div className="container dark">
      <ListGroup>
        <p></p>
        <ListGroup.Item variant="danger">{`Full Name : ${user.first_name} ${user.last_name}`}</ListGroup.Item>
        <ListGroup.Item variant="info">{`Email : ${user.email}`}</ListGroup.Item>
        <ListGroup.Item variant="dark">{`Avatar : ${user.avatar}`}</ListGroup.Item>
        <p></p>
      </ListGroup>
    </div>
  );
};

export default User;
