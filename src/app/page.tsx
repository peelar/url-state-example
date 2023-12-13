import { CategoryFilters } from "../components/CategoryFilters";
import { BasicFilters } from "../components/BasicFilters";
import { SearchResults } from "../components/SearchResults";
import { SearchForm } from "../components/SearchForm";

const SearchGrid = () => {
  return (
    <div className="grid gap-4 lg:gap-8">
      <div className="flex justify-center">
        <SearchForm />
      </div>
      <div className="grid grid-flow-row auto-rows-max lg:grid-cols-6 gap-8 grid-cols-4">
        <aside className="order-1 col-span-2 lg:col-span-1">
          <CategoryFilters />
        </aside>
        <main className="order-3 col-span-4 lg:col-span-4 lg:order-2">
          <SearchResults />
        </main>
        <aside className="order-2 col-span-2 lg:col-span-1 lg:order-3">
          <BasicFilters />
        </aside>
      </div>
    </div>
  );
};

export default function Home() {
  return <SearchGrid />;
}
