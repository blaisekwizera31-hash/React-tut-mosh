
import { useEffect, useState } from "react";
import apiClients , {CanceledError}  from "./services/api-client"
import apiClient from "./services/api-client";

interface User {
  id: number;
  name: string;
  email: string;
}

const App = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [error, setError] = useState(""); // Fixed: Initialize as string to match error.message
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();

    setLoading(true);
    apiClient
      .get<User[]>("/users", {
        signal: controller.signal,
      })
      .then((res) => {
        setUsers(res.data);
        setLoading(false);
      })
      .catch((error) => {
        if (error instanceof CanceledError) return;
        setError(error.message);
        setLoading(false);
      });

    return () => controller.abort();
  }, []);

  const deleteUser = (user: User) => {
    const originalUsers = [...users];
    setUsers(users.filter((u) => u.id !== user.id));

 apiClient
      .delete("users/" + user.id)
      .catch((error) => {
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
      apiClient.patch("users/" + user.id , updatedUser )
  .catch((error) => {
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
