import { useEffect } from "react";
import { useState } from "react";

const Posts = () => {
  const [users, setuser] = useState([
    { id: 1, name: "abdelaziz", contrat: "reselier" },
    { id: 2, name: "hhassan", contrat: "en cours" },
  ]);
  const bad =
    users.contrat === "reselier" ? "badge bg-success" : "badge bg-danger";

  const del = (id) => {
    console.log(id);
  };

  return (
    <div>
      <h2 className="text-center p-5">list users</h2>
      <table>
        <thead>
          <tr>
            <th>id</th>
            <th>username</th>
            <th>status</th>
          </tr>
        </thead>
        <tbody>
          {users.map((item, index) => (
            <tr key={index}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>
                <span className={bad}>{item.contrat}</span>
              </td>
              <td>
                <button
                  onClick={() => del(item.id)}
                  className="btn btn-lg btn-secondary p-2"
                  type="button"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Posts;
