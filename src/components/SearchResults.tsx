"use server";

import { getProducts } from "@/actions";

export const SearchResults = async () => {
  const products = await getProducts();
  return (
    <div>
      <ul>
        {products.map((product) => (
          <li key={product.id}>{product.name}</li>
        ))}
      </ul>
    </div>
  );
};
