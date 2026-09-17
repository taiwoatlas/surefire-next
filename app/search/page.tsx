import type { Metadata } from "next";
import { PageHeader } from "@/components/layout/PageHeader";
import { Section } from "@/components/layout/Section";
import { SearchPageContent } from "@/components/search/SearchPageContent";

export const metadata: Metadata = {
  title: "Search",
  description: "Search across sermons, ministries, services, and the Empowerment ecosystem.",
};

export default function SearchPage() {
  return (
    <>
      <PageHeader eyebrow="Find Anything" title="Search" breadcrumbs={[{ label: "Home", href: "/" }, { label: "Search" }]} />
      <Section tone="paper">
        <div className="mx-auto max-w-2xl">
          <SearchPageContent />
        </div>
      </Section>
    </>
  );
}
