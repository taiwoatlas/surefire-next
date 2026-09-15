import { Accordion } from "@/components/ui/Accordion";
import { partnershipFaq } from "@/data/partnership";

export function PartnershipFAQ() {
  const items = partnershipFaq.map((item, i) => ({
    id: `faq-${i}`,
    title: item.question,
    content: item.answer,
  }));

  return <Accordion items={items} />;
}
