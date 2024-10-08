import { Link, useNavigate, useRoutes } from "react-router-dom";
import CommentsList from "./pages/comments";
import ReceipeList from "./pages/receipes";
import ReceipeDetails from "./pages/receipe-details";
import NotFound from "./pages/not-found";
import Layout from "./pages/components/layout";
import ReactHookFormExamplePage from "./pages/react-hook-form-example";
import Hooks from "./pages/hooks";
import UseMemoExample from "./pages/use-memo-example";
import UseCallBackExample from "./pages/use-callback-example";
import ReactQueryExample from "./pages/react-query";

function CustomRoutes() {
  const element = useRoutes([
    {
      path: "/home",
      element: <Layout />,
      children: [
        {
          path: "receipe-list",
          element: <ReceipeList />,
        },
        {
          path: "comments-list",
          element: <CommentsList />,
        },
        {
          path: "receipe-list/:id",
          element: <ReceipeDetails />,
        },
      ],
    },
    {
      path: "*",
      element: <NotFound />,
    },
    {
      path: "/react-hook-form",
      element: <ReactHookFormExamplePage />,
    },
    {
      path: "/hooks",
      element: <Hooks />,
    },
    {
      path: "/memo",
      element: <UseMemoExample />,
    },
    {
      path: "/callback",
      element: <UseCallBackExample />,
    },
    {
      path: "/react-query",
      element: <ReactQueryExample />,
    },
  ]);
  return element;
}
function App() {
  const navigate = useNavigate();
  return (
    <div>
      {/* <h1>React routing and custom hooks</h1> */}
      {/* <div>
        <Link to={"/home/receipe-list"}>
          Alternative way of navigating to receipt list page
        </Link>
      </div>
      <button
        onClick={() => navigate("/home/receipe-list")}
        style={{ background: "black", color: "white" }}
      >
        Navigate to receipt list page
      </button>
      <button
        onClick={() => navigate("/home/comments-list")}
        style={{ background: "black", color: "white" }}
      >
        Navigate to comments list page
      </button> */}
      {/* <Routes>
        <Route path="/home" element={<Layout />}>
          <Route path="receipe-list" element={<ReceipeList />} />
          <Route path="comments-list" element={<CommentsList />} />
          <Route path="receipe-list/:id" element={<ReceipeDetails />} />
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>
       */}
      <CustomRoutes />
    </div>
  );
}

export default App;
