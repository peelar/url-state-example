"use server";

import { getCategories } from "@/actions";
import { CategoryLinks } from "./CategoryLinks";

export type Category = Awaited<ReturnType<typeof getCategories>>[number];

export const CategoryFilters = async () => {
  const categories = await getCategories();

  return (
    <section>
      <h2 className="text-xl">Filters</h2>
      <CategoryLinks categories={categories} />
    </section>
  );
};
