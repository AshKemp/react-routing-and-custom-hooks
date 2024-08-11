import { useLocation } from "react-router-dom";
import useFetch from "../../hooks/use-fetch";

function ReceipeList() {
  const location = useLocation();
  console.log(location);

  const resultFromCustomUseFetchHook = useFetch(
    "https://dummyjson.com/recipes"
  );
  const { loading, data, error } = resultFromCustomUseFetchHook;
  if (loading) return <h1>Fetching receipes!! Please wait</h1>;
  return (
    <div>
      <h1>Receipe List Page</h1>
      <ul>
        {data?.recipes?.length > 0
          ? data?.recipes.map((recipeItem) => (
              <div>
                <img src={recipeItem?.image} />
                <label>{recipeItem?.name}</label>
              </div>
            ))
          : null}
      </ul>
    </div>
  );
}

export default ReceipeList;
