import {
  SearchResults,
  SearchResultsLoading,
} from "@/components/SearchResults";
import { Suspense } from "react";
import { UrlParams } from "../page";

const CategoryPage = (params: UrlParams) => {
  return (
    <Suspense fallback={<SearchResultsLoading />}>
      <SearchResults {...params} />
    </Suspense>
  );
};

export default CategoryPage;
