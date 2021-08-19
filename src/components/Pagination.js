import React from "react";
import { Button } from "react-bootstrap";

const Pagination = ({ totalPages, handleClick }) => {
  const pages = [...Array(totalPages).keys()].map((num) => num + 1);
  return (
    <div>
      {pages.map((num) => (
        <Button className="dark" key={num} onClick={() => handleClick(num)}>
          {num}
        </Button>
      ))}
    </div>
  );
};

export default Pagination;
