import { useLocation } from "react-router-dom";
import useFetch from "../../hooks/use-fetch";
import useWindowResize from "../../hooks/use-window-resize";

function ReceipeList() {
  const location = useLocation();
  console.log(location);

  const resultFromCustomUseFetchHook = useFetch(
    "https://dummyjson.com/recipes"
  );
  const { loading, data, error } = resultFromCustomUseFetchHook;
  const windowsSize = useWindowResize();
  if (loading) return <h1>Fetching receipes!! Please wait</h1>;
  return (
    <div>
      <h1 style={{ color: windowsSize?.width < 760 ? "red" : "black" }}>
        Receipe List Page
      </h1>
      <h3>
        Current window width is: {windowsSize.width} and the window height:{" "}
        {windowsSize.height}{" "}
      </h3>
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
