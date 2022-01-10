import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function Users() {
  const [users, setUsers] = useState([]);
  function getUsers() {
    const url = 'https://swapi.py4e.com/api/people/';
    axios.get(url).then((res) => {
      let {
        data: { results = [] },
      } = res;
      setUsers(results);
    });
  }

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <>
      <h1>User List</h1>
      {users.map((user) => {
        return (
          <ul>
            <li>{user.height}</li>
            <li>{user.name}</li>
          </ul>
        );
      })}
    </>
  );
}
