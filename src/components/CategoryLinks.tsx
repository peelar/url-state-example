"use client";

import clsx from "clsx";
import Link from "next/link";
import { Category } from "./CategoryFilters";
import { usePathname } from "next/navigation";

export const CategoryLinks = ({ categories }: { categories: Category[] }) => {
  const pathname = usePathname();

  return (
    <ul>
      {categories.map((category) => {
        const isActive = pathname === `/${category.slug}`;
        return (
          <li key={category.slug}>
            <Link
              className={clsx(isActive && "underline font-bold")}
              href={category.slug === "all" ? "/" : `/${category.slug}`}
            >
              {category.name}
            </Link>
          </li>
        );
      })}
    </ul>
  );
};
