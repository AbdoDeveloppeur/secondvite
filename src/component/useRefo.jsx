import { useEffect, useState } from "react";

const useRefo = () => {
  const [slice, setslice] = useState(null);

  const arr = ["admin", "noadmin"];

  useEffect(() => {
    setTimeout(() => {
      setslice(<h2>hhhh</h2>);
    }, 3000);
    arr.forEach((item) => {
      console.log(item);
    });
  }, []);

  return (
    <div>
      <h2>{slice}</h2>
      <button
        className="btn btn-primary"
        onClick={() => setslice(<h2>good by</h2>)}
      >
        change
      </button>
    </div>
  );
};

export default useRefo;
