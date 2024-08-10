import { useLocation } from "react-router-dom";

function ReceipeList() {
  const location = useLocation();
  console.log(location);
  return (
    <div>
      <h1>Receipe List Page</h1>
    </div>
  );
}

export default ReceipeList;
