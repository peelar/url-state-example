import { RedirectType, notFound, redirect } from "next/navigation";
import { Card } from "./Card";
import { SearchInput } from "./SearchInput";

export const SearchForm = () => {
  return (
    <Card className="w-full md:w-96">
      <form
        action={async (formData: FormData) => {
          "use server";
          const search = formData.get("search") as string | undefined;

          if (!search) notFound();

          // todo: one source of truth for all search params
          redirect(`?search=${search}`, RedirectType.replace);
        }}
        className="flex gap-2"
      >
        <SearchInput />
        <button className="bg-stone-800 hover:bg-stone-800/90 text-white rounded-md px-4 py-2">
          Search
        </button>
      </form>
    </Card>
  );
};
