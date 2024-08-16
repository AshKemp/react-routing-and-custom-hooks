import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { addNewProduct, fetchListOfProducts } from "./api";
import { useState } from "react";

function ReactQueryExample() {
  const [productTitle, setProductTitle] = useState("");
  const getQueryClient = useQueryClient();
  const { data: productList, isLoading } = useQuery({
    queryKey: ["product-list"],
    queryFn: () => fetchListOfProducts(),
  });

  const { mutateAsync: handleAddNewProductMutation } = useMutation({
    mutationFn: addNewProduct(productTitle),
    onSuccess: () => {
      getQueryClient.invalidateQueries(["product-list"]);
    },
  });

  async function handleAddNewProduct() {
    await handleAddNewProductMutation(productTitle);
    setProductTitle("");
  }

  if (isLoading) return <h1>Loading products....</h1>;

  return (
    <div>
      <h1>React Query Example</h1>
      <div>
        <input
          name="name"
          value={productTitle}
          onChange={(e) => setProductTitle(e.target.value)}
          placeholder="Enter product title"
        />
        <button
          disabled={productTitle.trim() === ""}
          type="button"
          onClick={handleAddNewProduct}
        >
          Add new product
        </button>
      </div>
      <ul>
        {productList?.length > 0 ? (
          productList.map((product) => (
            <li key={product.id}>{product.title}</li>
          ))
        ) : (
          <h3>No products found.</h3>
        )}
      </ul>
    </div>
  );
}

export default ReactQueryExample;
