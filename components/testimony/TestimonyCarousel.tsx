"use client";

import * as React from "react";
import { publishedTestimonies } from "@/data/testimonies";
import { EmptyState } from "@/components/church/EmptyState";

export function TestimonyCarousel() {
  const [index, setIndex] = React.useState(0);

  if (publishedTestimonies.length === 0) {
    return (
      <EmptyState
        title="No testimonies published yet"
        description="Stories will appear here once shared through the Testimony page with permission to publish."
      />
    );
  }

  const testimony = publishedTestimonies[index]!;

  return (
    <div className="rounded-sm border border-line bg-charcoal p-8 text-center">
      <p className="font-display text-xl italic leading-relaxed">&ldquo;{testimony.text}&rdquo;</p>
      <p className="mt-4 text-sm text-gray">— {testimony.name}</p>
      {publishedTestimonies.length > 1 && (
        <div className="mt-6 flex justify-center gap-2">
          {publishedTestimonies.map((_, i) => (
            <button
              key={i}
              type="button"
              aria-label={`Show testimony ${i + 1}`}
              onClick={() => setIndex(i)}
              className={`h-2 w-2 rounded-full ${i === index ? "bg-red" : "bg-line"}`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
