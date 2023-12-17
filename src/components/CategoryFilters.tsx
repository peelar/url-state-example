"use server";

import { getCategories } from "@/actions";
import Link from "next/link";

export const CategoryFilters = async () => {
  const categories = await getCategories();

  return (
    <section>
      <h2 className="text-xl">Filters</h2>
      <ul>
        {categories.map((category) => (
          <li key={category.slug}>
            <Link href="#">{category.name}</Link>
          </li>
        ))}
      </ul>
    </section>
  );
};
