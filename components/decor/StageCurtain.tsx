export function StageCurtain({ side = "left" }: { readonly side?: "left" | "right" }) {
  const flip = side === "right" ? "scale-x-[-1]" : "";
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 220 600"
      preserveAspectRatio="none"
      className={`pointer-events-none absolute inset-y-0 ${side === "left" ? "left-0" : "right-0"} h-full w-24 opacity-40 md:w-36 ${flip}`}
    >
      <defs>
        <linearGradient id={`curtainFold-${side}`} x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#6E1F32" stopOpacity="0.9" />
          <stop offset="50%" stopColor="#3E0C1B" stopOpacity="0.7" />
          <stop offset="100%" stopColor="#090A0C" stopOpacity="0" />
        </linearGradient>
      </defs>
      <path d="M0,0 H220 C 180,40 140,20 110,55 C 80,20 40,40 0,0 Z" fill={`url(#curtainFold-${side})`} />
      {[0, 30, 60, 90, 120, 150, 180].map((x, i) => (
        <path
          key={x}
          d={`M${x},40 C ${x - 15},220 ${x + 25},380 ${x - 10},600 L${x + 40},600 C ${x + 55},380 ${x + 15},220 ${x + 40},40 Z`}
          fill={`url(#curtainFold-${side})`}
          opacity={0.5 + (i % 2) * 0.2}
        />
      ))}
      <path d="M0,0 C 40,40 80,20 110,55 C 140,20 180,40 220,0" stroke="#D6A647" strokeWidth="2" fill="none" opacity="0.6" />
    </svg>
  );
}
