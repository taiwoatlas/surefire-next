interface EmptyStateProps {
  readonly badge?: string;
  readonly title: string;
  readonly description: string;
}

export function EmptyState({ badge = "Coming Soon", title, description }: EmptyStateProps) {
  return (
    <div className="rounded-sm border border-dashed border-line bg-charcoal p-10 text-center">
      <span className="inline-block rounded-full bg-stone px-3 py-1 font-mono text-xs uppercase tracking-wide text-red">
        {badge}
      </span>
      <h3 className="mt-4 font-display text-2xl">{title}</h3>
      <p className="mx-auto mt-3 max-w-md text-sm text-gray">{description}</p>
    </div>
  );
}
