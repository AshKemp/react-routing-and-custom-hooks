import { Link, Route, Routes, useNavigate } from "react-router-dom";
import CommentsList from "./pages/comments";
import ReceipeList from "./pages/receipes";

function App() {
  const navigate = useNavigate();
  return (
    <>
      <h1>React routing and custom hooks</h1>
      <div>
        <Link to={"/receipe-list"}>
          Alternative way of navigating to receipt list page
        </Link>
      </div>
      <button
        onClick={() => navigate("/receipe-list")}
        style={{ background: "black", color: "white" }}
      >
        Navigate to receipt list page
      </button>
      <button
        onClick={() => navigate("/comments-list")}
        style={{ background: "black", color: "white" }}
      >
        Navigate to comments list page
      </button>
      <Routes>
        <Route path="/receipe-list" element={<ReceipeList />} />
        <Route path="/comments-list" element={<CommentsList />} />
      </Routes>
    </>
  );
}

export default App;
