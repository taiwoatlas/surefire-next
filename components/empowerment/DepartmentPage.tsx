import { PageHeader } from "@/components/layout/PageHeader";
import { Section } from "@/components/layout/Section";
import { getEmpowermentDepartment, getEmpowermentContent } from "@/lib/content";
import { notFound } from "next/navigation";

export function DepartmentPage({ slug }: { readonly slug: string }) {
  const department = getEmpowermentDepartment(slug);
  if (!department) notFound();

  const others = getEmpowermentContent()
    .departments.filter((d) => d.slug !== slug)
    .slice(0, 3);

  return (
    <>
      <PageHeader
        eyebrow={`Department ${department.num}`}
        title={department.name}
        lede={department.theme}
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Empowerment", href: "/empowerment" }, { label: department.name }]}
      />

      <Section tone="paper">
        <div className="grid gap-10 md:grid-cols-2">
          <div>
            <p className="font-mono text-xs uppercase tracking-wide text-red">Vision</p>
            <p className="mt-3 font-display text-xl italic leading-relaxed">{department.vision}</p>
          </div>
          <div>
            <p className="font-mono text-xs uppercase tracking-wide text-red">Overview</p>
            <p className="mt-3 text-gray">{department.summary}</p>
          </div>
        </div>
      </Section>

      <Section tone="ink">
        <p className="font-mono text-xs uppercase tracking-wide text-gold">Core Functions</p>
        <h2 className="mt-3 font-display text-2xl">What this department does</h2>
        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {department.functions.map((fn) => (
            <div key={fn} className="rounded-sm bg-charcoal p-6 text-ink">
              {fn}
            </div>
          ))}
        </div>
      </Section>

      <Section tone="stone">
        <p className="font-mono text-xs uppercase tracking-wide text-red">The Pathway</p>
        <div className="mt-6 flex flex-wrap gap-3">
          {department.pathway.map((step, i) => (
            <div key={step} className="flex items-center gap-3">
              <span className="rounded-full border border-line bg-charcoal px-4 py-2 text-sm">{step}</span>
              {i < department.pathway.length - 1 && <span className="text-gray">→</span>}
            </div>
          ))}
        </div>
        {department.note && <p className="mt-6 max-w-xl text-sm text-gray">{department.note}</p>}
      </Section>

      <Section tone="paper">
        <p className="font-mono text-xs uppercase tracking-wide text-red">Elsewhere in the Ecosystem</p>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {others.map((d) => (
            <a key={d.slug} href={`/${d.slug}`} className="rounded-sm border border-line bg-charcoal p-6 transition-transform hover:-translate-y-1">
              <p className="font-mono text-xs text-red">{d.num}</p>
              <h3 className="mt-2 font-display text-lg">{d.name}</h3>
            </a>
          ))}
        </div>
      </Section>
    </>
  );
}
