import { getSorters } from "@/actions";

export const Sorters = () => {
  const sorters = getSorters();

  return (
    <section>
      <h2 className="text-xl">Sort by</h2>
      <ul>
        {sorters.map((sorter) => (
          <li key={sorter.value}>{sorter.label}</li>
        ))}
      </ul>
    </section>
  );
};
