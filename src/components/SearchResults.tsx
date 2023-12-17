"use server";

import { getCategories, getProducts } from "@/actions";
import { UrlParams } from "@/app/page";

export const SearchResultsLoading = () => (
  <p className="text-stone-800/50">Searching...</p>
);

export const SearchResults = async ({ searchParams, params }: UrlParams) => {
  const sortBy = searchParams?.sort;
  const search = searchParams?.search;
  const categories = await getCategories();
  const categorySlug = params.category ?? "";
  const category = categories.find((c) => c.slug === categorySlug);
  const categoryId = category?.id;

  const products = await getProducts({ sortBy, categoryId, search });

  return (
    <div>
      <ul>
        {products.map((product) => (
          <li key={product.id}>{product.name}</li>
        ))}
      </ul>
      {!products.length && (
        <p className="text-stone-800/50">No products found</p>
      )}
    </div>
  );
};
