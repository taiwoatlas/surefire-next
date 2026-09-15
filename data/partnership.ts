export interface PartnershipPathway {
  readonly tag: string;
  readonly title: string;
  readonly description: string;
  readonly ctaLabel: string;
  readonly ctaHref: string;
}

/** Only pathways the church has actually confirmed — no invented "volunteer" or "skills" partnership tiers. */
export const partnershipPathways: readonly PartnershipPathway[] = [
  {
    tag: "Financial",
    title: "Give toward the mission",
    description: "Support the church and its Empowerment work directly by bank transfer. Full account details are provided below.",
    ctaLabel: "See account details",
    ctaHref: "#give-by-transfer",
  },
  {
    tag: "Prayer",
    title: "Stand with us in prayer",
    description: "Prayer is its own form of partnership. Commit to praying for the church's leaders, ministries and empowerment work, or bring your own need to us.",
    ctaLabel: "Share a prayer request",
    ctaHref: "/prayer-request",
  },
];

export interface PartnershipFaqItem {
  readonly question: string;
  readonly answer: string;
}

export const partnershipFaq: readonly PartnershipFaqItem[] = [
  {
    question: "How do I partner with Surefire?",
    answer:
      "Currently, by bank transfer using the account details on this page, or by committing to pray for the church and its work. Reach out through the contact page if you'd like to discuss other ways to help.",
  },
  {
    question: "Where does my partnership go?",
    answer:
      "Toward the church's general ministry and its Empowerment work. The church has not published a specific financial breakdown for this page.",
  },
  {
    question: "Can I partner on a regular basis?",
    answer:
      "Yes — many members transfer regularly using the same account details. There's no separate sign-up required; simply transfer on the schedule that works for you.",
  },
  {
    question: "Can I support a specific initiative, like the Grant Programme?",
    answer: "If you'd like your gift directed toward a specific initiative, mention it when you contact the church so it can be recorded correctly.",
  },
  {
    question: "How can I contact the church with questions?",
    answer: "Visit the Contact page for phone and WhatsApp details, or reach the church office directly.",
  },
];
