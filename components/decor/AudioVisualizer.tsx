export function AudioVisualizer({ bars = 24, className = "" }: { readonly bars?: number; readonly className?: string }) {
  return (
    <div aria-hidden="true" className={`flex h-16 items-end gap-1 ${className}`}>
      {Array.from({ length: bars }).map((_, i) => (
        <span
          key={i}
          className="audio-bar w-1.5 rounded-full bg-gold"
          style={{ animationDelay: `${(i % 8) * 0.12}s` }}
        />
      ))}
    </div>
  );
}
