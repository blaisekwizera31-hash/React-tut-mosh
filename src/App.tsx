import axios, { CanceledError } from "axios";
import { useEffect, useState } from "react";

interface User {
  id: number;
  name: string;
  email: string;
}
const App = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [error, setError] = useState([]);
  useEffect(() => {
    const controller = new AbortController();

    axios
      .get<User[]>("https://jsonplaceholder.typicode.com/users ", {
        signal: controller.signal,
      })
      .then((res) => setUsers(res.data))
      .catch((error) => {
        if (error instanceof CanceledError) return;
        setError(error.message);
      });
    document.title = "first react app";

    return () => controller.abort();
  }, []);
  return (
    <>
      <p className="text-danger">{error}</p>
      <div>
        <ul>
          {users.map((user) => (
            <li key={user.id}>{user.name}</li>
          ))}
          {users.map((user) => (
            <li key={user.id}>{user.email}</li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default App;
