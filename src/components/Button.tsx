import classNames from "classnames";

type Props = {
  children: React.ReactNode;
  onClick?(): void;
  className?: string;
}

export function Button({ children, onClick, className }: Props) {
  return (
    <button
      type="button"
      className={classNames("text-[#E6FA1E] font-semibold", className)}
      onClick={onClick}
    >
      {children}
    </button>
  );
}