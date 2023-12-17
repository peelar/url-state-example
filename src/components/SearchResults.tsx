"use server";

import { getCategories, getProducts } from "@/actions";
import { UrlParams } from "@/app/page";
import Image from "next/image";

export const SearchResultsLoading = () => (
  <p className="text-stone-800/50">Searching...</p>
);

type Product = Awaited<ReturnType<typeof getProducts>>[0];

const Product = ({ thumbnail, pricing, name }: Product) => {
  const image = thumbnail;
  const price = pricing?.priceRange?.start?.gross;
  const priceText = price ? `${price.amount} ${price.currency}` : "19.99 USD";

  return (
    <div className="cursor-pointer bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow">
      <Image
        width={256}
        height={256}
        src={image?.url ?? "/product-placeholder.png"}
        alt={image?.alt ?? "Product Image"}
        className="w-full h-40 object-cover rounded-md"
      />
      <h3 className="text-lg font-semibold mt-2">{name}</h3>
      <div className="flex items-center mt-4">
        <span className="text-gray-700">{priceText}</span>
      </div>
    </div>
  );
};

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
      <ul className="grid grid-cols-3 gap-4">
        {products.map((product) => (
          <li key={product.id}>
            <Product {...product} />
          </li>
        ))}
      </ul>
      {!products.length && (
        <p className="text-stone-800/50">No products found</p>
      )}
    </div>
  );
};
