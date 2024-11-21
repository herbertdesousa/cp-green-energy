type Props = {
  children: string;
  onClick?(): void;
}

export function Button({ children, onClick }: Props) {
  return (
    <button
      type="button"
      className="text-[#E6FA1E] font-semibold"
      onClick={onClick}
    >
      {children}
    </button>
  );
}