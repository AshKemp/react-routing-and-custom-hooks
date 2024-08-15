import { useMemo, useState } from "react";
import useFetch from "../../hooks/use-fetch";

function UseMemoExample() {
  const [flag, setFlag] = useState(false);
  const { data, loading } = useFetch("https://dummyjson.com/products");

  function filterProductByPrice(getProducts) {
    console.log("this function is getting rendered");
    return getProducts?.length > 0
      ? getProducts.filter((singleProduct) => singleProduct.price > 10)
      : [];
  }

  const memorizedVersion = useMemo(
    () => filterProductByPrice(data?.products),
    [data?.products]
  );

  if (loading) return <h1>Loading data! Please wait</h1>;
  console.log(data);
  return (
    <div>
      <h1 style={{ color: flag ? "red" : "black" }}>Use Memo</h1>
      <ul>
        {/* {filterProductByPrice(data?.products).map((item) => (
          <li key={item.id}>{item.title}</li>
        ))} */}
        {memorizedVersion.map((item) => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>
      <button onClick={() => setFlag(!flag)}>Toggle Flag</button>
    </div>
  );
}

export default UseMemoExample;
