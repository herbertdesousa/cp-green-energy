type Props = {
  progress: number;
  size?: number;
  strokeWidth?: number;
  children?: React.ReactNode;
};

export function ProgressRing({
  progress,
  size = 100,
  strokeWidth = 10,
  children,
}: Props) {
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (progress / 100) * circumference;

  return (
    <svg
      width={size}
      height={size}
      className="flex justify-center items-center"
    >
      <circle
        cx={size / 2}
        cy={size / 2}
        r={radius}
        stroke="rgba(255, 255, 255, 0.5)"
        strokeWidth={strokeWidth - 5}
        fill="none"
        className="opacity-20"
      />
      <circle
        cx={size / 2}
        cy={size / 2}
        r={radius}
        stroke="#E6FA1E"
        strokeWidth={strokeWidth}
        fill="none"
        strokeDasharray={circumference}
        strokeDashoffset={offset}
        strokeLinecap="round"
        className="transition-all duration-300"
      />
      {children}
    </svg>
  );
};