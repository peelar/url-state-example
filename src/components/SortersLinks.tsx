"use client";

import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Sorter } from "./Sorters";
import { useSearchParamsState } from "./url-state";

export const SortersLinks = ({ sorters }: { sorters: Sorter[] }) => {
  const pathname = usePathname();
  const [sorter, _, { createQueryString }] = useSearchParamsState("sort");

  return (
    <ul>
      {sorters.map((s) => {
        const isActive = sorter === s.value.toLocaleLowerCase();
        return (
          <li key={s.value}>
            <Link
              className={clsx(isActive && "underline font-bold")}
              href={
                pathname + "?" + createQueryString(s.value.toLocaleLowerCase())
              }
            >
              {s.label}
            </Link>
          </li>
        );
      })}
    </ul>
  );
};
