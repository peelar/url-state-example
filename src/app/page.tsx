import { SearchResults } from "@/components/SearchResults";

export type UrlParams = {
  searchParams: Record<"sort", string | undefined>;
  params: { category: string };
};

export default function Home(params: UrlParams) {
  return <SearchResults {...params} />;
}
