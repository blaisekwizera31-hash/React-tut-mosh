import { useEffect, useState } from "react";
import apiClient, { CanceledError } from "./services/api-client";
import userService, { type User } from "./services/user-service";
import useUsers from "./hooks/useUsers";

const App = () => {
 const{users, error, isLoading, setError, setUsers}  =useUsers();
  const deleteUser = (user: User) => {
    const originalUsers = [...users];
    setUsers(users.filter((u) => u.id !== user.id));

    apiClient.delete("users/" + user.id).catch((error) => {
      setError(error.message);
      setUsers(originalUsers);
    });
  };

  const addUser = () => {
    const newUser = { id: 0, name: "Mosh", email: "mosh@gmail.com" };
    const originalUsers = [...users];
    setUsers([newUser, ...users]);

    apiClient
      .post("users", newUser)
      .then((res) => setUsers([res.data, ...originalUsers]))
      .catch((error) => {
        setError(error.message);
        setUsers(originalUsers);
      });
  };

  const updateUser = (user: User) => {
    const originalUsers = [...users];
    const updatedUser = { ...user, name: user.name + "!" + " " + " ✅" };
    setUsers(users.map((u) => (u.id === user.id ? updatedUser : u)));
    apiClient.patch("users/" + user.id, updatedUser).catch((error) => {
      setError(error.message);
      setUsers(originalUsers);
    });
  };

  return (
    <>
      {error && <p className="text-danger">{error}</p>}

      {isLoading && <div className="spinner-border"></div>}

      <button className="btn btn-primary mb-3" onClick={addUser}>
        Add data
      </button>

      <div>
        <ul className="list-group">
          {users.map((user) => (
            <li
              key={user.id}
              className="list-group-item d-flex justify-content-between"
            >
              {user.name}
              <div>
                <button
                  className="btn btn-outline-secondary mx-1"
                  onClick={() => updateUser(user)}
                >
                  Update
                </button>
                <button
                  className="btn btn-outline-danger"
                  onClick={() => deleteUser(user)}
                >
                  Delete
                </button>
              </div>
            </li>
          ))}
          {users.map((user) => (
            <li
              key={user.id + user.email}
              className="list-group-item d-flex justify-content-between"
            >
              {user.email}
              <button
                className="btn btn-outline-danger"
                onClick={() => deleteUser(user)}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default App;
