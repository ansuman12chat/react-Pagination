import React from "react";
import User from "./User";
import { USER_PER_PAGE } from "./constants";

const users = ({ users, page }) => {
  const startIndex = (page - 1) * USER_PER_PAGE;
  const selectedUser = users.slice(startIndex, startIndex + USER_PER_PAGE);
  return selectedUser.map((user) => <User user={user} key={user.id} />);
};

export default users;
