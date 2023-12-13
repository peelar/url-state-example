import clsx from "clsx";

type CardProps = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
>;

export const Card = ({ children, className, ...props }: CardProps) => {
  return (
    <div
      className={clsx(
        "bg-white px-4 py-2 border border-stone-200 rounded-md",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};
