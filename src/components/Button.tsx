type Props = {
  children: string;
}

export function Button({ children }: Props) {
  return (
    <button type="button" className="text-[#E6FA1E] font-semibold">
      {children}
    </button>
  );
}