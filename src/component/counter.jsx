import { useEffect, useState } from "react";
import im1 from "../assets/sale.png";
import Pro from "../component/pro";
import axios from "axios";
const Counter = () => {
  const [users, setusers] = useState([]);

  const show = async () => {
    const users = (await axios.get("https://fakestoreapi.com/products")).data;
    setusers(users);

    // const deleteItem = (id) => {
    //   // Create a new array without the object to delete
    //   const updateusers = users.filter((item) => item.id !== id);

    //   // Update the state with the new array
    //   setusers(updateusers);
    // };
  };
  useEffect(() => {
    show();
  }, []);

  return (
    <div>
      {users.length > 0 ? (
        users.map((item) => (
          <div
            key={item.index}
            className="card text-white bg-primary mb-3"
            style={{ maxWidth: "20rem" }}
          >
            <div className="d-flex justify-content-around  ">
              <img className="w-50 border " src={im1} alt="" />
              <span className="badge bg-danger h-25 align-self-center">
                {item.rating.rate}
              </span>
            </div>
            <div className="card-header">{item.title}</div>
            <div className="card-body">
              <h4 className="card-title">{item.price}</h4>
              <p className="card-text">{item.description}</p>
            </div>
            <button className="btn btn-danger">Delete</button>
          </div>
        ))
      ) : (
        <h2 className="bg-info text-center">No Items</h2>
      )}

      <button className="btn btn-primary">
        showdata
      </button>

      <Pro data={users} />
    </div>
  );
};

export default Counter;
