import {
  SearchResults,
  SearchResultsLoading,
} from "@/components/SearchResults";
import { Suspense } from "react";

export type UrlParams = {
  searchParams: Record<"sort" | "search", string | undefined>;
  params: { category: string };
};

export default function Home(params: UrlParams) {
  return (
    <Suspense fallback={<SearchResultsLoading />}>
      <SearchResults {...params} />
    </Suspense>
  );
}
