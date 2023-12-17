"use client";

import clsx from "clsx";
import Link from "next/link";
import { Sorter } from "./Sorters";
import { useSearchParamsState } from "./url-state";

export const SortersLinks = ({ sorters }: { sorters: Sorter[] }) => {
  const [sorter, _, { createQueryString }] = useSearchParamsState("sort");

  return (
    <ul>
      {sorters.map((s) => {
        const isActive = sorter === s.value.toLocaleLowerCase();
        return (
          <li key={s.value}>
            <Link
              className={clsx(isActive && "underline font-bold")}
              href={"?" + createQueryString(s.value.toLocaleLowerCase())}
            >
              {s.label}
            </Link>
          </li>
        );
      })}
    </ul>
  );
};
