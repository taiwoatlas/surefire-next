export function BulbString({ count = 9 }: { readonly count?: number }) {
  const width = 1000;
  const points = Array.from({ length: count }, (_, i) => {
    const x = (width / (count - 1)) * i;
    const t = i / (count - 1);
    const y = 18 + Math.sin(t * Math.PI) * 26;
    return { x, y };
  });

  const wirePath = points.map((p, i) => (i === 0 ? `M${p.x},${p.y}` : `L${p.x},${p.y}`)).join(" ");

  return (
    <svg aria-hidden="true" viewBox={`0 0 ${width} 60`} preserveAspectRatio="none" className="h-12 w-full">
      <defs>
        <radialGradient id="bulbGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#F6D98A" stopOpacity="0.9" />
          <stop offset="60%" stopColor="#D6A647" stopOpacity="0.5" />
          <stop offset="100%" stopColor="#D6A647" stopOpacity="0" />
        </radialGradient>
      </defs>
      <path d={wirePath} stroke="#4B3A22" strokeWidth="1.5" fill="none" opacity="0.6" />
      {points.map((p, i) => (
        <g key={i}>
          <circle cx={p.x} cy={p.y} r="10" fill="url(#bulbGlow)" />
          <circle cx={p.x} cy={p.y} r="3.5" fill="#F6D98A" />
        </g>
      ))}
    </svg>
  );
}
