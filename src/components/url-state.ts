"use client";

import { usePathname, useSearchParams } from "next/navigation";
import React from "react";

/**
 * @description useState equivalent for search params
 */
export const useSearchParamsState = (name: string) => {
  usePathname(); // force re-render on pathname change

  const searchParams = useSearchParams();
  const value = searchParams.get(name);

  const createQueryString = React.useCallback(
    (value: string) => {
      const params = new URLSearchParams(searchParams);
      params.set(name, value);

      return params.toString();
    },
    [searchParams, name]
  );

  const setValue = (value: string) => {
    const queryString = createQueryString(value);
    window.history.replaceState(null, "", `?${queryString}`);
  };

  return [value, setValue, { createQueryString }] as const;
};
