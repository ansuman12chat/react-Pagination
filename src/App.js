import React, { useState, useEffect } from "react";
import User from "./components/users";
import axios from "axios";
import Pagination from "./components/Pagination";
import "./App.css";
import { USER_PER_PAGE } from "./components/constants";

function App() {
  const [users, setUser] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  useEffect(() => {
    const fetchUsers = async () => {
      setLoading(true);
      const res = await axios.get("https://reqres.in/api/users?page=2");
      setLoading(false);
      setUser(res.data.data);

      setTotalPages(Math.ceil(res.data.data.length / USER_PER_PAGE));
    };
    fetchUsers();
  }, []);

  const handleClick = (num) => {
    setPage(num);
  };

  return (
    <div className="container mt-5">
      <h1 className="text-dark mb-3">REACT PAGINATION</h1>
      <p className="text-dark mb-3"> Page{page}</p>
      {loading ? (
        <p> Loading...</p>
      ) : (
        <>
          <User users={users} page={page} />
          <Pagination totalPages={totalPages} handleClick={handleClick} />
        </>
      )}
    </div>
  );
}

export default App;
