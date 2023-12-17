import { getProducts } from "@/actions";
import { Card } from "./Card";

export const SearchForm = () => {
  return (
    <Card className="w-full md:w-96">
      <form
        action={async () => {
          "use server";

          await getProducts();
        }}
        className="flex gap-2"
      >
        <input
          placeholder="Search for products..."
          className="bg-white w-full"
          type="text"
        />
        <button className="bg-stone-800 hover:bg-stone-800/90 text-white rounded-md px-4 py-2">
          Search
        </button>
      </form>
    </Card>
  );
};
