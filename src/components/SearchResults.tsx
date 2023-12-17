"use server";

import { getCategories, getProducts } from "@/actions";
import { UrlParams } from "@/app/page";
import { notFound } from "next/navigation";

export const SearchResults = async ({ searchParams, params }: UrlParams) => {
  const sortBy = searchParams?.sort;
  const categories = await getCategories();
  const categorySlug = params.category ?? "";
  const category = categories.find((c) => c.slug === categorySlug);
  const categoryId = category?.id;

  const products = await getProducts({ sortBy, categoryId });

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
