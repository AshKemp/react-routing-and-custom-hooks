import { useLocation } from "react-router-dom";
import useFetch from "../../hooks/use-fetch";

function ReceipeList() {
  const location = useLocation();
  console.log(location);

  const resultFromCustomUseFetchHook = useFetch(
    "https://dummyjson.com/recipes"
  );
  console.log(resultFromCustomUseFetchHook);
  return (
    <div>
      <h1>Receipe List Page</h1>
    </div>
  );
}

export default ReceipeList;
