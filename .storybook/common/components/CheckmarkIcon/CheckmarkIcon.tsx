interface CheckmarkIconProps {
  width?: string | number;
  height?: string | number;
}

export default function CheckmarkIcon({ width = 16, height = 16 }: CheckmarkIconProps) {
  return (
    <>
      <svg width={width} height={height} viewBox="0 0 24 24" fill="none">
        <path
          d="M20 6L9 17L4 12"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </>
  );
}
