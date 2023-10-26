import { useReducer } from "react";

const Info = () => {
  const reducer = (state, action) => {
    switch (action.type) {
      case "INCREMENT":
        return state + 1;
      case "DECREMENT":
        return state - 1;
      default:
        return state;
    }
  };
  
  const count = 0;
  const [state, dispatch] = useReducer(reducer, count);
  return (
    <>
      <div>
        <p>Count: {state}</p>
        <button onClick={() => dispatch({ type: "INCREMENT" })}>
          Increment
        </button>
        <button onClick={() => dispatch({ type: "DECREMENT" })}>
          Decrement
        </button>
      </div>{" "}
    </>
  );
};

export default Info;
