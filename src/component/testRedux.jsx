import { useSelector, useDispatch } from "react-redux";
import { admin, increment, setuser } from "../redux/features/usersSlice";
import { useEffect, useRef } from "react";

const TestRed = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.usersRed.user);
  const username = useRef();
  useEffect(() => username.current.focus(), [data.username]);

  return (
    <div>
      <h2 className="bg-light p-4">Counter :{data.count}</h2>
      <h2 className="bg-light p-4">usernane :{data.username}</h2>
      <input ref={username} type="text" />

      <button
        onClick={() => dispatch(admin())}
        className="btn btn-lg btn-success px-5"
        type="button"
      >
        Log
      </button>
      <button
        onClick={() => data.loged && dispatch(increment())}
        className="btn btn-lg btn-primary px-5"
        type="button"
      >
        +
      </button>
      <button
        onClick={() =>
          dispatch(
            setuser({
              username: username.current.value,
              email: "hassan23@gmail.com",
              count: 33,
            })
          )
        }
        className="btn btn-lg btn-danger px-5"
        type="button"
      >
        chnage
      </button>
    </div>
  );
};

export default TestRed;
