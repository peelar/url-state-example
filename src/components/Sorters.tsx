import { getSorters } from "@/actions";
import { SortersLinks } from "./SortersLinks";

export type Sorter = Awaited<ReturnType<typeof getSorters>>[number];

export const Sorters = () => {
  const sorters = getSorters();

  return (
    <section>
      <h2 className="text-xl">Sort by</h2>
      <SortersLinks sorters={sorters} />
    </section>
  );
};
