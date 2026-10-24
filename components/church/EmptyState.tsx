interface EmptyStateProps {
  readonly badge?: string;
  readonly title: string;
  readonly description: string;
}

export function EmptyState({ badge = "Coming Soon", title, description }: EmptyStateProps) {
  return (
    <div className="rounded-xl border border-[#E0E0E0] bg-white p-6 text-center text-[#101010] sm:p-8">
      <span className="inline-block rounded-full bg-[#FCEBED] px-3 py-1 font-mono text-xs uppercase tracking-wide text-[#a81023]">
        {badge}
      </span>
      <h3 className="mt-4 font-display text-2xl font-bold text-[#101010]">{title}</h3>
      <p className="mx-auto mt-3 max-w-md text-sm leading-6 text-[#686563]">{description}</p>
    </div>
  );
}
