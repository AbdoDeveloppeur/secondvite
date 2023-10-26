import Canva from "./component/Canva";
import Login from "./component/Login";
import Posts from "./component/Posts";
import Profile from "./component/Profile";
import Counter from "./component/counter";
import Pro from "./component/pro";
import TestRed from "./component/testRedux";
import Refuse from "./component/useRefo";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/user" element={<TestRed />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/canva" element={<Canva />} />

          <Route path="/posts" element={<Posts />} />
          <Route path="/ref" element={<Refuse />} />
          <Route path="/login" element={<Login />} />
          <Route path="/counter" element={<Counter />} />
          <Route path="/props" element={<Pro />} />

        </Routes>
      </Router>
    </>
  );
}

export default App;
