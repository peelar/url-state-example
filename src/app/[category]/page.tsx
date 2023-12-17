import { SearchResults } from "@/components/SearchResults";
import React from "react";
import { UrlParams } from "../page";

const CategoryPage = (params: UrlParams) => {
  return <SearchResults {...params} />;
};

export default CategoryPage;
