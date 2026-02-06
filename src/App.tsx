import axios from "axios";
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
    axios
      .get<User[]>("https://jsonplaceholder.typicode.com/users ")
      .then(res=> setUsers(res.data))
      .catch(error => setError(error.message));
    document.title = "first react app";
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
