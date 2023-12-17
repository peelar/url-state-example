"use client";

import { useSearchParamsState } from "./url-state";

export const SearchInput = () => {
  const [search] = useSearchParamsState("search");

  return (
    <input
      defaultValue={search ?? ""}
      name="search"
      placeholder="Search for products..."
      className="bg-white w-full"
      type="text"
    />
  );
};
